# 曾维盛的个人网站

基于 Astro 构建，通过 GitHub Actions 自动部署到 GitHub Pages。

线上地址：<https://wilsonzeng1228.github.io/>

## 编辑个人资料

姓名、简介、技能和项目集中在：

```text
src/data/profile.ts
```

## 发布 Markdown 文章

文章统一放在：

```text
src/content/blog/
```

推荐复制 `_template.md`，然后使用小写英文和连字符重命名，例如：

```text
src/content/blog/stm32-uart-debug.md
```

文章开头必须包含 Frontmatter：

```yaml
---
title: "STM32 串口调试记录"
description: "记录 USART 无输出问题的排查过程。"
pubDate: 2026-08-12
updatedDate: 2026-08-13
tags:
  - STM32
  - USART
draft: false
---
```

字段说明：

- `title`：文章标题，必填。
- `description`：列表页和搜索摘要，必填。
- `pubDate`：发布日期，必填，格式为 `YYYY-MM-DD`。
- `updatedDate`：最后更新日期，可选。
- `tags`：文章标签，可为空数组。
- `draft`：设为 `true` 时不生成公开页面。

文件名会成为文章网址，例如：

```text
stm32-uart-debug.md
→ https://wilsonzeng1228.github.io/articles/stm32-uart-debug/
```

### 插入图片

把图片放入：

```text
public/images/articles/
```

然后在 Markdown 中引用：

```markdown
![串口接线图](/images/articles/uart-wiring.png)
```

建议图片文件名使用小写英文和连字符，不使用空格。

## 本地预览

```powershell
npm run dev
```

访问：

- 首页：<http://localhost:4321/>
- 文章列表：<http://localhost:4321/articles/>

保存 Markdown 后，开发服务器会自动刷新。

## 验证

```powershell
npm test
npm run build
```

生产构建结果位于 `dist/`，该目录不需要提交。

## 发布更新

```powershell
git add src/content/blog/stm32-uart-debug.md
git commit -m "docs: 发布 STM32 串口调试文章"
git push
```

推送到 `main` 后，`.github/workflows/deploy.yml` 会自动构建并发布网站。

如果本机代理没有启动而导致 `git push` 连接 `127.0.0.1:7892` 失败，可以仅对本次推送禁用代理：

```powershell
git -c http.proxy= -c https.proxy= push
```

## 主要文件

```text
src/content.config.ts           文章字段和 Markdown 加载规则
src/content/blog/               Markdown 文章目录
src/layouts/SiteLayout.astro    全站导航、页脚和页面元数据
src/pages/index.astro           首页
src/pages/articles/index.astro  文章列表
src/pages/articles/[...id].astro 文章详情页
src/styles/global.css           全站和文章排版样式
```
