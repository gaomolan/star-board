#!/usr/bin/env node
/**
 * star-board
 * 抓取 GitHub star 列表 -> 每个仓库的最新 release（含 prerelease 区分）
 * 无 release 的仓库用最新 commit 兜底 -> 新增内容翻译成中文（主备翻译源）
 * -> 生成双语 DASHBOARD.md（中文在上、原文默认折叠）-> Telegram digest 推送
 *
 * 环境变量：
 *   GH_USER / GITHUB_TOKEN(GH_TOKEN)   GitHub 用户名与 token（Actions 里自动提供）
 *   REPO_SLUG                           本仓库 slug（如 ly6980/star-board），用于看板内链接
 *   TRANSLATE_API_URL                   主翻译源（默认 https://api.life-pulse.io/v1，OpenAI 兼容）
 *   TRANSLATE_API_KEY                   主翻译源 key（可选）
 *   TRANSLATE_MODEL                     主翻译模型（默认 tencent/Hy-MT2-30B-A3B）
 *   DEEPL_API_KEY                       兜底 DeepL key（可选，:fx 免费 key 走 api-free）
 *   TELEGRAM_BOT_TOKEN / TELEGRAM_CHAT_ID  推送用（可选，缺一个则跳过推送）
 *   STATE_PATH / DASHBOARD_PATH         状态与看板路径（默认 state.json / DASHBOARD.md）
 *   BACKFILL_DAYS                       首次运行时只翻译 N 天内的 release（默认 30）
 *   TEST_LIMIT                          调试用：只处理前 N 个 star 仓库（默认 0 = 全部）
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

// ---------------- 配置 ----------------
const GH_USER = process.env.GH_USER || 'ly6980';
const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '';
const REPO_SLUG = process.env.REPO_SLUG || '';
const STATE_PATH = process.env.STATE_PATH || 'state.json';
const DASHBOARD_PATH = process.env.DASHBOARD_PATH || 'DASHBOARD.md';
const BACKFILL_DAYS = parseInt(process.env.BACKFILL_DAYS || '30', 10);
const TEST_LIMIT = parseInt(process.env.TEST_LIMIT || '0', 10);

const T_API_URL = (process.env.TRANSLATE_API_URL || 'https://api.life-pulse.io/v1').replace(/\/+$/, '');
const T_API_KEY = process.env.TRANSLATE_API_KEY || '';
const T_MODEL = process.env.TRANSLATE_MODEL || 'tencent/Hy-MT2-30B-A3B';
const DEEPL_KEY = process.env.DEEPL_API_KEY || '';
const TG_TOKEN = process.env.TELEGRAM_BOT_TOKEN || '';
const TG_CHAT = process.env.TELEGRAM_CHAT_ID || '';

const FETCH_TIMEOUT = 25000;
const CONCURRENCY = 5;
const MAX_TRANSLATE_CHARS = 6000;

const ghHeaders = { Accept: 'application/vnd.github+json', 'User-Agent': 'star-board' };
if (GH_TOKEN) ghHeaders.Authorization = `Bearer ${GH_TOKEN}`;

// ---------------- 工具 ----------------
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function fetchTimeout(url, opts = {}, timeout = FETCH_TIMEOUT) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeout);
  try {
    return await fetch(url, { ...opts, signal: ctrl.signal });
  } finally {
    clearTimeout(t);
  }
}

async function gh(path, retries = 2) {
  for (let a = 0; a <= retries; a++) {
    try {
      const res = await fetchTimeout(`https://api.github.com${path}`, { headers: ghHeaders });
      if (res.status === 403 || res.status === 429) {
        const wait = Math.min(60000, 5000 * (a + 1));
        console.warn(`GitHub 限流 ${path}，等待 ${wait}ms`);
        await sleep(wait);
        continue;
      }
      if (!res.ok) throw new Error(`GitHub API ${res.status} ${path}`);
      return await res.json();
    } catch (e) {
      if (a === retries) throw e;
      await sleep(1500 * (a + 1));
    }
  }
}

// 简单并发池
async function pool(items, n, fn) {
  const out = new Array(items.length);
  let i = 0;
  const workers = Array.from({ length: n }, async () => {
    while (i < items.length) {
      const idx = i++;
      try {
        out[idx] = await fn(items[idx]);
      } catch (e) {
        out[idx] = { __error: String(e && e.message || e) };
      }
    }
  });
  await Promise.all(workers);
  return out;
}

function escMdTable(s) {
  return String(s ?? '').replace(/\|/g, '\\|').replace(/\r?\n/g, ' ').slice(0, 120);
}
function escHtml(s) {
  return String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
function timeAgo(ts) {
  if (!ts) return '—';
  const s = Math.floor((Date.now() - new Date(ts).getTime()) / 1000);
  if (s < 0) return '刚刚';
  if (s < 3600) return `${Math.floor(s / 60)} 分钟前`;
  if (s < 86400) return `${Math.floor(s / 3600)} 小时前`;
  if (s < 86400 * 30) return `${Math.floor(s / 86400)} 天前`;
  if (s < 86400 * 365) return `${Math.floor(s / (86400 * 30))} 个月前`;
  return `${Math.floor(s / (86400 * 365))} 年前`;
}
function fmtDate(ts) {
  if (!ts) return '—';
  const d = new Date(ts);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
function simpleHash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) { h = (h * 31 + s.charCodeAt(i)) | 0; }
  return String(h >>> 0);
}
function isChineseDominant(s) {
  if (!s || !s.trim()) return true;
  const cjk = (s.match(/[一-鿿]/g) || []).length;
  return cjk / s.length > 0.3;
}

// ---------------- 翻译（主备） ----------------
async function translatePrimary(text) {
  const res = await fetchTimeout(`${T_API_URL}/chat/completions`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${T_API_KEY}` },
    body: JSON.stringify({
      model: T_MODEL,
      temperature: 0.2,
      messages: [
        { role: 'system', content: '你是一个翻译助手。将用户提供的 GitHub Release Notes 翻译成简体中文。保留 Markdown 格式、代码块、链接、版本号、命令原文不动，只翻译自然语言部分。直接输出译文，不要加任何解释。' },
        { role: 'user', content: text.slice(0, MAX_TRANSLATE_CHARS) },
      ],
    }),
  });
  if (!res.ok) throw new Error(`主翻译源 ${res.status}`);
  const j = await res.json();
  const t = j.choices?.[0]?.message?.content?.trim();
  if (!t) throw new Error('主翻译源返回为空');
  return t;
}

async function translateDeepL(text) {
  const params = new URLSearchParams();
  params.append('text', text.slice(0, MAX_TRANSLATE_CHARS));
  params.append('target_lang', 'ZH');
  const res = await fetchTimeout('https://api-free.deepl.com/v2/translate', {
    method: 'POST',
    headers: { Authorization: `DeepL-Auth-Key ${DEEPL_KEY}`, 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params,
  });
  if (!res.ok) throw new Error(`DeepL ${res.status}`);
  const j = await res.json();
  const t = j.translations?.[0]?.text?.trim();
  if (!t) throw new Error('DeepL 返回为空');
  return t;
}

// 返回 { zh, cached }；无需翻译/无可用源时返回 null
async function translateWithRetry(fn, label) {
  for (let a = 0; a < 2; a++) {
    try { return await fn(); }
    catch (e) {
      console.warn(`  翻译失败(${label}) 第${a + 1}次: ${e.message}`);
      if (a === 0) await sleep(2000);
    }
  }
  return null;
}
async function translateSmart(cache, key, text, label = '') {
  if (!text || !text.trim() || isChineseDominant(text)) return null;
  const hash = simpleHash(text);
  const hit = cache[key];
  if (hit && hit.hash === hash) return { zh: hit.zh, cached: true };
  let zh = null;
  if (T_API_KEY) {
    zh = await translateWithRetry(() => translatePrimary(text), `${label}/主源`);
    if (!zh) console.warn(`  主翻译源不可用，尝试 DeepL`);
  }
  if (!zh && DEEPL_KEY) {
    zh = await translateWithRetry(() => translateDeepL(text), `${label}/DeepL`);
  }
  if (zh) cache[key] = { zh, hash };
  return zh ? { zh, cached: false } : null;
}

// ---------------- 主流程 ----------------
async function main() {
  const startedAt = new Date();
  const state = existsSync(STATE_PATH)
    ? JSON.parse(readFileSync(STATE_PATH, 'utf8'))
    : { repos: {}, translations: {} };
  state.repos ||= {};
  state.translations ||= {};
  const isFirstRun = Object.keys(state.repos).length === 0;
  const backfillCutoff = Date.now() - BACKFILL_DAYS * 86400 * 1000;

  console.log(`star-board 启动${isFirstRun ? '（首次运行，建立基线）' : ''}，用户 ${GH_USER}`);

  // 1. star 列表
  let starred = [];
  for (let page = 1; ; page++) {
    const batch = await gh(`/users/${GH_USER}/starred?per_page=100&page=${page}`);
    starred = starred.concat(batch);
    if (batch.length < 100) break;
  }
  if (TEST_LIMIT > 0) starred = starred.slice(0, TEST_LIMIT);
  console.log(`共 ${starred.length} 个 star`);

  // 2. 逐个取 release（无 release 则取最新 commit 兜底）
  const results = await pool(starred, CONCURRENCY, async (repo) => {
    const full = repo.full_name;
    const rels = await gh(`/repos/${full}/releases?per_page=5`);
    const valid = rels.filter((r) => !r.draft);
    const latest = valid[0] || null;
    const stable = valid.find((r) => !r.prerelease) || null;
    let commit = null;
    if (!latest) {
      const commits = await gh(`/repos/${full}/commits?per_page=1`);
      if (commits[0]) {
        commit = {
          sha: commits[0].sha.slice(0, 7),
          date: commits[0].commit.committer.date,
          message: (commits[0].commit.message || '').split('\n')[0],
          url: commits[0].html_url,
        };
      }
    }
    return {
      full, url: repo.html_url, desc: repo.description || '', lang: repo.language || '—',
      latest: latest ? {
        id: latest.id, tag: latest.tag_name, name: latest.name || latest.tag_name,
        prerelease: !!latest.prerelease, published_at: latest.published_at,
        url: latest.html_url, body: latest.body || '',
      } : null,
      stable: stable ? { tag: stable.tag_name, published_at: stable.published_at } : null,
      commit,
    };
  });

  // 3. 判定新增 + 翻译
  const fresh = [];
  let translatedCount = 0;
  for (const r of results) {
    if (r.__error) { console.warn(`跳过 ${r.full || '?'}: ${r.__error}`); continue; }
    const prev = state.repos[r.full] || {};
    const curKey = r.latest ? `rel:${r.latest.id}` : (r.commit ? `commit:${r.commit.sha}` : 'none');
    const isNew = !isFirstRun && prev.key && prev.key !== curKey && curKey !== 'none';
    const withinBackfill = r.latest && new Date(r.latest.published_at).getTime() >= backfillCutoff;

    let zh = null;
    if (r.latest?.body && (isNew || (isFirstRun && withinBackfill))) {
      const t = await translateSmart(state.translations, `rel:${r.latest.id}`, r.latest.body, r.full);
      if (t) { zh = t.zh; if (!t.cached) translatedCount++; }
    }
    // 命中缓存的旧翻译也取出来展示
    if (!zh && r.latest?.body) {
      const hit = state.translations[`rel:${r.latest.id}`];
      if (hit) zh = hit.zh;
    }

    state.repos[r.full] = {
      key: curKey,
      tag: r.latest?.tag || null,
      prerelease: r.latest?.prerelease || false,
      published_at: r.latest?.published_at || r.commit?.date || null,
      url: r.url, lang: r.lang, desc: r.desc,
    };
    if (isNew) fresh.push({ ...r, zh });
    r.zh = zh;
  }

  console.log(`新增 ${fresh.length} 条，本次新翻译 ${translatedCount} 条`);

  // 4. 渲染 DASHBOARD.md
  const md = renderDashboard(results.filter((r) => !r.__error), fresh, startedAt, isFirstRun);
  writeFileSync(DASHBOARD_PATH, md);
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  console.log(`已写入 ${DASHBOARD_PATH} / ${STATE_PATH}`);

  // 5. Telegram digest（首次运行不推送，避免 171 条刷屏）
  if (!isFirstRun && fresh.length > 0 && TG_TOKEN && TG_CHAT) {
    await sendDigest(fresh);
  } else if (!TG_TOKEN || !TG_CHAT) {
    console.log('未配置 Telegram，跳过推送');
  }
}

// ---------------- 看板渲染 ----------------
function badge(r) {
  if (!r.latest) return '`无 release`';
  return r.latest.prerelease ? '`🧪 测试版`' : '`✅ 正式版`';
}

function renderDashboard(results, fresh, startedAt, isFirstRun) {
  const L = [];
  const dashUrl = REPO_SLUG ? `https://github.com/${REPO_SLUG}/blob/main/DASHBOARD.md` : '';
  L.push(`# ⭐ Star 动态看板`);
  L.push(``);
  L.push(`> 生成时间：${startedAt.toISOString().replace('T', ' ').slice(0, 19)} UTC ｜ 共 ${results.length} 个项目 ｜ 每 3 小时自动更新`);
  if (isFirstRun) L.push(`> 🆕 首次运行，已建立基线。本次只翻译了 ${BACKFILL_DAYS} 天内的 release，之后的新增会自动翻译。`);
  L.push(``);

  // 本次新增
  L.push(`## 🆕 本次新增（${fresh.length}）`);
  L.push(``);
  if (fresh.length === 0) {
    L.push(isFirstRun ? '首次运行，基线已建立。' : '本轮无新增。');
  } else {
    for (const r of fresh) {
      L.push(`### [${r.full}](${r.url}) ${badge(r)} \`${escMdTable(r.latest.tag)}\``);
      L.push(``);
      L.push(`发布时间：${fmtDate(r.latest.published_at)}（${timeAgo(r.latest.published_at)}）｜ [查看 Release](${r.latest.url})`);
      L.push(``);
      if (r.zh) {
        L.push(r.zh.slice(0, 3000));
        L.push(``);
        L.push(`<details><summary>查看原文</summary>`);
        L.push(``);
        L.push((r.latest.body || '').slice(0, 4000));
        L.push(``);
        L.push(`</details>`);
      } else if (r.latest.body.trim()) {
        if (isChineseDominant(r.latest.body)) { L.push(r.latest.body.slice(0, 3000)); }
        else { L.push(`*（原文，翻译暂不可用）*`); L.push(``); L.push(r.latest.body.slice(0, 3000)); }
      } else {
        L.push(`*（无更新说明）*`);
      }
      L.push(``);
      L.push(`---`);
      L.push(``);
    }
  }

  // 全部项目
  L.push(`## 📋 全部项目（按最近更新排序）`);
  L.push(``);
  L.push(`| 项目 | 最新版本 | 类型 | 更新时间 | 距今 |`);
  L.push(`|---|---|---|---|---|`);
  const sorted = [...results].sort((a, b) => {
    const ta = a.latest?.published_at || a.commit?.date || '';
    const tb = b.latest?.published_at || b.commit?.date || '';
    return tb.localeCompare(ta);
  });
  for (const r of sorted) {
    const ver = r.latest ? `\`${escMdTable(r.latest.tag)}\`` : '—';
    const type = r.latest ? (r.latest.prerelease ? '测试版' : '正式版') : '提交';
    const ts = r.latest?.published_at || r.commit?.date;
    L.push(`| [${escMdTable(r.full)}](${r.url}) | ${ver} | ${type} | ${fmtDate(ts)} | ${timeAgo(ts)} |`);
  }
  L.push(``);
  L.push(`---`);
  L.push(`*由 star-board 每 3 小时自动更新，也可在 Actions 页手动触发。*`);
  return L.join('\n');
}

// ---------------- Telegram digest ----------------
async function sendDigest(fresh) {
  const lines = fresh.slice(0, 20).map((r) => {
    const tag = escHtml(r.latest.tag);
    const name = escHtml(r.full);
    const summary = r.zh
      ? escHtml(r.zh.replace(/\s+/g, ' ').slice(0, 160))
      : escHtml((r.latest.body || '无更新说明').replace(/\s+/g, ' ').slice(0, 160));
    const kind = r.latest.prerelease ? '🧪测试版' : '✅正式版';
    return `▪️ <b>${name}</b> <code>${tag}</code> ${kind}\n${summary}\n<a href="${r.latest.url}">查看 Release</a>`;
  });
  let text = `<b>⭐ Star 更新速览</b>（新增 ${fresh.length} 条）\n\n${lines.join('\n\n')}`;
  if (fresh.length > 20) text += `\n\n<i>…还有 ${fresh.length - 20} 条，详见看板</i>`;
  if (REPO_SLUG) text += `\n\n<a href="https://github.com/${REPO_SLUG}/blob/main/DASHBOARD.md">打开完整看板</a>`;

  // 按 4096 字符切分
  const chunks = [];
  let cur = '';
  for (const part of text.split('\n\n')) {
    if ((cur + '\n\n' + part).length > 4000) { chunks.push(cur); cur = part; }
    else cur = cur ? cur + '\n\n' + part : part;
  }
  if (cur) chunks.push(cur);

  for (const c of chunks) {
    const res = await fetchTimeout(`https://api.telegram.org/bot${TG_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT, text: c, parse_mode: 'HTML', disable_web_page_preview: true }),
    });
    if (!res.ok) console.warn(`Telegram 推送失败: ${res.status}`);
    else console.log('Telegram digest 已发送');
    await sleep(500);
  }
}

main().catch((e) => { console.error('FATAL', e); process.exit(1); });
