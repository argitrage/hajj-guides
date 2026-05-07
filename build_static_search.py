import json
import re
from pathlib import Path


ROOT = Path(__file__).parent
EXTRACTED = ROOT / "extracted_text"
DOCS = ROOT / "docs"
DOCS.mkdir(exist_ok=True)

SOURCES = [
    ("makarem-hajj-rites", "The Rites of Hajj, Practical Treatise and Rules", EXTRACTED / "The Rites of Hajj, Practical Treatise and Rules.txt"),
    ("makarem-summary", "A Summary of Rulings", EXTRACTED / "A Summary of Rulings.txt"),
]


def clean_text(text):
    replacements = {
        "â€™": "'",
        "â€˜": "'",
        "â€œ": '"',
        "â€": '"',
        "â€“": "-",
        "â€”": "-",
        "â€¢": "-",
        "Kaâ€™ba": "Ka'ba",
        "Saâ€™y": "Sa'y",
        "Dhuâ€™l": "Dhu'l",
        "Mena": "Mina",
    }
    for bad, good in replacements.items():
        text = text.replace(bad, good)
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def split_chunks(source_id, source_title, text):
    text = clean_text(text)
    lines = [line.strip() for line in text.splitlines()]
    chunks = []
    current_ref = "Front Matter"
    current_title = ""
    current = []
    chunk_id = 0

    def flush():
        nonlocal chunk_id, current
        body = clean_text("\n".join(current))
        if len(body) < 40:
            current = []
            return
        chunks.append(
            {
                "id": f"{source_id}-{chunk_id}",
                "sourceId": source_id,
                "source": source_title,
                "ref": current_ref,
                "heading": current_title,
                "text": body,
            }
        )
        chunk_id += 1
        current = []

    for line in lines:
        if not line:
            if current:
                current.append("")
            continue

        article = re.match(r"^(Article|Issue|ISSSUE)\s+(\d+)\b[:\s]*(.*)", line, flags=re.I)
        if article:
            flush()
            label = "Issue" if article.group(1).lower().startswith(("issue", "isssue")) else "Article"
            current_ref = f"{label} {article.group(2)}"
            current_title = article.group(3).strip()
            current.append(line)
            continue

        heading_like = (
            len(line) <= 80
            and not line.endswith(".")
            and not line.startswith(("1-", "2-", "3-", "4-", "5-", "6-", "7-", "8-", "9-"))
            and not re.match(r"^\d+\)", line)
        )
        if heading_like and current and len("\n".join(current)) > 900:
            flush()
            current_title = line
            current_ref = line
            current.append(line)
            continue
        if heading_like and not current:
            current_title = line
            current_ref = line

        current.append(line)
        if len("\n".join(current)) > 2200:
            flush()

    flush()
    return chunks


def build_data():
    records = []
    for source_id, title, path in SOURCES:
        records.extend(split_chunks(source_id, title, path.read_text(encoding="utf-8")))
    return records


