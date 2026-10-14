#!/usr/bin/env node
/**
 * Recover usable Chinese portions already present in bilingual release notes.
 * This does not invent translations: it keeps Chinese-bearing lines and removes
 * English-only lines, then applies the same basic quality guard as build.mjs.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const STATE_PATH = process.env.STATE_PATH || 'state.json';
const PATCH_PATH = process.env.TRANSLATION_PATCH_PATH || 'translation-patch.json';
if (!existsSync(STATE_PATH)) throw new Error(`Missing state file: ${STATE_PATH}`);

const state = JSON.parse(readFileSync(STATE_PATH, 'utf8'));
state.translations ||= {};
const patches = existsSync(PATCH_PATH) ? JSON.parse(readFileSync(PATCH_PATH, 'utf8')) : {};

function simpleHash(s) {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) | 0;
  return String(h >>> 0);
}
function isTranslationValid(src, zh) {
  if (!zh || !zh.trim() || zh.trim() === src.trim()) return false;
  const srcEn = (src.match(/[A-Za-z]/g) || []).length;
  const zhEn = (zh.match(/[A-Za-z]/g) || []).length;
  if (srcEn > 200 && zhEn > srcEn * 0.7) return false;
  return true;
}

let added = 0, skippedNoChinese = 0, skippedTooShort = 0, skippedQuality = 0, preserved = 0;
for (const rec of Object.values(state.repos || {})) {
  for (const release of (rec.cachedReleases || [])) {
    const id = String(release.id || '');
    if (!/^\d+$/.test(id)) continue;
    const source = String(release.body || '');
    if (release.authorZh && release.authorZh.trim()) continue;
    const key = `rel:${id}`;
    const hash = simpleHash(source);
    const cached = state.translations[key];
    if (cached && cached.hash === hash && isTranslationValid(source, cached.zh)) continue;

    const existing = patches[key];
    if (existing?.zh && existing.hash === hash && isTranslationValid(source, existing.zh)) {
      preserved++;
      continue;
    }

    const selected = source.split(/\r?\n/).filter((line) => /[\u4e00-\u9fff]/.test(line));
    let zh = selected.join('\n')
      .replace(/@[-\w.]+/g, '')
      .replace(/[ \t]+$/gm, '')
      .replace(/\n[ \t]*\n(?:[ \t]*\n)+/g, '\n\n')
      .trim();
    if (!/[\u4e00-\u9fff]/.test(source)) { skippedNoChinese++; continue; }
    const cjk = (zh.match(/[\u4e00-\u9fff]/g) || []).length;
    if (cjk < 20 || !zh) { skippedTooShort++; continue; }
    if (!isTranslationValid(source, zh)) { skippedQuality++; continue; }
    patches[key] = { zh, hash };
    added++;
  }
}

writeFileSync(PATCH_PATH, JSON.stringify(patches, null, 2) + '\n', 'utf8');
console.log(`双语缓存重建：新增 ${added} 条；保留既有补丁 ${preserved} 条；中文不足跳过 ${skippedTooShort} 条；质量校验跳过 ${skippedQuality} 条；补丁总数 ${Object.keys(patches).length}。`);
