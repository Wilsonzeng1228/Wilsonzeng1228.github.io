import assert from 'node:assert/strict';
import test from 'node:test';

import {
  formatArticleDate,
  getPublishedArticles,
} from '../src/utils/articles.mjs';

const articles = [
  { id: 'older', data: { pubDate: new Date('2026-07-01'), draft: false } },
  { id: 'draft', data: { pubDate: new Date('2026-08-10'), draft: true } },
  { id: 'newer', data: { pubDate: new Date('2026-08-01'), draft: false } },
];

test('文章列表隐藏草稿并按发布日期倒序排列', () => {
  assert.deepEqual(
    getPublishedArticles(articles).map((article) => article.id),
    ['newer', 'older'],
  );
});

test('文章筛选不会修改原始集合顺序', () => {
  getPublishedArticles(articles);
  assert.deepEqual(articles.map((article) => article.id), ['older', 'draft', 'newer']);
});

test('发布日期使用稳定的中文格式', () => {
  assert.equal(formatArticleDate(new Date('2026-08-12')), '2026年8月12日');
});
