"use strict";

const filter = document.getElementById("topic-filter");
const topic = document.getElementById("topic");
const entries = document.querySelectorAll(".entry[data-topic]");
const count = document.getElementById("record-count");

function updateEntries() {
  let visible = 0;
  for (const entry of entries) {
    const matches = topic.value === "all" || entry.dataset.topic === topic.value;
    entry.hidden = !matches;
    if (matches) visible += 1;
  }
  count.textContent = `显示 ${visible} 条记录`;
}

topic.addEventListener("change", updateEntries);
filter.hidden = false;
updateEntries();
