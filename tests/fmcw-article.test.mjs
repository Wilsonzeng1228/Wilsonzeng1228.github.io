import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const articleUrl = new URL(
  '../src/content/blog/fmcw-vs-pulse-radar.md',
  import.meta.url,
);

test('FMCW 对比文章满足网站发布契约', async () => {
  const article = await readFile(articleUrl, 'utf8');

  assert.match(article, /^---\r?\n/);
  assert.match(article, /title: ["']FMCW 连续波 vs 脉冲雷达发射体制["']/);
  assert.match(article, /pubDate: 2026-08-06/);
  assert.match(article, /draft: false/);
  assert.doesNotMatch(article, /\[\[[^\]]+\]\]/, '公开文章不应包含 Obsidian 双链');
});
