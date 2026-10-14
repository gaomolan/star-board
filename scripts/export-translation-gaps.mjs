#!/usr/bin/env node
/**
 * Read-only diagnostic export for historical translation gaps.
 * Does not modify state.json or any existing translation cache entries.
 */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const statePath = process.env.STATE_PATH || 'state.json';
const outPath = process.env.TRANSLATION_GAPS_PATH || 'translation-gaps.json';
if (!existsSync(statePath)) throw new Error(`Missing state file: ${statePath}`);
const state = JSON.parse(readFileSync(statePath, 'utf8'));
const translations = state.translations || {};

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

const gaps = [];
const stats = {
  repoCount: Object.keys(state.repos || {}).length,
  translationCacheEntries: Object.keys(translations).length,
  releaseCount: 0,
  eligibleReleaseCount: 0,
  validCachedCount: 0,
  missingCount: 0,
  staleHashCount: 0,
  invalidTranslationCount: 0,
  skippedChineseOrShortCount: 0,
  skippedAuthorChineseCount: 0
};

for (const [repo, record] of Object.entries(state.repos || {})) {
  for (const release of (record.cachedReleases || [])) {
    stats.releaseCount++;
    const source = String(release.body || '');
    if (release.authorZh && release.authorZh.trim()) {
      stats.skippedAuthorChineseCount++;
      continue;
    }
    if (source.length < 20 || ((source.match(/[一-鿿]/g) || []).length / source.length) > 0.7) {
      stats.skippedChineseOrShortCount++;
      continue;
    }
    stats.eligibleReleaseCount++;
    const key = `rel:${release.id}`;
    const hit = translations[key];
    const hash = simpleHash(source);
    if (hit && hit.hash === hash && isTranslationValid(source, hit.zh)) {
      stats.validCachedCount++;
      continue;
    }
    let reason = 'missing';
    if (hit && hit.hash !== hash) { reason = 'stale_hash'; stats.staleHashCount++; }
    else if (hit) { reason = 'invalid_translation'; stats.invalidTranslationCount++; }
    else stats.missingCount++;
    gaps.push({
      key,
      hash,
      repo,
      release_id: String(release.id),
      tag: release.tag || '',
      name: release.name || release.tag || '',
      published_at: release.published_at || null,
      url: release.url || '',
      reason,
      source
    });
  }
}
const report = {
  generated_at: new Date().toISOString(),
  note: 'Read-only export. state.json was not modified.',
  stats,
  gaps
};
writeFileSync(outPath, JSON.stringify(report, null, 2) + '\n', 'utf8');
console.log(`翻译缓存诊断完成：缓存 ${stats.translationCacheEntries} 条；可检查 Release ${stats.eligibleReleaseCount} 条；有效缓存 ${stats.validCachedCount} 条；缺失 ${stats.missingCount} 条；哈希过期 ${stats.staleHashCount} 条；译文质量无效 ${stats.invalidTranslationCount} 条；导出 ${gaps.length} 条到 ${outPath}`);

const byReason = gaps.reduce((acc, item) => {
  acc[item.reason] = (acc[item.reason] || 0) + 1;
  return acc;
}, {});
const summaryLines = [
  '# 历史译文缺口诊断',
  '',
  `生成时间：${report.generated_at}`,
  '',
  '> 本报告由工作流自动生成；仅诊断，不修改 state.json。',
  '',
  '## 统计',
  '',
  `- 仓库数：${stats.repoCount}`,
  `- 缓存条目数：${stats.translationCacheEntries}`,
  `- Release 总数：${stats.releaseCount}`,
  `- 符合检查条件的 Release：${stats.eligibleReleaseCount}`,
  `- 有效缓存：${stats.validCachedCount}`,
  `- 缺失译文：${stats.missingCount}`,
  `- 哈希过期：${stats.staleHashCount}`,
  `- 无效译文：${stats.invalidTranslationCount}`,
  `- 跳过（作者已提供中文）：${stats.skippedAuthorChineseCount}`,
  `- 跳过（原文过短或中文占比过高）：${stats.skippedChineseOrShortCount}`,
  '',
  '## 缺口分类',
  '',
  ...Object.entries(byReason).map(([reason, count]) => `- ${reason}：${count}`),
  '',
  '## 缺失译文条目（最多 100 条）',
  '',
  ...gaps.slice(0, 100).map((item) => `- [${item.repo} — ${item.name || item.tag || item.release_id}](${item.url || '#'}) — \`${item.key}\`（${item.reason}）`),
  '',
  gaps.length > 100 ? `其余 ${gaps.length - 100} 条详见 Actions 工件 \`translation-gaps\`。` : '',
  ''
];
writeFileSync('translation-gaps-summary.md', summaryLines.join('\n'), 'utf8');
console.log(summaryLines.slice(0, 18).join('\n'));
