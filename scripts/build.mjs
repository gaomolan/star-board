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
import { dirname, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';

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
const BACKFILL_ALL = process.env.BACKFILL_ALL === '1';
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

// 带 ETag 缓存的 GET：命中返回 { notModified: true }，304 不消耗 rate limit 配额
async function ghCached(path, etag, retries = 2) {
  for (let a = 0; a <= retries; a++) {
    try {
      const headers = { ...ghHeaders };
      if (etag) headers['If-None-Match'] = etag;
      const res = await fetchTimeout(`https://api.github.com${path}`, { headers });
      if (res.status === 304) return { notModified: true };
      if (res.status === 403 || res.status === 429) {
        const wait = Math.min(60000, 5000 * (a + 1));
        console.warn(`GitHub 限流 ${path}，等待 ${wait}ms`);
        await sleep(wait);
        continue;
      }
      if (!res.ok) throw new Error(`GitHub API ${res.status} ${path}`);
      return { json: await res.json(), etag: res.headers.get('etag') || null };
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
  let t = String(s || '');
  if ((t.match(/<\/?[a-zA-Z][^>\n]*>/g) || []).length > 8) t = stripHtml(t);
  return stripNoise(t);
}
// 发布注记噪音过滤：只删确定无用的（HTML 注释、图片、哈希表、下载章节/链接），不动正文
function stripNoise(s) {
  let t = String(s || '');
  // 1) HTML 注释
  t = t.replace(/<!--[\s\S]*?-->/g, '');
  // 2) 捐赠/赞助段落（先于链接转文本，URL 尚完整时判定）
  t = stripDonation(t);
  // 3) Markdown 图片（先于链接转文本，避免留下孤儿 "!"）：[![alt](img)](link) 和 ![alt](img) 整段删除
  t = t.replace(/\[!\[([^\]\n]*)\]\([^)\n]+\)\]\([^)\n]+\)/g, '');
  t = t.replace(/!\[([^\]\n]*)\]\([^)\n]+\)/g, '');
  // 4) 引用式链接定义：[label]: https://...
  t = t.replace(/^\s*\[[^\]\n]+\]:\s*https?:\/\/\S+\s*$/gm, '');
  // 5) 内联链接只留文本：[text](url) → text，[text][ref] → text
  t = t.replace(/\[([^\]\n]+)\]\([^)\n]+\)/g, '$1');
  t = t.replace(/\[([^\]\n]+)\]\[[^\]\n]*\]/g, '$1');
  // 6) 哈希/校验章节整个删除（标题含关键词且内容含长哈希串才删，防误伤）
  t = t.replace(/^#{1,6}\s*[^\n]*(哈希|hash|checksum|sha[\s-]?256|sha[\s-]?512|\bmd5\b)[^\n]*\r?\n([\s\S]*?)(?=^#{1,6}\s|\s*\Z)/gim,
    (m) => (/[a-fA-F0-9]{32,}/.test(m) ? '' : m));
  // 7) 残留的孤立长哈希行
  t = t.replace(/^\s*[a-fA-F0-9]{32,}\s*\|?\s*$/gm, '');
  // 8) 下载章节：标题含下载/download、后面主要是平台名/链接的行，整段删除
  t = stripDownloadSection(t);
  // 8b) GitHub 自动生成的 release notes 噪音
  t = t.replace(/^#{1,6}\s*what'?s changed\s*$/gim, '');  // ## What's Changed 标题
  t = t.replace(/\s+by @\S+ in https?:\/\/[^\s]+/g, '');  // by @user in PR链接
  t = t.replace(/^\*?\*?full changelog\*?\*?:?\s*https?:\/\/\S+\s*$/gim, '');  // Full Changelog 行
  // 8c) 表情符号（emoji）清洗
  t = t.replace(/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}\u{2B00}-\u{2BFF}\u{FE00}-\u{FE0F}]/gu, '');
  // 8d) conventional commit 的 scope：fix(twitter): → fix:
  t = t.replace(/\b(fix|feat|chore|docs|style|refactor|test|perf|build|ci|revert)(\([^)\n]+\)):/gi, '$1:');
  // 8e) Docker/构建元数据：Source commit、Published images、镜像 tag 列表
  t = t.replace(/^source commit:\s*$/gim, '');
  t = t.replace(/^[0-9a-f]{40}\s*$/gim, '');
  t = t.replace(/^published\s+.*images:\s*$/gim, '');
  t = t.replace(/^[\s\-]*[\w.\/\-]+:[a-z0-9]{7,}[\w.\-]*\s*$/gim, (m) => {
    // 只删看起来像镜像 tag 的行（ghcr.io/、docker.io/ 或含 / 的镜像名 + 长 hash tag）
    return /ghcr\.io|docker\.io|\//.test(m) ? '' : m;
  });
  t = t.replace(/^use these commit-specific image tags[\s\S]*?subsequent builds\.\s*$/gim, '');
  // 8f) Markdown 下载表格：含安装包文件名的表格整段删除
  t = t.replace(/^\|.*\|[ \t]*\r?\n\|[\s\-|:]+\|[ \t]*\r?\n(\|.*\|[ \t]*\r?\n?)+/gm, (m) => {
    return /\.(apk|exe|msi|dmg|pkg|zip|tar\.gz|deb|rpm|appimage)(\s|\||$)/i.test(m) ? '' : m;
  });
  // 8g) 推广/AFF/模板章节：状态机删除整个章节
  {
    const lines = t.split('\n');
    const out = [];
    let skip = false, skipLevel = 0;
    // 章节过滤原则（借鉴 HarmonyX）：内容类（新增功能/改进/修复/说明）保留；元数据类（下载/安装/版本/构建）过滤
    const isPromoHeader = (s) => /^#{1,6}\s*/.test(s) && /(推荐服务|优惠码|\bAFF\b|Telegram|中转|专线|直连|机场|Download\s*\/|\/\s*下载|下载地址|下载与安装|安装说明|安装教程|文件信息|版本与构建|构建信息|\bFAQ\b|Feedback|问题反馈|提交故障|需求建议|\bDownload\b.*\bInstall\b)/i.test(s);
    const headerLevel = (s) => { const m = s.match(/^(#{1,6})\s+/); return m ? m[1].length : 0; };
    for (const l of lines) {
      const s = l.trim();
      if (isPromoHeader(s)) { skip = true; skipLevel = headerLevel(s); continue; }
      if (skip) {
        const lv = headerLevel(s);
        if (lv > 0 && lv <= skipLevel) { skip = false; }
        else if (/^---\s*$/.test(s)) { skip = false; }
        else continue;
      }
      if (/\bAFF\b/i.test(s) && s.length < 300 && /简评|注/.test(s)) continue;
      if (/^Created at\s+/i.test(s)) continue;
      out.push(l);
    }
    t = out.join('\n');
  }
  // 9) 整理空行
  t = t.replace(/\n{3,}/g, '\n\n').trim();
  return t;
}
// 下载章节过滤：标题行含下载/download（# 标题或 **加粗**），后续内容 70%+ 为平台名/链接/空行时整段删除
function stripDownloadSection(s) {
  const lines = String(s).split('\n');
  const out = [];
  const isDlHeader = (l) => {
    const t = l.trim();
    return t.length <= 60 && /(下载|download)/i.test(t) &&
      (/^#{1,6}\s/.test(t) || /^\*{1,2}[^*]+\*{1,2}\s*:?\s*$/.test(t));
  };
  const isNoise = (l) => {
    const t = l.trim();
    return !t ||
      /^(Android|iOS|iPadOS|watchOS|tvOS|Windows|macOS|Linux|HarmonyOS|OpenHarmony|操作系统|OS|下载|Download|x64|x86|x86_64|aarch64|arm64|armv7|armeabi-v7a|apk|exe|msi|dmg|pkg|zip|tar\.gz)$/i.test(t) ||
      /^https?:\/\/\S+$/.test(t) ||
      /^\|/.test(t);
  };
  let i = 0;
  while (i < lines.length) {
    if (isDlHeader(lines[i])) {
      let j = i + 1, noise = 0, total = 0;
      while (j < lines.length && total < 20) {
        const t = lines[j].trim();
        if (!t) { j++; continue; }
        if (/^#{1,6}\s/.test(t)) break;
        if (/^\*{1,2}[^*]+\*{1,2}\s*:/.test(t)) break;
        if (/^[-*]\s+\S/.test(t) && !isNoise(t)) break;
        total++;
        if (isNoise(t)) noise++;
        j++;
      }
      if (total > 0 && noise / total >= 0.7) { i = j; continue; }
    }
    out.push(lines[i]);
    i++;
  }
  return out.join('\n');
}
// 作者自带中英双语：拆出中文直接用、免翻译，英文进原文
// 模式1："## English" 章节标记；模式2："---" 分隔的中英区块
function splitBilingual(text) {
  const t = String(text || '');
  const m = t.match(/^#{1,4}\s*english\b[^\n]*/im);
  if (m) {
    const before = t.slice(0, m.index).trim();
    const after = t.slice(m.index).trim();
    const cjkBefore = (before.match(/[一-鿿]/g) || []).length;
    const cjkAfter = (after.match(/[一-鿿]/g) || []).length;
    let zhPart, enPart;
    if (cjkBefore >= cjkAfter && cjkBefore >= 30) { zhPart = before; enPart = after; }
    else if (cjkAfter > cjkBefore && cjkAfter >= 30) { zhPart = after; enPart = before; }
    else return null;
    if ((enPart.match(/[A-Za-z]/g) || []).length < 30) return null;
    return { zh: zhPart, en: enPart };
  }
  // 模式2：--- 分隔块中相邻的英文条目块 + 中文条目块
  const parts = t.split(/^\s*---\s*$/m);
  if (parts.length >= 2) {
  const infos = parts.map((p) => {
    const s = p.trim();
    if (!s) return null;
    const cjk = (s.match(/[一-鿿]/g) || []).length;
    return { text: s, ratio: cjk / s.length, hasBullets: /^[-*]\s+\S/m.test(s) };
  });
  for (let i = 0; i < infos.length - 1; i++) {
    const a = infos[i], b = infos[i + 1];
    if (!a || !b || !a.hasBullets || !b.hasBullets) continue;
    const aEN = a.ratio < 0.1, aCN = a.ratio > 0.3;
    const bEN = b.ratio < 0.1, bCN = b.ratio > 0.3;
    if ((aEN && bCN) || (aCN && bEN)) {
      const zhPart = aCN ? a.text : b.text;
      const enPart = aEN ? a.text : b.text;
      if (zhPart.length < 30 || enPart.length < 30) continue;
      return { zh: zhPart, en: enPart };
    }
  }
  }  // 模式2结束
  // 模式3：开头是 "简体中文 · English" 语言切换头
  const langM = t.match(/^(\*{0,2}简体中文\*{0,2}\s*[·|/]\s*\*{0,2}English\*{0,2})/im);
  if (langM) {
    const rest = t.slice(langM.index + langM[0].length).trim();
    const cjkCount = (rest.match(/[一-鿿]/g) || []).length;
    // 如果剩余内容中文主导（CJK 占比 > 20% 且绝对数量 >= 50），直接当中文用
    if (cjkCount >= 50 && cjkCount / rest.length > 0.2) {
      return { zh: rest, en: '' };
    }
  }
  return null;
}
// annotated tag message 回退：release body 为空时取 tag message（tag 不可变，state 永久缓存）
async function getTagMessage(full, tag, state) {
  state.tagMsgCache ||= {};
  const ck = `${full}:${tag}`;
  if (ck in state.tagMsgCache) return state.tagMsgCache[ck];
  let msg = null;
  try {
    const ref = await ghCached(`/repos/${full}/git/refs/tags/${encodeURIComponent(tag)}`, null);
    const obj = ref.json && ref.json.object;
    if (obj && obj.type === 'tag' && obj.url) {
      const tr = await fetchTimeout(obj.url, { headers: ghHeaders });
      if (tr.ok) {
        const tj = await tr.json();
        if (tj.message && tj.message.trim()) msg = tj.message;
      }
    }
  } catch (e) {
    console.warn(`  tag message 获取失败 ${full}@${tag}: ${e.message}`);
  }
  state.tagMsgCache[ck] = msg;
  return msg;
}
// 捐赠/赞助 solicitation 段落：含捐赠关键词且带支付链接/账号，非列表项/标题的段落整段删除
function stripDonation(s) {
  const blocks = String(s).split(/\n\s*\n/);
  const out = blocks.filter((b) => {
    const t = b.trim();
    if (!t) return true;
    if (/^[-*]\s/.test(t) || /^#{1,6}\s/.test(t)) return true;
    const hasKw = /(donat(e|ion)s?|sponsor(ship|ed)?|afdian|爱发电|patreon|ko-fi|opencollective|打赏|捐赠|赞助|众筹)/i.test(t);
    if (!hasKw) return true;
    const hasPay = /(https?:\/\/\S+|账户|账号|account|微信|支付宝|wechat|alipay)/i.test(t);
    return !hasPay;
  });
  return out.join('\n\n').trim();
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
// 翻译结果校验：防止翻译机"偷懒"原样返回（中英混合输入时高发）
function isTranslationValid(src, zh) {
  if (!zh || !zh.trim()) return false;
  if (zh.trim() === src.trim()) return false; // 原样回显
  const srcEn = (src.match(/[A-Za-z]/g) || []).length;
  const zhEn = (zh.match(/[A-Za-z]/g) || []).length;
  // 原文英文很多时，译文英文应显著减少；技术术语/版本号允许残留（阈值 0.7）
  if (srcEn > 200 && zhEn > srcEn * 0.7) return false;
  return true;
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
        { role: 'system', content: '你是一个翻译助手。将用户提供的 GitHub Release Notes 翻译成简体中文。必须翻译所有英文内容，即使文档中已包含部分中文，也要把英文部分完整翻译，不要遗漏任何英文句子。保留 Markdown 格式、代码块、链接、版本号、命令原文不动，只翻译自然语言部分。直接输出译文，不要加任何解释。' },
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
  const endpoint = DEEPL_KEY.endsWith(':fx') ? 'https://api-free.deepl.com/v2/translate' : 'https://api.deepl.com/v2/translate';
  const res = await fetchTimeout(endpoint, {
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
      // DeepL 456（配额用尽）不重试，直接抛出由上层处理
      if (/\b456\b/.test(e.message)) throw e;
      console.warn(`  翻译失败(${label}) 第${a + 1}次: ${e.message}`);
      if (a === 0) await sleep(2000);
    }
  }
  return null;
}
async function translateSmart(state, key, text, label = '') {
  if (!text || !text.trim()) return null;
  const cjkRatio = (text.match(/[一-鿿]/g) || []).length / text.length;
  if (cjkRatio > 0.7) return null; // 几乎纯中文，无需翻译
  const hash = simpleHash(text);
  const cache = state.translations;
  const hit = cache[key];
  if (hit && hit.hash === hash) {
    // 缓存命中也要校验质量，坏缓存重新翻译
    if (isTranslationValid(text, hit.zh)) return { zh: hit.zh, cached: true };
    console.warn(`  缓存翻译质量不达标(${label})，重新翻译`);
  }
  const isMixed = cjkRatio > 0.15; // 混合内容：DeepL 优先（专业 MT 更擅长混合文本）
  const doPrimary = async () => {
    if (!T_API_KEY || primaryDead) return null;
    const t = await translateWithRetry(() => translatePrimary(text), `${label}/主源`);
    if (t && isTranslationValid(text, t)) {
      primaryFailStreak = 0;
      return t;
    }
    primaryFailStreak++;
    if (t) console.warn(`  主源翻译质量不达标(${label})`);
    if (primaryFailStreak >= PRIMARY_MAX_STREAK) {
      primaryDead = true;
      console.warn(`  主翻译源连续失败 ${primaryFailStreak} 次，本轮剩余条目跳过主源`);
    }
    return null;
  };
  const doDeepL = async () => {
    if (!DEEPL_KEY) return null;
    // DeepL 配额熔断：456 后 24 小时内跳过
    if (state.deeplQuotaExceededAt && Date.now() - state.deeplQuotaExceededAt < 24 * 3600 * 1000) {
      return null;
    }
    try {
      const t = await translateWithRetry(() => translateDeepL(text), `${label}/DeepL`);
      if (t && isTranslationValid(text, t)) return t;
      if (t) console.warn(`  DeepL 翻译质量不达标(${label})`);
    } catch (e) {
      if (/\b456\b/.test(e.message)) {
        state.deeplQuotaExceededAt = Date.now();
        console.warn(`  DeepL 配额用尽(456)，24 小时内跳过 DeepL`);
      } else {
        console.warn(`  DeepL 异常(${label}): ${e.message}`);
      }
    }
    return null;
  };
  let zh = null;
  if (isMixed) zh = await doDeepL() || await doPrimary();
  else zh = await doPrimary() || await doDeepL();
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

  // 可审阅的人工翻译补丁：仅在 release 原文哈希匹配时并入缓存，防止错配或覆盖有效原文。
  const TRANSLATION_PATCH_PATH = resolve('translation-patch.json');
  if (existsSync(TRANSLATION_PATCH_PATH)) {
    try {
      const patches = JSON.parse(readFileSync(TRANSLATION_PATCH_PATH, 'utf8'));
      for (const [key, entry] of Object.entries(patches)) {
        const id = key.match(/^rel:(\\d+)$/)?.[1];
        if (!id || !entry?.zh || !entry?.hash) continue;
        let source = null;
        for (const rec of Object.values(state.repos)) {
          const release = (rec.cachedReleases || []).find((item) => String(item.id) === id);
          if (release) { source = release.body || ''; break; }
        }
        if (source !== null && simpleHash(source) === entry.hash) {
          state.translations[key] = entry;
        } else {
          console.warn(`  跳过人工翻译补丁 ${key}：原文不存在或哈希不匹配`);
        }
      }
    } catch (e) {
      console.warn(`人工翻译补丁读取失败：${e.message}`);
    }
  }
  const isFirstRun = Object.keys(state.repos).length === 0;
  const backfillCutoff = Date.now() - BACKFILL_DAYS * 86400 * 1000;

  console.log(`star-board 启动${isFirstRun ? '（首次运行，建立基线）' : ''}，用户 ${GH_USER}`);

  // 1. star 列表（分页 ETag 缓存：无变化返回 304，不消耗配额）
  state.starredPages ||= {};
  let starred = [];
  let maxPage = 0;
  for (let page = 1; ; page++) {
    maxPage = page;
    const ck = `p${page}`;
    const cached = state.starredPages[ck];
    const res = await ghCached(`/users/${GH_USER}/starred?per_page=100&page=${page}`, cached?.etag);
    let batch;
    if (res.notModified && cached) {
      batch = cached.items;
    } else {
      batch = res.json.map((r) => ({ full_name: r.full_name, html_url: r.html_url, description: r.description, language: r.language, topics: Array.isArray(r.topics) ? r.topics : [], stargazers_count: r.stargazers_count }));
      state.starredPages[ck] = { etag: res.etag, items: batch };
    }
    starred = starred.concat(batch);
    if (batch.length < 100) break;
  }
  for (const k of Object.keys(state.starredPages)) {
    if (parseInt(k.slice(1), 10) > maxPage) delete state.starredPages[k];
  }
  if (TEST_LIMIT > 0) starred = starred.slice(0, TEST_LIMIT);
  console.log(`共 ${starred.length} 个 star`);

  // 2. 逐个取 release（按仓库 ETag 缓存：无变化返回 304，不消耗配额；无 release 则取最新 commit 兜底）
  let etagHits = 0;
  const results = await pool(starred, CONCURRENCY, async (repo) => {
    const full = repo.full_name;
    state.repos[full] ||= {};
    const prev = state.repos[full];
    // Topics 缓存优先；旧 starredPages 没有 Topics 时按仓库补取一次，失败不影响 release 流程。
    let topics = Array.isArray(repo.topics) && repo.topics.length ? repo.topics : (Array.isArray(prev.topics) ? prev.topics : []);
    if (!topics.length && !prev.topicsFetched) {
      try {
        const metaRes = await ghCached(`/repos/${full}`, prev.repoMetaEtag);
        if (!metaRes.notModified && metaRes.json) {
          topics = Array.isArray(metaRes.json.topics) ? metaRes.json.topics : [];
          prev.repoMetaEtag = metaRes.etag || prev.repoMetaEtag;
        }
        prev.topics = topics;
        prev.topicsFetched = true;
      } catch (e) {
        console.warn(`Topics 获取失败 ${full}: ${e.message}`);
      }
    }
    let relRes;
    let releases;
    if (BACKFILL_ALL) {
      // 回填模式分页获取全部 Release，避免只处理最近 3 条造成历史覆盖缺口。
      const all = [];
      let page = 1;
      while (true) {
        const pageRes = await ghCached(`/repos/${full}/releases?per_page=100&page=${page}`, null);
        const batch = pageRes.json || [];
        all.push(...batch.filter((r) => !r.draft));
        if (batch.length < 100) break;
        page++;
      }
      relRes = { etag: null, json: all };
    } else {
      relRes = await ghCached(`/repos/${full}/releases?per_page=5`, prev.releasesEtag);
    }
    if (!BACKFILL_ALL && relRes.notModified && 'cachedReleases' in prev) {
      releases = prev.cachedReleases;
      etagHits++;
    } else {
      const Ls = (relRes.json || []).filter((r) => !r.draft);
      const selected = BACKFILL_ALL ? Ls : Ls.slice(0, 3);
      releases = [];
      for (const L of selected) {
        let rawBody = L.body || '';
        // body 为空时回退到 annotated tag message（作者把 changelog 写在 tag 里）
        if (!rawBody.trim() && L.tag_name) {
          const tm = await getTagMessage(full, L.tag_name, state);
          if (tm) rawBody = tm;
        }
        const cleaned = cleanBody(rawBody);
        const bi = splitBilingual(cleaned);
        let body = '', authorZh = '';
        if (bi) {
          authorZh = bi.zh.slice(0, 2000);
          body = bi.en.slice(0, 2000);
        } else {
          body = cleaned.slice(0, 2000);
        }
        const releaseLabel = `${L.tag_name || ''} ${L.name || ''}`;
        const detectedPrerelease = !!L.prerelease || /(?:^|[.\-_\s])(?:alpha|beta|preview|pre|rc|dev|nightly|canary)(?:$|[.\-_\s\d])/i.test(releaseLabel);
        releases.push({ id: L.id, tag: L.tag_name, name: L.name || L.tag_name, prerelease: detectedPrerelease, published_at: L.published_at, url: L.html_url, body, authorZh });
      }
      prev.releasesEtag = relRes.etag;
      prev.cachedReleases = releases;
      prev.cachedLatest = releases[0] || null; // 兼容旧字段
    }
    const latest = releases[0] || null;
    let commit = null;
    if (!latest) {
      const cRes = await ghCached(`/repos/${full}/commits?per_page=1`, prev.commitsEtag);
      if (cRes.notModified && 'cachedCommit' in prev) {
        commit = prev.cachedCommit;
        etagHits++;
      } else {
        const c = cRes.json[0];
        commit = c ? { sha: c.sha.slice(0, 7), date: c.commit.committer.date, message: (c.commit.message || '').split('\n')[0], url: c.html_url } : null;
        prev.commitsEtag = cRes.etag;
        prev.cachedCommit = commit;
      }
    }
    return {
      full, url: repo.html_url, desc: repo.description || '', lang: repo.language || '—', topics, stars: repo.stargazers_count || 0,
      latest, releases, commit,
    };
  });
  console.log(`ETag 缓存命中 ${etagHits} 次（304，不消耗配额）`);

  // 3. 判定新增 + 翻译
  const fresh = [];
  let translatedCount = 0;
  for (const r of results) {
    if (r.__error) { console.warn(`跳过 ${r.full || '?'}: ${r.__error}`); continue; }
    const prev = state.repos[r.full] || {};
    const curKey = r.latest ? `rel:${r.latest.id}` : (r.commit ? `commit:${r.commit.sha}` : 'none');
    const isNew = !isFirstRun && prev.key && prev.key !== curKey && curKey !== 'none';

    // 逐 release 处理：迁移 + 翻译（每仓库最多 3 个）
    const releases = r.releases || (r.latest ? [r.latest] : []);
    for (const L of releases) {
      // 旧缓存迁移（304 命中时）：去捐赠段落 + 双语拆分 + 空 body 回退 tag message，现场一次性自愈
      if (L.body) {
        const noDon = stripDonation(L.body);
        if (noDon !== L.body) L.body = noDon;
        if (!L.authorZh) {
          const bi = splitBilingual(L.body);
          if (bi) {
            L.authorZh = bi.zh.slice(0, 2000);
            L.body = bi.en.slice(0, 2000);
          }
        }
      } else if (L.tag) {
        // body 为空：试 annotated tag message
        const tm = await getTagMessage(r.full, L.tag, state);
        if (tm) {
          const cleaned = cleanBody(tm);
          const bi = splitBilingual(cleaned);
          if (bi) {
            L.authorZh = bi.zh.slice(0, 2000);
            L.body = bi.en.slice(0, 2000);
          } else {
            L.body = cleaned.slice(0, 2000);
          }
        }
      }
      let zh = null;
      const bodyText = L.body || '';
      const pubTime = L.published_at ? new Date(L.published_at).getTime() : 0;
      const inWeek = pubTime >= Date.now() - 7 * 864e5;
      const withinBackfill = pubTime >= backfillCutoff;
      if (L.authorZh) {
        // 作者自带中文：直接用，免翻译
        zh = L.authorZh.slice(0, 2500);
      } else if (bodyText && bodyText.length >= 20 && (BACKFILL_ALL || inWeek || (isFirstRun && withinBackfill))) {
        // 有正文：7 天内的走翻译流程（含缓存哈希校验）；过短正文跳过以省配额
        const t = await translateSmart(state, `rel:${L.id}`, bodyText, r.full);
        if (t) { zh = t.zh; if (!t.cached) translatedCount++; }
      }
      // 兜底读缓存：仅当译文通过质量校验才使用（防坏缓存）
      if (!zh) {
        const hit = state.translations[`rel:${L.id}`];
        if (hit && bodyText && isTranslationValid(bodyText, hit.zh)) zh = hit.zh;
      }
      L.zh = zh;
    }
    // 兼容：latest / zh 指向最新 release
    r.latest = releases[0] || null;
    r.releases = releases;
    const zh = r.latest?.zh || null;

    state.repos[r.full] = {
      ...prev, // 保留 ETag 缓存
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
import { isRuleSet, CAT_LABELS, CAT_ORDER, CAT_DEFAULT, CAT_TAG_LABELS, classifyProject } from './categories.mjs';
function badge(r) {
  if (r.commit && !r.latest) return '`📝 提交`';
  if (!r.latest) return '`无 release`';
  if (isRuleSet(r.full, r.desc)) return '`📦 规则集`';
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
      const Lr = r.latest, Cr = r.commit;
      const verTag = Lr?.tag || Cr?.sha || '';
      const ts = Lr?.published_at || Cr?.date;
      const bodyText = Lr?.body || Cr?.message || '';
      L.push(`### [${r.full}](${r.url}) ${badge(r)} \`${escMdTable(verTag)}\``);
      L.push(``);
      L.push(`发布时间：${fmtDate(ts)}（${timeAgo(ts)}）｜ [${Lr ? '查看 Release' : '查看提交'}](${Lr?.url || Cr?.url})`);
      L.push(``);
      if (r.zh) {
        L.push(r.zh.slice(0, 3000));
        L.push(``);
        L.push(`<details><summary>查看原文</summary>`);
        L.push(``);
        L.push(bodyText.slice(0, 4000));
        L.push(``);
        L.push(`</details>`);
      } else if (bodyText.trim()) {
        if (isChineseDominant(bodyText)) { L.push(bodyText.slice(0, 3000)); }
        else { L.push(`*（原文，翻译暂不可用）*`); L.push(``); L.push(bodyText.slice(0, 3000)); }
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
export function renderSite(results, fresh, startedAt) {
  const sorted = [...results].sort((a, b) => {
    const ta = a.latest?.published_at || a.commit?.date || '';
    const tb = b.latest?.published_at || b.commit?.date || '';
    return tb.localeCompare(ta);
  });
  const data = {
    generatedAt: new Date(startedAt.getTime() + 8 * 3600 * 1000).toISOString().replace('T', ' ').slice(0, 16) + ' UTC+8',
    repoSlug: REPO_SLUG,
    fresh: fresh.map((r) => {
      const Lr = r.latest, Cr = r.commit;
      const category = classifyProject(r.full, r.desc, r.lang, r.topics);
      return {
        full: r.full, url: r.url, primary: category.primary, tags: category.tags,
        isCommit: !Lr,
        tag: Lr?.tag || Cr?.sha || null, prerelease: !!Lr?.prerelease,
        published_at: Lr?.published_at || Cr?.date, date: fmtDate(Lr?.published_at || Cr?.date),
        zh: r.zh ? r.zh.slice(0, 3000) : null,
        body: ((Lr?.body || '') || Cr?.message || '').slice(0, 4000),
        release_url: Lr?.url || Cr?.url,
      };
    }),
    all: sorted.map((r) => {
      const ts = r.latest?.published_at || r.commit?.date;
      const inWeek = !!ts && (Date.now() - new Date(ts).getTime()) <= 7 * 864e5;
      const releases = (r.releases || []).map((L) => {
        const lts = L.published_at;
        const lw = !!lts && (Date.now() - new Date(lts).getTime()) <= 7 * 864e5;
        return {
          tag: L.tag, prerelease: !!L.prerelease,
          published_at: lts, date: fmtDate(lts),
          zh: (lw && L.zh) ? L.zh.slice(0, 2500) : null,
          body: (lw && L.body) ? L.body.slice(0, 2000) : null,
          release_url: L.url || null,
        };
      });
      return {
        full: r.full, url: r.url,
        desc: (r.desc || '').slice(0, 120), lang: r.lang || '—', stars: r.stars || 0, topics: r.topics || [],
        ...(() => { const c = classifyProject(r.full, r.desc, r.lang, r.topics); return { cats: [c.primary], primary: c.primary, tags: c.tags, categoryConfidence: c.confidence }; })(),
        tag: r.latest?.tag || null, prerelease: !!r.latest?.prerelease,
        published_at: ts, date: fmtDate(ts),
        zh: (inWeek && r.zh) ? r.zh.slice(0, 2500) : null,
        body: (inWeek && r.latest?.body) ? r.latest.body.slice(0, 2000) : null,
        release_url: r.latest?.url || null,
        releases,
      };
    }),
  };
  // 今日 / 7 天新版本速览统计（只计正式版/测试版，不含仅提交；按版本计数）
  const stats = { today: { rel: 0, stable: 0, beta: 0 }, week: { rel: 0, stable: 0, beta: 0 } };
  for (const r of sorted) {
    for (const L of (r.releases || [])) {
      if (!L.published_at) continue;
      const d = (Date.now() - new Date(L.published_at).getTime()) / 864e5;
      const bk = d < 1 ? 'today' : (d <= 7 ? 'week' : null);
      if (!bk) continue;
      const o = stats[bk]; o.rel++;
      if (L.prerelease) o.beta++; else o.stable++;
    }
  }
  data.stats = stats;
  // 分类质量检查只告警，不阻断 release 翻译、缓存和页面生成。
  const categoryCounts = Object.fromEntries(CAT_ORDER.map((k) => [k, 0]));
  let reviewCount = 0, invalidCount = 0;
  for (const item of data.all) {
    if (!CAT_ORDER.includes(item.primary)) invalidCount++;
    else categoryCounts[item.primary]++;
    if (item.categoryConfidence === 'review') reviewCount++;
  }
  if (invalidCount) console.warn(`分类质量检查：${invalidCount} 个项目主分类无效`);
  if (data.all.length && categoryCounts.other / data.all.length > 0.25) console.warn(`分类质量检查：其他占比 ${Math.round(categoryCounts.other / data.all.length * 100)}%，建议检查分类规则`);
  if (reviewCount) console.log(`分类待复核：${reviewCount} 个项目`);
  console.log('主分类统计：' + Object.entries(categoryCounts).filter(([, n]) => n > 0).map(([k, n]) => CAT_LABELS[k] + ':' + n).join(' / '));
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
  + '.filters{position:sticky;top:0;background:var(--bg);padding:12px 0;border-bottom:1px solid var(--border);display:flex;gap:8px;flex-wrap:wrap;z-index:10}@media(max-width:640px){.filters{position:static;border-bottom:none}}\n'
  + '.filters input,.filters select{background:var(--card);color:var(--fg);border:1px solid var(--border);border-radius:8px;padding:8px 10px;font-size:14px}\n'
  + '.pills{display:flex;gap:8px;flex-wrap:wrap;align-items:center}.pill{background:var(--card);color:var(--fg);border:1px solid var(--border);border-radius:999px;padding:8px 14px;font-size:14px;cursor:pointer}.pill.active{background:var(--accent);color:#fff;border-color:var(--accent)}\n'
  + '.filters input{flex:1;min-width:150px}h2{font-size:18px;margin:26px 0 12px}\n'
  + '.card{background:var(--card);border:1px solid var(--border);border-radius:12px;padding:14px 16px;margin-bottom:12px}\n'
  + '.card h3{margin:0 0 6px;font-size:16px;word-break:break-all}.card h3 a{color:var(--fg);text-decoration:none}.card h3 a:hover{color:var(--accent)}\n'
  + '.badge{display:inline-block;font-size:12px;padding:2px 8px;border-radius:999px;margin:0 6px 4px 0;border:1px solid var(--border);white-space:nowrap}\n'
  + '.badge.stable{color:var(--green);border-color:var(--green)}.badge.beta{color:var(--amber);border-color:var(--amber)}.badge.commit{color:var(--muted)}.badge.ruleset{color:var(--accent);border-color:var(--accent)}\n'
  + '.badge.category{color:var(--accent);border-color:var(--accent);background:color-mix(in srgb,var(--accent) 9%,var(--bg));font-weight:600}.badge.tag{color:var(--muted);border-color:var(--border);background:var(--card)}\n'
  + '.rowmeta{color:var(--muted);font-size:13px;margin:6px 0}.rowmeta.desc{word-break:break-word}\n'
  + '.zh{white-space:pre-wrap;word-break:break-word;margin:8px 0;font-size:14px;line-height:1.7}.md-h{display:block;margin:12px 0 6px;font-size:15px}\n'
  + 'details{margin-top:8px}details summary{cursor:pointer;color:var(--accent);font-size:14px}\n'
  + 'details pre{white-space:pre-wrap;word-break:break-word;background:var(--bg);border:1px solid var(--border);border-radius:8px;padding:10px;font-size:13px;color:var(--muted);max-height:400px;overflow:auto}\n'
  + '.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(270px,1fr));gap:12px}.grid .card{margin-bottom:0}.grid .card h3{font-size:15px}\n'
  + '.empty{color:var(--muted);padding:24px;text-align:center}details.group{margin-bottom:10px}details.group>summary{cursor:pointer;font-size:16px;font-weight:600;padding:10px 2px;list-style:none}details.group>summary::-webkit-details-marker{display:none}details.group>summary:before{content:"▸ ";color:var(--muted)}details.group[open]>summary:before{content:"▾ "}.timeline{position:relative;margin:6px 0 0 6px;padding-left:22px;border-left:2px solid var(--border)}.titem{position:relative;padding-bottom:16px}.titem .dot{position:absolute;left:-29px;top:5px;width:12px;height:12px;border-radius:50%;background:var(--muted);box-shadow:0 0 0 3px var(--bg),0 0 0 5px var(--border)}.titem .dot.stable{background:var(--green)}.titem .dot.beta{background:var(--amber)}.tmonth{font-weight:700;font-size:15px;margin:20px 0 12px}.tmonth:first-child{margin-top:6px}.titem .thead{font-size:15px;font-weight:600;word-break:break-all}.titem .thead a{color:var(--fg);text-decoration:none}.titem .thead a:hover{color:var(--accent)}.nrow{padding:10px 2px;border-bottom:1px solid var(--border);font-size:14px;word-break:break-all}.nrow a{color:var(--fg);text-decoration:none;font-weight:600}.nrow a:hover{color:var(--accent)}.stats{display:flex;gap:10px;flex-wrap:wrap;margin:2px 0 14px}.stat{background:var(--card);border:1px solid var(--border);border-radius:10px;padding:8px 14px;font-size:13px;color:var(--muted)}.stat b{color:var(--fg);font-size:16px}.relsum{margin-top:8px}.relsum>summary{cursor:pointer;color:var(--accent);font-size:13px}.relsum .zh{display:-webkit-box;-webkit-line-clamp:5;-webkit-box-orient:vertical;overflow:hidden}.relsum[open] .zh{display:block;-webkit-line-clamp:unset}footer{color:var(--muted);font-size:12px;text-align:center;padding:28px 0}a{color:var(--accent)}\n'
  + '</style>\n</head>\n<body>\n<div class="wrap">\n'
  + '<header class="top"><h1>⭐ Star 动态看板</h1><div class="meta" id="meta"></div></header>\n'
  + '<div class="filters">\n'
  + '<input id="q" type="search" placeholder="搜索项目名 / 简介…">\n'
  + '<div class="pills" id="fCatPills">' + CAT_ORDER.map(function(k){return '<button class="pill' + (CAT_DEFAULT.indexOf(k)>=0 ? ' active' : '') + '" data-v="' + k + '">' + CAT_LABELS[k] + '</button>';}).join('') + '<button class="pill" data-v="">全部</button></div>\n'
  + '</div>\n'
  + '<section id="freshSec"><h2>🆕 本次新增 <span id="freshCount"></span></h2><div id="fresh"></div></section>\n'
  + '<section><h2 style="display:none">📋 全部项目 <span id="allCount"></span></h2><div class="stats" id="stats" style="display:none"></div><div id="all"></div></section>\n'
  + '<footer>由 star-board 每 3 小时自动更新 · <a href="https://github.com/' + escHtml(REPO_SLUG) + '">仓库</a></footer>\n'
  + '</div>\n<script>\n'
+ 'var CAT_LABELS = ' + JSON.stringify(CAT_LABELS) + ';\n'
+ 'var CAT_TAG_LABELS = ' + JSON.stringify(CAT_TAG_LABELS) + ';\n'
+ 'var DATA = ' + json + ';\n'
+ 'var SECTIONS=[{icon:"⚡",name:"今日内有更新"},{icon:"🔥",name:"7 天内有更新"},{icon:"🗓️",name:"30 天内有更新"},{icon:"🕰️",name:"更早之前"}];\n'
+ 'function esc(s){return String(s==null?"":s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");}\n'
+ 'function renderMdInline(s){var t=esc(s);t=t.replace(/^#{1,6}\\s+(.+)$/gm,"<b class=\\"md-h\\">$1</b>");t=t.replace(/\\*\\*(.+?)\\*\\*/g,"<b>$1</b>");return t;}\\n'
+ 'function ago(ts){if(!ts)return "";var s=Math.floor((Date.now()-new Date(ts).getTime())/1000);if(s<0)return "刚刚";if(s<3600)return Math.floor(s/60)+" 分钟前";if(s<86400)return Math.floor(s/3600)+" 小时前";if(s<86400*30)return Math.floor(s/86400)+" 天前";if(s<86400*365)return Math.floor(s/86400/30)+" 个月前";return Math.floor(s/86400/365)+" 年前";}\n'
+ 'function sectionOf(r){if(!r.published_at)return 3;var d=(Date.now()-new Date(r.published_at).getTime())/86400000;if(d<1)return 0;if(d<=7)return 1;if(d<=30)return 2;return 3;}\n'
+ 'function isRuleSet(full,desc){var n=String(full||"").toLowerCase().split("/")[1]||"";if(/(^|[-_ ])rules?([-_ ]|$)/.test(n))return true;return /规则集|rule.?set/i.test(desc||"");}\n'
+ 'function badge(r){if(r.isCommit||!r.tag)return "<span class=\\"badge commit\\">📝 仅提交</span>";if(isRuleSet(r.full,r.desc))return "<span class=\\"badge ruleset\\">📦 规则集</span>";return r.prerelease?"<span class=\\"badge beta\\">🧪 测试版</span>":"<span class=\\"badge stable\\">✅ 正式版</span>";}\n'
+ 'function typeOf(r){if(!r.tag)return "commit";if(isRuleSet(r.full,r.desc))return "ruleset";return r.prerelease?"beta":"stable";}\n'
+ 'function statsHtml(){var s=DATA.stats;if(!s)return "";'
+ 'function line(icon,name,o){return "<div class=\\"stat\\">"+icon+" "+name+"：<b>"+o.rel+"</b> 个版本更新（"+o.stable+" 正式 / "+o.beta+" 测试）</div>";}\n'
+ 'return line("⚡","今日",s.today)+line("🔥","7 天内",s.week);}\n'
+ 'function freshCard(r){var h="<div class=\\"card\\"><h3><a href=\\""+r.url+"\\" target=\\"_blank\\" rel=\\"noopener\\">"+esc(r.full)+"</a></h3>";'
+ 'h+="<div>"+badge(r)+(r.tag?" <span class=\\\"badge\\\">"+esc(r.tag)+"</span>":"")+(r.primary?" <span class=\\\"badge category\\\">"+esc(CAT_LABELS[r.primary]||"其他")+"</span>":"")+(r.tags||[]).map(function(t){return " <span class=\\\"badge tag\\\">"+esc(CAT_TAG_LABELS[t]||t)+"</span>";}).join("")+"</div>";'
+ 'h+="<div class=\\"rowmeta\\">"+esc(r.date)+"（"+ago(r.published_at)+"） · <a href=\\""+r.release_url+"\\" target=\\"_blank\\" rel=\\"noopener\\">查看 Release</a></div>";'
+ 'if(r.zh){h+="<div class=\\"zh\\">"+renderMdInline(r.zh)+"</div>";if(r.body){h+="<details><summary>查看原文</summary><pre>"+esc(r.body)+"</pre></details>";}}'
+ 'else if(r.body){h+="<div class=\\"zh\\">"+esc(r.body)+"</div>";}else{h+="<div class=\\"rowmeta\\">（无文字更新说明，详见 Release）</div>";}'
+ 'return h+"</div>";}\n'
+ 'function fmtDT(ts){if(!ts)return "—";var d=new Date(new Date(ts).getTime()+8*3600*1000);function p(n){return (n<10?"0":"")+n;}return d.getUTCFullYear()+"-"+p(d.getUTCMonth()+1)+"-"+p(d.getUTCDate())+" · "+p(d.getUTCHours())+":"+p(d.getUTCMinutes());}\n'
+ 'function tlItem(r){var dot=r.tag?(r.prerelease?"beta":"stable"):"commit";\n'
+ 'var h="<div class=\\"titem\\"><span class=\\"dot "+dot+"\\"></span><div class=\\"tbody\\">";\n'
+ 'h+="<div class=\\"thead\\"><a href=\\""+r.url+"\\" target=\\"_blank\\" rel=\\"noopener\\">"+esc(r.full)+"</a></div>";\n'
+ 'h+="<div class=\\\"rowmeta\\\">"+badge(r)+(r.tag?"<span class=\\\"badge\\\">"+esc(r.tag)+"</span>":"")+(r.primary?"<span class=\\\"badge category\\\">"+esc(CAT_LABELS[r.primary]||"其他")+"</span>":"")+(r.tags||[]).map(function(t){return "<span class=\\\"badge tag\\\">"+esc(CAT_TAG_LABELS[t]||t)+"</span>";}).join("")+(r.release_url?" <a href=\\\""+r.release_url+"\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">查看 Release</a>":"")+"</div>";'
+ 'h+="<div class=\\"rowmeta\\">"+esc(fmtDT(r.published_at))+" · ⭐ "+(r.stars||0)+"</div>";\n'
+ 'if(r.desc){h+="<div class=\\"rowmeta desc\\">"+esc(r.desc)+"</div>";}\n'
+ 'if(r.zh){h+="<details class=\\"relsum\\"><summary>更新内容摘要"+(r.release_url?" · <a href=\\\""+r.release_url+"\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">查看 Release</a>":"")+"</summary><div class=\\"zh\\">"+renderMdInline(r.zh)+"</div>";if(r.body){h+="<details><summary>查看原文</summary><pre>"+esc(r.body)+"</pre></details>";}h+="</details>";}\n'
+ 'else if(r.body){h+="<details class=\\"relsum\\"><summary>更新内容"+(r.release_url?" · <a href=\\\""+r.release_url+"\\\" target=\\\"_blank\\\" rel=\\\"noopener\\\">查看 Release</a>":"")+"</summary><div class=\\"zh\\">"+esc(r.body)+"</div></details>";}\n'
+ 'return h+"</div></div>";}\n'
+ 'var _fCats=new Set(' + JSON.stringify(CAT_DEFAULT) + ');var _allCats=' + JSON.stringify(CAT_ORDER) + ';function matchFilters(r){var q=document.getElementById("q").value.toLowerCase();'
+ 'function catMatch(r){var cs=r.cats||["other"];for(var i=0;i<cs.length;i++){if(_fCats.has(cs[i]))return true;}return false;}\n'
+ 'return (!q||r.full.toLowerCase().indexOf(q)>=0||(r.desc||"").toLowerCase().indexOf(q)>=0)&&(_fCats.size===0||catMatch(r));}\n'
+ 'function flatReleases(){var out=[],ri,r,rels,i,rel;for(ri=0;ri<DATA.all.length;ri++){r=DATA.all[ri];rels=(r.releases&&r.releases.length)?r.releases:null;if(rels){for(i=0;i<rels.length;i++){rel=rels[i];out.push({full:r.full,url:r.url,desc:r.desc,lang:r.lang,stars:r.stars,cats:r.cats,primary:r.primary,tags:r.tags,tag:rel.tag,prerelease:rel.prerelease,published_at:rel.published_at,date:rel.date,zh:rel.zh,body:rel.body,release_url:rel.release_url});}}else{out.push(r);}}return out;}\n'
+ 'function renderAll(){var list=flatReleases().filter(matchFilters);var box=document.getElementById("all");var h="",i;'
+ 'list.sort(function(a,b){var x=a.published_at||"",y=b.published_at||"";return x<y?1:(x>y?-1:0);});var groups=[[],[],[],[]];for(i=0;i<list.length;i++){groups[sectionOf(list[i])].push(list[i]);}'
+ 'for(i=0;i<4;i++){if(!groups[i].length)continue;'
+ 'h+="<details class=\\"group\\""+(i===0?" open":"")+"><summary>"+SECTIONS[i].icon+" "+SECTIONS[i].name+"（"+groups[i].length+"）</summary>";'
+ 'h+="<div class=\\"timeline\\">"+groups[i].map(tlItem).join("")+"</div></details>";}'
+ 'if(!list.length){h="<div class=\\"empty\\">没有匹配的项目</div>";}'
+ 'box.innerHTML=h;document.getElementById("allCount").textContent="（"+list.length+" 个版本 / "+DATA.all.length+" 个项目"+"）";}\n'
+ '(function(){'
+ 'document.getElementById("meta").textContent="共 "+DATA.all.length+" 个项目 · 生成于 "+DATA.generatedAt+" · 每 3 小时自动更新";'
+ 'document.getElementById("stats").innerHTML=statsHtml();'
+ 'var fh="";for(i=0;i<DATA.fresh.length;i++){fh+=freshCard(DATA.fresh[i]);}'
+ 'document.getElementById("fresh").innerHTML=fh||"<div class=\\"empty\\">本轮无新增</div>";'
+ 'document.getElementById("freshCount").textContent=DATA.fresh.length?"（"+DATA.fresh.length+"）":"";'
+ 'if(!DATA.fresh.length){document.getElementById("freshSec").style.display="none";}'
+ 'renderAll();'
+ 'document.getElementById("q").addEventListener("input",renderAll);'
+ 'document.getElementById("fCatPills").addEventListener("click",function(e){var b=e.target.closest(".pill");if(!b)return;var v=b.getAttribute("data-v");if(v===""){_fCats=new Set(_allCats);}else{if(_fCats.has(v))_fCats.delete(v);else _fCats.add(v);}var ps=this.querySelectorAll(".pill");for(var i=0;i<ps.length;i++){var pv=ps[i].getAttribute("data-v");ps[i].classList.toggle("active",pv===""?_fCats.size===_allCats.length:_fCats.has(pv));}renderAll();});'
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

// Telegram 推送专用：把摘要转成干净的纯文本（Telegram HTML 模式不渲染 markdown）
function toPlain(s) {
  return String(s).split('\n').map(line => {
    let t = line.trim();
    t = t.replace(/^#{1,6}\s+/, '');                    // 去 markdown 标题
    t = t.replace(/\*\*(.+?)\*\*/g, '$1').replace(/__(.+?)__/g, '$1'); // 去加粗
    t = t.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '$1');     // 内联链接只留文本
    t = t.replace(/https?:\/\/\S+/g, '').trim();         // 去裸 URL
    t = t.replace(/\s*\(#\d+(?:\s*,\s*#\d+)*\)/g, '');    // 去 PR 编号引用 (#123)
    t = t.replace(/^[\*+\-]\s+/, '\u2022 ').replace(/^\d+[.)]\s+/, '\u2022 '); // 列表符统一成 •
    t = t.replace(/[`_~]/g, '').replace(/\*+/g, '');     // 去残留标记
    return t.replace(/\s+/g, ' ').trim();
  })
  .filter(t => t && !/^[-—=*#>\s]+$/.test(t))           // 去纯分隔符行
  .filter((t, i, arr) => t !== arr[i - 1]);             // 去相邻重复行
}

// ---------------- Telegram digest ----------------
async function sendDigest(fresh) {
  const lines = fresh.slice(0, 20).map((r) => {
    const Lr = r.latest, Cr = r.commit;
    const isC = !Lr;
    const tag = escHtml(isC ? Cr.sha.slice(0, 7) : Lr.tag);
    const name = escHtml(r.full);
    // 摘要：优先用清洗过的中文，没有则对原文做去噪；转纯文本后整段进引用块
    let summary = r.zh || '';
    if (!summary) {
      const raw = isC ? Cr.message : (Lr.body || '');
      summary = stripNoise(raw);
    }
    const qLines = toPlain(summary).map(s => escHtml(s));
    const quote = `<blockquote>${qLines.length ? qLines.join('\n') : '无更新说明'}</blockquote>`;
    const kind = isC ? '📝 提交' : (Lr.prerelease ? '🧪 测试版' : '✅ 正式版');
    const linkText = isC ? '查看提交' : '查看 Release';
    const url = isC ? Cr.url : Lr.url;
    return `<b>${name}</b>\n${kind} · <code>${tag}</code>\n${quote}<a href="${url}">${linkText}</a>`;
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

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  main().catch((e) => { console.error('FATAL', e); process.exit(1); });
}
