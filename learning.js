"use strict";

const filter = document.getElementById("topic-filter");
const topic = document.getElementById("topic");
const entries = document.querySelectorAll(".entry[data-topic]");
const count = document.getElementById("record-count");

function updateEntries() {
  // 每条记录的 data-topic 与下拉框的 value 对应，新增主题时同步修改两处。
  let visible = 0;
  for (const entry of entries) {
    const matches = topic.value === "all" || entry.dataset.topic === topic.value;
    entry.hidden = !matches;
    if (matches) visible += 1;
  }
  count.textContent = `显示 ${visible} 条记录`;
}

topic.addEventListener("change", updateEntries);
filter.addEventListener("submit", (event) => {
  // 阻止表单导航，保留页面和当前筛选结果。
  event.preventDefault();
  updateEntries();
});
updateEntries();
