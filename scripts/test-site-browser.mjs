#!/usr/bin/env node
import assert from 'node:assert/strict';
import { chromium } from 'playwright';
import { renderSite } from './build.mjs';

const now = new Date();
const results = [
  {
    full: 'tongyi-mai/z-image', url: 'https://github.com/tongyi-mai/z-image',
    desc: 'AI image generation', lang: 'Python', topics: ['ai'], stars: 100,
    latest: { tag: 'v1.0.0', prerelease: false, published_at: now.toISOString(), url: 'https://example.com/ai' },
    releases: [{ tag: 'v1.0.0', prerelease: false, published_at: now.toISOString(), url: 'https://example.com/ai', body: 'AI release notes', zh: 'AI 更新说明' }],
    commit: null, zh: 'AI 更新说明',
  },
  {
    full: 'gedoor/legado', url: 'https://github.com/gedoor/legado',
    desc: '阅读应用', lang: 'Kotlin', topics: ['ebook'], stars: 200,
    latest: { tag: 'v2.0.0', prerelease: false, published_at: now.toISOString(), url: 'https://example.com/reading' },
    releases: [{ tag: 'v2.0.0', prerelease: false, published_at: now.toISOString(), url: 'https://example.com/reading', body: 'Reading release notes', zh: '阅读更新说明' }],
    commit: null, zh: '阅读更新说明',
  },
  {
    full: 'rootsunc/cnequity', url: 'https://github.com/rootsunc/cnequity',
    desc: '金融数据工具', lang: 'Python', topics: ['finance'], stars: 300,
    latest: { tag: 'v3.0.0', prerelease: false, published_at: now.toISOString(), url: 'https://example.com/finance' },
    releases: [{ tag: 'v3.0.0', prerelease: false, published_at: now.toISOString(), url: 'https://example.com/finance', body: 'Finance release notes', zh: '金融更新说明' }],
    commit: null, zh: '金融更新说明',
  },
];
const fresh = [results[0]];
const html = renderSite(results, fresh, now);
const browser = await chromium.launch({ headless: true });
try {
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.setContent(html, { waitUntil: 'load' });

  assert.match(await page.locator('#meta').textContent(), /3 个项目/);
  assert.equal(await page.locator('.titem').count(), 2, '默认分类筛选应显示智能与金融项目');
  assert.equal(await page.locator('.category').count(), 3, '新增卡片与时间线应显示主分类徽标');

  await page.locator('#fCatPills button[data-v="reading"]').click();
  assert.equal(await page.locator('.titem').count(), 3, '选择阅读分类后应显示阅读项目');

  await page.locator('#q').fill('rootsunc/cnequity');
  assert.equal(await page.locator('.titem').count(), 1, '搜索应与分类筛选同时生效');
  assert.match(await page.locator('.titem').innerText(), /rootsunc\/cnequity/);

  await page.locator('#fCatPills button[data-v=""]').click();
  await page.locator('#q').fill('');
  assert.equal(await page.locator('.titem').count(), 3, '全部分类按钮应显示所有项目');

  await page.setViewportSize({ width: 375, height: 812 });
  const widths = await page.evaluate(() => ({
    viewport: document.documentElement.clientWidth,
    content: document.documentElement.scrollWidth,
  }));
  assert.ok(widths.content <= widths.viewport, `移动端页面出现横向溢出：${JSON.stringify(widths)}`);
  assert.deepEqual(errors, [], `浏览器运行时报错：${errors.join('; ')}`);
  console.log('页面验收通过：分类徽标、分类筛选、搜索联动、全部按钮、移动端宽度、无浏览器异常');
} finally {
  await browser.close();
}
