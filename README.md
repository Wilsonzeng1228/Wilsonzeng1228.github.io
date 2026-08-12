# 个人网站

基于 Astro 构建，并通过 GitHub Actions 自动部署到 GitHub Pages。

## 从这里开始编辑

个人资料、技能和项目集中在：

```text
src/data/profile.ts
```

首页结构在 `src/pages/index.astro`，全局样式在 `src/styles/global.css`。

## 本地预览

```powershell
npm run dev
```

访问 `http://localhost:4321`。保存文件后页面会自动刷新。

## 验证

```powershell
npm test
npm run build
```

## 发布到 GitHub Pages

1. 在 GitHub 创建仓库；推荐使用 `<你的用户名>.github.io` 作为仓库名。
2. 将本地仓库推送到 `main` 分支。
3. 打开仓库的 `Settings → Pages`，将 Source 设为 `GitHub Actions`。
4. 此后每次推送都会由 `.github/workflows/deploy.yml` 自动部署。

配置会根据 GitHub Actions 的 `GITHUB_REPOSITORY` 自动判断根路径或仓库子路径，无需手工填写用户名。
