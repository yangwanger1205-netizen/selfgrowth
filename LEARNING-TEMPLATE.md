# 学习条目模板

将下面的 `article` 复制到 `learning.html` 的 `.entries` 区域最前面，填写自己的日期、标题、问题和验证结果。把 `id` 换成尚未使用的短英文名称，方便从首页直接链接到这条记录。

主题代码与筛选菜单对应。网页结构用 `pages`，前端交互用 `data`，提交验收用 `review`。选择主题后，同时更新标签文字。

```html
<article class="card entry" id="unique-entry-id" data-topic="pages">
  <div class="entry-meta">
    <time datetime="YYYY-MM-DD">YYYY-MM-DD</time>
    <span class="tag">网页结构</span>
  </div>
  <div>
    <h2>本次学习的具体主题</h2>
    <dl>
      <dt>学了什么</dt><dd>写明实际练习了什么。</dd>
      <dt>遇到的问题</dt><dd>描述当时的现象、预期和差异。</dd>
      <dt>怎么处理</dt><dd>记录尝试和验证结果，或写下尚待验证的下一步。</dd>
    </dl>
  </div>
</article>
```
