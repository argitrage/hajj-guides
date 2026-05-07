# Hajj Guides and Rulings Search

Static GitHub Pages site for searching the supplied Makarem Shirazi Hajj ruling resources.

## Website

The website lives in `docs/` and can be hosted directly with GitHub Pages:

- Source: Deploy from a branch
- Branch: `main`
- Folder: `/docs`

Open `docs/index.html` locally to use the search without hosting.

## Regenerate Search Data

Run:

```powershell
python build_static_search.py
```

This rebuilds `docs/search-data.js` from the extracted text files.
