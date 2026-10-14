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
import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'node:fs';
import { dirname } from 'node:path';

// ---------------- 配置 ----------------
const GH_USER = process.env.GH_USER || 'ly6980';
const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN || '';
const REPO_SLUG = process.env.REPO_SLUG || '';
const STATE_PATH = process.env.STATE_PATH || 'state.json';
const DASHBOARD_PATH = process.env.DASHBOARD_PATH || 'DASHBOARD.md';
const SITE_PATH = process.env.SITE_PATH || 'site/index.html';
function siteUrl() {
  if (!REPO_SLUG || !REPO_SLUG.includes('/')) return '';
  const [o, r] = REPO_SLUG.split('/');
  return `https://${o}.github.io/${r}/`;
}
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
// release 正文若是 HTML（下载表格/徽章墙）则剥离标签，避免展示乱码与浪费翻译配额
function stripHtml(s) {
  return String(s || '')
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<br\s*\/?>/gi, '\n')
    .replace(/<\/(p|div|tr|table|li|ul|ol|h[1-6]|blockquote|td|th)>/gi, '\n')
    .replace(/<\/?[a-zA-Z][^>\n]*>/g, ' ')
    .replace(/&nbsp;/gi, ' ')
    .replace(/&amp;/gi, '&').replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&quot;/gi, '"').replace(/&#39;/gi, "'")
    .replace(/[ \t\xa0]+/g, ' ')
    .replace(/\n[ \t]*/g, '\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}
function cleanBody(s) {
  const t = String(s || '');
  if ((t.match(/<\/?[a-zA-Z][^>\n]*>/g) || []).length > 8) return stripHtml(t);
  return t;
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
// 主翻译源熔断：连续失败 N 次后本轮不再尝试，避免上游故障时每个条目白等超时
let primaryFailStreak = 0;
let primaryDead = false;
const PRIMARY_MAX_STREAK = 3;
const PRIMARY_TIMEOUT = 15000;

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
  }, PRIMARY_TIMEOUT);
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
  if (T_API_KEY && !primaryDead) {
    zh = await translateWithRetry(() => translatePrimary(text), `${label}/主源`);
    if (zh) {
      primaryFailStreak = 0;
    } else {
      primaryFailStreak++;
      console.warn(`  主翻译源不可用，尝试 DeepL`);
      if (primaryFailStreak >= PRIMARY_MAX_STREAK) {
        primaryDead = true;
        console.warn(`  主翻译源连续失败 ${primaryFailStreak} 次，本轮剩余条目跳过主源`);
      }
    }
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
      full, url: repo.html_url, desc: repo.description || '', lang: repo.language || '—', stars: repo.stargazers_count || 0,
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
    // HTML 正文先清洗，后续翻译/展示/推送都用干净文本
    if (r.latest?.body) r.latest.body = cleanBody(r.latest.body);
    const prev = state.repos[r.full] || {};
    const curKey = r.latest ? `rel:${r.latest.id}` : (r.commit ? `commit:${r.commit.sha}` : 'none');
    const isNew = !isFirstRun && prev.key && prev.key !== curKey && curKey !== 'none';
    const withinBackfill = r.latest && new Date(r.latest.published_at).getTime() >= backfillCutoff;

    let zh = null;
    const bodyText = r.latest?.body || '';
    // 正文过短（多为纯 HTML 剥离后的残留）则跳过翻译，节省配额
    if (bodyText.length >= 20 && (isNew || (isFirstRun && withinBackfill))) {
      const t = await translateSmart(state.translations, `rel:${r.latest.id}`, bodyText, r.full);
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
  const okResults = results.filter((r) => !r.__error);
  const md = renderDashboard(okResults, fresh, startedAt, isFirstRun);
  writeFileSync(DASHBOARD_PATH, md);
  writeFileSync(STATE_PATH, JSON.stringify(state, null, 2));
  console.log(`已写入 ${DASHBOARD_PATH} / ${STATE_PATH}`);

  // 5. 生成网站并部署到 gh-pages
  const siteHtml = renderSite(okResults, fresh, startedAt);
  mkdirSync(dirname(SITE_PATH), { recursive: true });
  writeFileSync(SITE_PATH, siteHtml);
  console.log(`已写入 ${SITE_PATH}（${siteHtml.length} 字节）`);
  await deploySite(siteHtml);

  // 6. Telegram digest（首次运行不推送，避免 171 条刷屏）
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

// ---------------- 网站生成 ----------------
function renderSite(results, fresh, startedAt) {
  const sorted = [...results].sort((a, b) => {
    const ta = a.latest?.published_at || a.commit?.date || '';
    const tb = b.latest?.published_at || b.commit?.date || '';
    return tb.localeCompare(ta);
  });
  const data = {
    generatedAt: startedAt.toISOString().replace('T', ' ').slice(0, 16) + ' UTC',
    repoSlug: REPO_SLUG,
    fresh: fresh.map((r) => ({
      full: r.full, url: r.url,
      tag: r.latest.tag, prerelease: r.latest.prerelease,
      published_at: r.latest.published_at, date: fmtDate(r.latest.published_at),
      zh: r.zh ? r.zh.slice(0, 3000) : null,
      body: (r.latest.body || '').slice(0, 4000),
      release_url: r.latest.url,
    })),
    all: sorted.map((r) => {
      const ts = r.latest?.published_at || r.commit?.date;
      return {
        full: r.full, url: r.url,
        desc: (r.desc || '').slice(0, 120), lang: r.lang || '—', stars: r.stars || 0,
        tag: r.latest?.tag || null, prerelease: !!r.latest?.prerelease,
        published_at: ts, date: fmtDate(ts),
      };
    }),
  };
  // 今日 / 7 天更新速览统计
  const stats = { today: { n: 0, rel: 0, stable: 0, beta: 0 }, week: { n: 0, rel: 0, stable: 0, beta: 0 } };
  for (const r of sorted) {
    const ts = r.latest?.published_at || r.commit?.date;
    const d = ts ? (Date.now() - new Date(ts).getTime()) / 864e5 : 99;
    const bk = d < 1 ? 'today' : (d <= 7 ? 'week' : null);
    if (!bk) continue;
    const o = stats[bk]; o.n++;
    if (r.latest) { o.rel++; if (r.latest.prerelease) o.beta++; else o.stable++; }
  }
  data.stats = stats;
  // 防止 release 正文里的 </script> 冲破 script 标签
  const json = JSON.stringify(data).replace(/<\/script/gi, '<\\/script');

  return '<!DOCTYPE html>\n'
  + '<html lang="zh-CN">\n<head>\n<meta charset="utf-8">\n'
  + '<meta name="viewport" content="width=device-width, initial-scale=1">\n'
  + '<title>⭐ Star 动态看板</title>\n<style>\n'
  + ':root{--bg:#fff;--fg:#1a1a1a;--muted:#666;--card:#f6f7f9;--border:#e3e5e8;--accent:#0969da;--green:#1a7f37;--amber:#9a6700}\n'
  + '@media (prefers-color-scheme:dark){:root{--bg:#0d1117;--fg:#e6edf3;--muted:#8b949e;--card:#161b22;--border:#30363d;--accent:#4493f8;--green:#3fb950;--amber:#d29922}}\n'
  + '*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--fg);font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Hiragino Sans GB","Microsoft YaHei",sans-serif;line-height:1.6}\n'
  + '.wrap{max-width:960px;margin:0 auto;padding:0 16px}header.top{padding:26px 0 6px}h1{font-size:24px;margin:0 0 4px}.meta{color:var(--muted);font-size:13px}\n'
  + '.filters{position:sticky;top:0;background:var(--bg);padding:12px 0;border-bottom:1px solid var(--border);display:flex;gap:8px;flex-wrap:wrap;z-index:10}\n'
  + '.filters input,.filters select{background:var(--card);color:var(--fg);border:1px solid var(--border);border-radius:8px;padding:8px 10px;font-size:14px}\n'
  + '.filters input{flex:1;min-width:150px}h2{font-size:18px;margin:26px 0 12px}\n'
  + '.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:12px}\n'
  + '.card h3{margin:0 0 6px;font-size:16px;word-break:break-all}.card h3 a{color:var(--fg);text-decoration:none}.card h3 a:hover{color:var(--accent)}\n'
  + '.badge{display:inline-block;font-size:12px;padding:2px 8px;border-radius:999px;margin:0 6px 4px 0;border:1px solid var(--border);white-space:nowrap}\n'
  + '.badge.stable{color:var(--green);border-color:var(--green)}.badge.beta{color:var(--amber);border-color:var(--amber)}.badge.commit{color:var(--muted)}\n'
  + '.rowmeta{color:var(--muted);font-size:13px;margin:6px 0}.rowmeta.desc{word-break:break-word}\n'
  + '.zh{white-space:pre-wrap;word-break:break-word;margin:8px 0;font-size:14px}\n'
  + 'details{margin-top:8px}details summary{cursor:pointer;color:var(--accent);font-size:14px}\n'
  + 'details pre{white-space:pre-wrap;word-break:break-word;background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:10px;font-size:13px;color:var(--muted);max-height:400px;overflow:auto}\n'
  + '.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:12px}.grid .card{margin-bottom:0}.grid .card h3{font-size:15px}\n'
  + '.empty{color:var(--muted);padding:24px;text-align:center}details.group{margin-bottom:10px}details.group>summary{cursor:pointer;font-size:16px;font-weight:600;padding:10px 2px;list-style:none}details.group>summary::-webkit-details-marker{display:none}details.group>summary:before{content:"▸ ";color:var(--muted)}details.group[open]>summary:before{content:"▾ "}.timeline{position:relative;margin:6px 0 0 6px;padding-left:22px;border-left:2px solid var(--border)}.titem{position:relative;padding-bottom:16px}.titem .dot{position:absolute;left:-29px;top:5px;width:12px;height:12px;border-radius:50%;background:var(--muted);box-shadow:0 0 0 3px var(--bg),0 0 0 5px var(--border)}.titem .dot.stable{background:var(--green)}.titem .dot.beta{background:var(--amber)}.tmonth{font-weight:700;font-size:15px;margin:20px 0 12px}.tmonth:first-child{margin-top:6px}.titem .thead{font-size:15px;font-weight:600;word-break:break-all}.titem .thead a{color:var(--fg);text-decoration:none}.titem .thead a:hover{color:var(--accent)}.nrow{padding:10px 2px;border-bottom:1px solid var(--border);font-size:14px;word-break:break-all}.nrow a{color:var(--fg);text-decoration:none;font-weight:600}.nrow a:hover{color:var(--accent)}.stats{display:flex;gap:10px;flex-wrap:wrap;margin:2px 0 14px}.stat{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:8px 14px;font-size:13px;color:var(--muted)}.stat b{color:var(--fg);font-size:16px}footer{color:var(--muted);font-size:12px;text-align:center;padding:28px 0}a{color:var(--accent)}\n'
  + '</style>\n</head>\n<body>\n<div class="wrap">\n'
  + '<header class="top"><h1>⭐ Star 动态看板</h1><div class="meta" id="meta"></div></header>\n'
  + '<div class="filters">\n'
  + '<input id="q" type="search" placeholder="搜索项目名 / 简介…">\n'
  + '<select id="fType"><option value="">全部类型</option><option value="stable">✅ 正式版</option><option value="beta">🧪 测试版</option><option value="commit">📝 仅提交</option></select>\n'
  + '<select id="fLang"><option value="">全部语言</option></select>\n'
  + '<select id="fSort"><option value="time">按更新时间</option><option value="name">按名称</option></select>\n'
  + '</div>\n'
  + '<section id="freshSec"><h2>🆕 本次新增 <span id="freshCount"></span></h2><div id="fresh"></div></section>\n'
  + '<section><h2>📋 全部项目 <span id="allCount"></span></h2><div class="stats" id="stats"></div><div id="all"></div></section>\n'
  + '<footer>由 star-board 每 3 小时自动更新 · <a href="https://github.com/' + escHtml(REPO_SLUG) + '">仓库</a></footer>\n'
  + '</div>\n<script>\n'
+ 'var DATA = ' + json + ';\n'
+ 'var SECTIONS=[{icon:"⚡",name:"今日内有更新"},{icon:"🔥",name:"7 天内有更新"},{icon:"🗓️",name:"30 天内有更新"},{icon:"🕰️",name:"更早之前"}];\n'
+ 'function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}\n'
+ 'function ago(ts){if(!ts)return "";var s=Math.floor((Date.now()-new Date(ts).getTime())/1000);if(s<0)return "刚刚";if(s<3600)return Math.floor(s/60)+" 分钟前";if(s<86400)return Math.floor(s/3600)+" 小时前";if(s<86400*30)return Math.floor(s/86400)+" 天前";if(s<86400*365)return Math.floor(s/86400/30)+" 个月前";return Math.floor(s/86400/365)+" 年前";}\n'
+ 'function sectionOf(r){if(!r.published_at)return 3;var d=(Date.now()-new Date(r.published_at).getTime())/86400000;if(d<1)return 0;if(d<=7)return 1;if(d<=30)return 2;return 3;}\n'
+ 'function badge(r){if(!r.tag)return "<span class=\\"badge commit\\">📝 仅提交</span>";return r.prerelease?"<span class=\\"badge beta\\">🧪 测试版</span>":"<span class=\\"badge stable\\">✅ 正式版</span>";}\n'
+ 'function typeOf(r){return r.tag?(r.prerelease?"beta":"stable"):"commit";}\n'
+ 'function statsHtml(){var s=DATA.stats;if(!s)return "";'
+ 'function line(icon,name,o){return "<div class=\\"stat\\">"+icon+" "+name+"：<b>"+o.n+"</b> 个项目有更新"+(o.rel?",其中 <b>"+o.rel+"</b> 个发了新版本（"+o.stable+" 正式 / "+o.beta+" 测试）":"")+"</div>";}'
+ 'return line("⚡","今日",s.today)+line("🔥","7 天内",s.week);}\n'
+ 'function freshCard(r){var h="<div class=\\"card\\"><h3><a href=\\""+r.url+"\\" target=\\"_blank\\" rel=\\"noopener\\">"+esc(r.full)+"</a></h3>";'
+ 'h+="<div>"+badge(r)+(r.tag?" <span class=\\"badge\\">"+esc(r.tag)+"</span>":"")+"</div>";'
+ 'h+="<div class=\\"rowmeta\\">"+esc(r.date)+"（"+ago(r.published_at)+"） · <a href=\\""+r.release_url+"\\" target=\\"_blank\\" rel=\\"noopener\\">查看 Release</a></div>";'
+ 'if(r.zh){h+="<div class=\\"zh\\">"+esc(r.zh)+"</div>";if(r.body){h+="<details><summary>查看原文</summary><pre>"+esc(r.body)+"</pre></details>";}}'
+ 'else if(r.body){h+="<div class=\\"zh\\">"+esc(r.body)+"</div>";}else{h+="<div class=\\"rowmeta\\">（无文字更新说明，详见 Release）</div>";}'
+ 'return h+"</div>";}\n'
+ 'function tlItem(r){var dot=r.tag?(r.prerelease?"beta":"stable"):"commit";'
+ 'var h="<div class=\\"titem\\"><span class=\\"dot "+dot+"\\"></span><div class=\\"tbody\\">";'
+ 'h+="<div class=\\"thead\\"><a href=\\""+r.url+"\\" target=\\"_blank\\" rel=\\"noopener\\">"+esc(r.full)+"</a> "+badge(r)+(r.tag?" <span class=\\"badge\\">"+esc(r.tag)+"</span>":"")+"</div>";'
+ 'h+="<div class=\\"rowmeta\\">"+esc(r.date)+" · "+ago(r.published_at)+" · "+esc(r.lang)+" · ⭐ "+(r.stars||0)+"</div>";'
+ 'if(r.desc){h+="<div class=\\"rowmeta desc\\">"+esc(r.desc)+"</div>";}'
+ 'return h+"</div></div>";}\n'
+ 'function nameRow(r){return "<div class=\\"nrow\\"><a href=\\""+r.url+"\\" target=\\"_blank\\" rel=\\"noopener\\">"+esc(r.full)+"</a> "+badge(r)+" <span class=\\"rowmeta\\">"+esc(r.lang)+" · ⭐ "+(r.stars||0)+" · "+esc(r.date)+"</span></div>";}\n'
+ 'function matchFilters(r){var q=document.getElementById("q").value.toLowerCase();var t=document.getElementById("fType").value;var l=document.getElementById("fLang").value;'
+ 'return (!q||r.full.toLowerCase().indexOf(q)>=0||(r.desc||"").toLowerCase().indexOf(q)>=0)&&(!t||typeOf(r)===t)&&(!l||r.lang===l);}\n'
+ 'function renderAll(){var mode=document.getElementById("fSort").value;var list=DATA.all.filter(matchFilters);var box=document.getElementById("all");var h="",i;'
+ 'if(mode==="name"){list.sort(function(a,b){var x=a.full.toLowerCase(),y=b.full.toLowerCase();return x<y?-1:(x>y?1:0);});'
+ 'for(i=0;i<list.length;i++){h+=nameRow(list[i]);}}'
+ 'else{var groups=[[],[],[],[]];for(i=0;i<list.length;i++){groups[sectionOf(list[i])].push(list[i]);}'
+ 'for(i=0;i<4;i++){if(!groups[i].length)continue;'
+ 'h+="<details class=\\"group\\""+(i===0?" open":"")+"><summary>"+SECTIONS[i].icon+" "+SECTIONS[i].name+"（"+groups[i].length+"）</summary>";'
+ 'h+="<div class=\\"timeline\\">"+groups[i].map(tlItem).join("")+"</div></details>";}}'
+ 'if(!list.length){h="<div class=\\"empty\\">没有匹配的项目</div>";}'
+ 'box.innerHTML=h;document.getElementById("allCount").textContent="（"+list.length+" / "+DATA.all.length+"）";}\n'
+ '(function(){'
+ 'document.getElementById("meta").textContent="共 "+DATA.all.length+" 个项目 · 生成于 "+DATA.generatedAt+" · 每 3 小时自动更新";'
+ 'document.getElementById("stats").innerHTML=statsHtml();'
+ 'var langs={},i;for(i=0;i<DATA.all.length;i++){langs[DATA.all[i].lang]=1;}'
+ 'var sel=document.getElementById("fLang");Object.keys(langs).sort().forEach(function(l){var o=document.createElement("option");o.value=l;o.textContent=l;sel.appendChild(o);});'
+ 'var fh="";for(i=0;i<DATA.fresh.length;i++){fh+=freshCard(DATA.fresh[i]);}'
+ 'document.getElementById("fresh").innerHTML=fh||"<div class=\\"empty\\">本轮无新增</div>";'
+ 'document.getElementById("freshCount").textContent=DATA.fresh.length?"（"+DATA.fresh.length+"）":"";'
+ 'if(!DATA.fresh.length){document.getElementById("freshSec").style.display="none";}'
+ 'renderAll();'
+ '["q","fType","fLang","fSort"].forEach(function(id){document.getElementById(id).addEventListener("input",renderAll);});'
+ '})();\n'
+ '</scr'+'ipt>\n</body>\n</html>\n';




}

// ---------------- gh-pages 部署 ----------------
async function ghApiJson(method, path, body) {
  const res = await fetchTimeout(`https://api.github.com${path}`, {
    method,
    headers: { ...ghHeaders, 'Content-Type': 'application/json' },
    body: body ? JSON.stringify(body) : undefined,
  });
  let j = {};
  try { j = await res.json(); } catch { /* ignore */ }
  return { res, j };
}

async function deploySite(html) {
  if (!GH_TOKEN || !siteUrl()) { console.log('跳过网站部署：缺少 GH_TOKEN 或 REPO_SLUG'); return; }
  const [owner, repo] = REPO_SLUG.split('/');
  const path = `/repos/${owner}/${repo}/contents/index.html`;
  let sha = null;
  try {
    const got = await ghApiJson('GET', path + '?ref=gh-pages');
    if (got.res.ok && got.j.sha) sha = got.j.sha;
  } catch { /* 分支/文件可能尚不存在 */ }
  const body = {
    message: `site: 更新看板页面 ${new Date().toISOString().slice(0, 16).replace('T', ' ')}`,
    content: Buffer.from(html, 'utf8').toString('base64'),
    branch: 'gh-pages',
  };
  if (sha) body.sha = sha;
  const { res } = await ghApiJson('PUT', path, body);
  console.log(res.ok ? '网站已部署到 gh-pages 分支' : `网站部署失败: HTTP ${res.status}`);
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
  const url = siteUrl();
  if (url) text += `\n\n<a href="${url}">打开完整看板</a>`;
  else if (REPO_SLUG) text += `\n\n<a href="https://github.com/${REPO_SLUG}/blob/main/DASHBOARD.md">打开完整看板</a>`;

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
