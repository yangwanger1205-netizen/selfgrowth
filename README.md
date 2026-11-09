# 我的成长主页

王样的软件工程学习主页，收录关于我、网页练习复盘、技能证据、校园失物招领练习和公开联系方式。学习记录以评审反馈与实际交付为依据，日期为整理日期。项目分工说明了 AI 辅助实现的范围。

## 本地运行

将项目文件放在同一个目录。用浏览器直接打开 `index.html` 即可，或者在 VS Code 中用本地静态预览扩展打开。项目使用原生 HTML、CSS 和 JavaScript，无需安装依赖。

| 文件 | 内容 |
| --- | --- |
| `index.html` | 关于我、近期更新和联系方式 |
| `learning.html` / `learning.js` | 学习记录与主题筛选 |
| `projects.html` | 技能证据与项目作品 |
| `styles.css` | 公用样式和响应式布局 |
| `homepage.png` / `homepage-mobile.png` | Edge 实测的 1440 像素和 360 像素首页截图 |
| `UPDATE-PLAN.md` | 当前状态与更新计划 |
| `LEARNING-TEMPLATE.md` | 可复制的学习条目模板 |
| `PROMPT.md` | 个人网页提示词 |

## 如何持续更新

1. 用 [学习条目模板](LEARNING-TEMPLATE.md) 填写新记录，放到 `learning.html` 的 `.entries` 区域最前面。新增主题时，在筛选框添加与 `data-topic` 一致的选项。
2. 在 `projects.html` 添加项目，补上问题、个人分工、技术、最大困难及证据。在首页更新推荐条目和日期。
3. 提交前从三个页面分别点击导航，测试筛选和手机宽度下的排版。首页改动后重新截取桌面和手机宽度的截图。

## 提交

课程平台要求仓库地址时，将整个项目推送到自己的 Git 仓库，再提交仓库链接。课程平台要求个人网页提示词时，提交 `PROMPT.md` 正文。截图可单独上传 `homepage.png` 和 `homepage-mobile.png`，更新计划见 `UPDATE-PLAN.md`。

## GitHub Pages

推送项目后，在仓库的 **Settings → Pages** 中选择 **Deploy from a branch**，发布来源选择含有 `index.html` 的分支（本项目默认 `main`）及 **/ (root)**。部署成功后，从 Pages 设置页复制公开地址。打开它检查三个页面的导航、学习筛选和两张截图。 [GitHub Pages 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
