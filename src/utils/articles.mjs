/**
 * 过滤草稿并按发布日期从新到旧排序。
 * 返回新数组，避免修改 Astro 内容集合的原始顺序。
 */
export function getPublishedArticles(articles) {
  return articles
    .filter((article) => !article.data.draft)
    .toSorted(
      (left, right) => right.data.pubDate.getTime() - left.data.pubDate.getTime(),
    );
}

/** 将文章日期统一显示为中文年月日。 */
export function formatArticleDate(date) {
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'Asia/Shanghai',
  }).format(date);
}