def write_site(records):
    data_js = "window.SEARCH_DATA = " + json.dumps(records, ensure_ascii=False, indent=2) + ";\n"
    (DOCS / "search-data.js").write_text(data_js, encoding="utf-8")

    (DOCS / "index.html").write_text(
        """<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Makarem Shirazi Hajj Rulings Search</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <main class="app">
    <header class="topbar">
      <div>
        <h1>Makarem Shirazi Hajj Rulings Search</h1>
        <p>Exact text search across the supplied Shia Hajj resources.</p>
      </div>
      <div class="meta">
        <span id="recordCount">Loading...</span>
      </div>
    </header>

    <section class="search-panel" aria-label="Search controls">
      <label for="query">Search exact words or phrase</label>
      <div class="search-row">
        <input id="query" type="search" placeholder="Try: fragrance, umbrella, Tawaf of Nisa, combing" autocomplete="off" autofocus>
        <button id="clearBtn" type="button">Clear</button>
      </div>
      <div class="options">
        <label><input type="checkbox" id="exactPhrase" checked> exact phrase</label>
        <label><input type="checkbox" id="caseSensitive"> case sensitive</label>
        <label>
          Source
          <select id="sourceFilter">
            <option value="all">All sources</option>
            <option value="makarem-hajj-rites">Hajj rites treatise</option>
            <option value="makarem-summary">Summary of rulings</option>
          </select>
        </label>
      </div>
    </section>

    <section class="status" id="status">Type at least two characters to search.</section>
    <section id="results" class="results" aria-live="polite"></section>
  </main>

  <template id="resultTemplate">
    <article class="result">
      <div class="result-head">
        <div>
          <h2></h2>
          <p class="source"></p>
        </div>
        <button type="button" class="copy-btn">Copy text</button>
      </div>
      <p class="snippet"></p>
      <details>
        <summary>Show full matching text</summary>
        <pre></pre>
      </details>
    </article>
  </template>

  <script src="search-data.js"></script>
  <script src="app.js"></script>
</body>
</html>
""",
        encoding="utf-8",
    )

    (DOCS / "styles.css").write_text(
        """* {
  box-sizing: border-box;
}

:root {
  --ink: #17211f;
  --muted: #5d6763;
  --line: #d8e1dd;
  --paper: #fbfcfb;
  --panel: #ffffff;
  --accent: #1f6b60;
  --accent-soft: #e8f3f0;
  --mark: #fff1a8;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--ink);
  background: var(--paper);
}

.app {
  width: min(1120px, calc(100% - 32px));
  margin: 0 auto;
  padding: 28px 0 56px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  gap: 24px;
  align-items: flex-start;
  padding-bottom: 20px;
  border-bottom: 1px solid var(--line);
}

h1 {
  margin: 0 0 8px;
  font-size: clamp(1.55rem, 3vw, 2.15rem);
  line-height: 1.15;
  letter-spacing: 0;
}

.topbar p,
.source,
.status,
.meta {
  color: var(--muted);
}

.topbar p {
  margin: 0;
}

.meta {
  white-space: nowrap;
  font-size: 0.92rem;
}

.search-panel {
  margin-top: 22px;
  padding: 18px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
}

.search-panel label {
  font-weight: 700;
}

.search-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  margin-top: 8px;
}

input[type="search"],
select,
button {
  font: inherit;
}

input[type="search"],
select {
  min-height: 44px;
  border: 1px solid #bcc9c4;
  border-radius: 6px;
  padding: 0 12px;
  background: #fff;
  color: var(--ink);
}

button {
  min-height: 44px;
  border: 1px solid var(--accent);
  border-radius: 6px;
  background: var(--accent);
  color: #fff;
  padding: 0 14px;
  cursor: pointer;
}

button:hover {
  filter: brightness(0.96);
}

.options {
  display: flex;
  flex-wrap: wrap;
  gap: 14px 22px;
  align-items: center;
  margin-top: 14px;
}

.options label {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-weight: 400;
}

.status {
  margin: 18px 0 12px;
}

.results {
  display: grid;
  gap: 14px;
}

.result {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 16px;
}

.result-head {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  align-items: flex-start;
}

.result h2 {
  margin: 0 0 5px;
  font-size: 1.08rem;
  letter-spacing: 0;
}

.source {
  margin: 0;
  font-size: 0.92rem;
}

.copy-btn {
  min-height: 36px;
  white-space: nowrap;
  background: var(--accent-soft);
  color: var(--accent);
}

.snippet {
  line-height: 1.55;
}

mark {
  background: var(--mark);
  padding: 0 2px;
}

details {
  margin-top: 10px;
}

summary {
  cursor: pointer;
  color: var(--accent);
  font-weight: 700;
}

pre {
  white-space: pre-wrap;
  word-wrap: break-word;
  line-height: 1.5;
  margin: 12px 0 0;
  padding: 12px;
  border-radius: 6px;
  background: #f3f7f5;
  border: 1px solid var(--line);
  font-family: Arial, Helvetica, sans-serif;
}

@media (max-width: 700px) {
  .topbar,
  .result-head {
    flex-direction: column;
  }

  .meta {
    white-space: normal;
  }

  .search-row {
    grid-template-columns: 1fr;
  }
}
""",
        encoding="utf-8",
    )

    (DOCS / "app.js").write_text(
        """const data = window.SEARCH_DATA || [];

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
  return query.split(/\\s+/).filter(Boolean);
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
    const escapedTerm = escapeHtml(term).replace(/[.*+?^${}()|[\\]\\\\]/g, "\\\\$&");
    const flags = caseSensitive.checked ? "g" : "gi";
    escaped = escaped.replace(new RegExp(escapedTerm, flags), match => `<mark>${match}</mark>`);
  }
  return escaped;
}

function snippet(record, terms) {
  const text = record.text.replace(/\\s+/g, " ").trim();
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
      await navigator.clipboard.writeText(`${record.source}\\n${record.ref}\\n\\n${record.text}`);
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
""",
        encoding="utf-8",
    )

    (DOCS / "README.md").write_text(
        """# Makarem Shirazi Hajj Rulings Search

This is a static browser search over the supplied resources in this repository.

## Local use

Open `index.html` in a browser, or serve the `docs` folder with any static server.

## GitHub Pages

Push this repository to GitHub, then enable Pages from the repository settings and select:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/docs`

No backend is required.
""",
        encoding="utf-8",
    )


if __name__ == "__main__":
    records = build_data()
    write_site(records)
    print(f"Wrote {len(records)} searchable passages to {DOCS}")
