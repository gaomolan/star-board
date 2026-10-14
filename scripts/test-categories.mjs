#!/usr/bin/env node
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import { CAT_ORDER, CAT_LABELS, classifyProject } from './categories.mjs';

const state = JSON.parse(readFileSync(new URL('../state.json', import.meta.url), 'utf8'));
const repos = state.repos || {};
const names = Object.keys(repos);
assert.ok(names.length > 0, 'state.json 中没有仓库记录');

const counts = Object.fromEntries(CAT_ORDER.map((key) => [key, 0]));
const review = [];
for (const full of names) {
  const repo = repos[full] || {};
  const result = classifyProject(full, repo.desc || '', repo.lang || '', repo.topics || []);
  assert.ok(CAT_ORDER.includes(result.primary), `${full} 的主分类无效：${result.primary}`);
  assert.ok(Array.isArray(result.tags), `${full} 的辅助标签必须是数组`);
  assert.equal(new Set(result.tags).size, result.tags.length, `${full} 的辅助标签存在重复`);
  counts[result.primary]++;
  if (result.confidence === 'review') review.push(full);
}

// 针对曾发现的误分类设定回归测试。
const cases = [
  ['TG-Twilight/AWAvenue-Ads-Rule', 'rules'],
  ['rootSunc/CNEquity', 'finance'],
  ['zhanghai/MaterialFiles', 'system'],
  ['gedoor/legado', 'reading'],
  ['RSSHub/RSSHub', 'data'],
  ['liuran001/mihomo', 'ai'],
  ['Microsoft/PowerToys', 'system'],
  ['ShareX/ShareX', 'efficiency'],
];
for (const [full, expected] of cases) {
  const repo = repos[full] || {};
  const result = classifyProject(full, repo.desc || '', repo.lang || '', repo.topics || []);
  assert.equal(result.primary, expected, `${full} 预期分类 ${expected}，实际为 ${result.primary}`);
}

console.log(`分类测试通过：${names.length} 个项目`);
console.log('分类统计：' + Object.entries(counts).filter(([, n]) => n).map(([key, n]) => `${CAT_LABELS[key]} ${n}`).join(' / '));
console.log(`其他：${counts.other}（${(counts.other / names.length * 100).toFixed(1)}%）；待复核：${review.length}`);
if (counts.other / names.length > 0.25) {
  console.warn('警告：其他分类超过 25%，需要复核分类规则。');
}
