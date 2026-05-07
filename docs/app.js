const data = window.SEARCH_DATA || [];

const queryInput = document.querySelector("#query");
const exactPhrase = document.querySelector("#exactPhrase");
const caseSensitive = document.querySelector("#caseSensitive");
const sourceFilter = document.querySelector("#sourceFilter");
const clearBtn = document.querySelector("#clearBtn");
const results = document.querySelector("#results");
const statusEl = document.querySelector("#status");
const recordCount = document.querySelector("#recordCount");
const template = document.querySelector("#resultTemplate");

recordCount.textContent = `${data.length.toLocaleString()} searchable passages`;

function escapeHtml(value) {
  return value.replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;"
  }[char]));
}

function normal(value) {
  return caseSensitive.checked ? value : value.toLowerCase();
}

function termsFor(query) {
  if (exactPhrase.checked) return [query];
  return query.split(/\s+/).filter(Boolean);
}

function matches(record, terms) {
  const haystack = normal(`${record.ref} ${record.heading} ${record.text}`);
  return terms.every(term => haystack.includes(normal(term)));
}

function findFirstIndex(text, terms) {
  const haystack = normal(text);
  const indexes = terms.map(term => haystack.indexOf(normal(term))).filter(i => i >= 0);
  return indexes.length ? Math.min(...indexes) : 0;
}

function highlight(text, terms) {
  let escaped = escapeHtml(text);
  const sorted = [...terms].sort((a, b) => b.length - a.length).filter(Boolean);
  for (const term of sorted) {
    const escapedTerm = escapeHtml(term).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const flags = caseSensitive.checked ? "g" : "gi";
    escaped = escaped.replace(new RegExp(escapedTerm, flags), match => `<mark>${match}</mark>`);
  }
  return escaped;
}

function snippet(record, terms) {
  const text = record.text.replace(/\s+/g, " ").trim();
  const idx = findFirstIndex(text, terms);
  const start = Math.max(0, idx - 180);
  const end = Math.min(text.length, idx + 380);
  const prefix = start > 0 ? "... " : "";
  const suffix = end < text.length ? " ..." : "";
  return prefix + text.slice(start, end) + suffix;
}

function render() {
  const query = queryInput.value.trim();
  results.innerHTML = "";

  if (query.length < 2) {
    statusEl.textContent = "Type at least two characters to search.";
    return;
  }

  const terms = termsFor(query);
  const source = sourceFilter.value;
  const found = data
    .filter(record => source === "all" || record.sourceId === source)
    .filter(record => matches(record, terms))
    .slice(0, 100);

  statusEl.textContent = found.length
    ? `Showing ${found.length} result${found.length === 1 ? "" : "s"}${found.length === 100 ? " (first 100)" : ""}.`
    : "No exact match found. Try fewer words or turn off exact phrase.";

  for (const record of found) {
    const node = template.content.firstElementChild.cloneNode(true);
    node.querySelector("h2").textContent = `${record.ref}${record.heading && record.heading !== record.ref ? " - " + record.heading : ""}`;
    node.querySelector(".source").textContent = record.source;
    node.querySelector(".snippet").innerHTML = highlight(snippet(record, terms), terms);
    node.querySelector("pre").innerHTML = highlight(record.text, terms);
    node.querySelector(".copy-btn").addEventListener("click", async () => {
      await navigator.clipboard.writeText(`${record.source}\n${record.ref}\n\n${record.text}`);
      node.querySelector(".copy-btn").textContent = "Copied";
      setTimeout(() => node.querySelector(".copy-btn").textContent = "Copy text", 1200);
    });
    results.appendChild(node);
  }
}

queryInput.addEventListener("input", render);
exactPhrase.addEventListener("change", render);
caseSensitive.addEventListener("change", render);
sourceFilter.addEventListener("change", render);
clearBtn.addEventListener("click", () => {
  queryInput.value = "";
  queryInput.focus();
  render();
});

render();
