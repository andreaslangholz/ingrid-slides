# Ingrid Presentation System

An Ingrid Capacity slide system you can write like a document and ship as a single HTML
file. Decks are plain HTML on a shared engine, on-brand by default, editable in the browser,
and built for an agent + human to produce together.

```
ingrid-slides/
├── index.html             Launcher — lists the decks (open / edit).
├── ingrid_examples.html   Deck: generic layout & component gallery (thin shell).
├── ingrid_library.html    Deck: concrete reusable Ingrid content (thin shell).
├── design-system.html     The Ingrid brand & design system, rendered.
├── engine/                Shared engine — one engine powers every deck.
│   ├── engine.css         Brand tokens, layout & component styles, cover toggles.
│   ├── engine.js          Navigation, progress bar, PDF export.
│   ├── edit.js            In-browser editor (?edit) + ＋Add-slide picker.
│   └── charts.js          Chart.js + Mermaid.
├── templates/
│   ├── templates.js       Component source of truth — 23 on-brand templates.
│   └── gallery.html       Browse every template (filters + Copy HTML).
├── brand/ingrid/          BRAND.md + logos, gradients, photos, video.
├── docs/                  COMPONENTS · DESIGN · STORYTELLING · USING.
├── scripts/
│   ├── bundle.mjs         Export a deck to one self-contained file.
│   └── gen-components-doc.mjs  Regenerate docs/COMPONENTS.md from templates.js.
├── dist/                  Built single-file decks (build artifact, gitignored).
├── reference/             Upstream fork artifacts — not used, do not edit.
├── AGENTS.md              Agent entry point.
└── LICENSE                MIT.
```

---

## Start here

| If you are… | Read |
|---|---|
| An agent building a deck | [`AGENTS.md`](AGENTS.md) |
| Setting the brand | [`brand/ingrid/BRAND.md`](brand/ingrid/BRAND.md) |
| Looking for a component | [`docs/COMPONENTS.md`](docs/COMPONENTS.md) |
| Composing a slide well | [`docs/DESIGN.md`](docs/DESIGN.md) |
| Structuring the story | [`docs/STORYTELLING.md`](docs/STORYTELLING.md) |
| Operating the system | [`docs/USING.md`](docs/USING.md) |

---

## Quick start

```bash
git clone https://github.com/andreaslangholz/ingrid-slides.git
cd ingrid-slides
```

1. **Open `index.html`** (or a deck directly) in a modern browser.
2. **Edit** by adding/removing `<section class="slide">` blocks, or click **Edit** for the
   in-browser editor.
3. **Drop media** into `media/`, data into `data/`.
4. **Present** full-screen (F11 in Chrome, Cmd+Ctrl+F in Safari); export PDF with `P`.
5. **Ship** a single self-contained file with the bundler (below).

No build step to author. The only build is the optional export.

---

## How it works

A **deck is a thin shell** — `<section class="slide">` blocks plus links to the shared
`engine/`. Brand styling, layout, navigation, the editor, and charts all live in `engine/`,
so one engine powers every deck and content files stay small. Change the brand once in
`engine/engine.css` (driven by `brand/ingrid/BRAND.md`) and every deck updates.

CSS `url()` paths in `engine/engine.css` resolve relative to the stylesheet (`../brand/...`);
image `src` in deck HTML resolves relative to the deck file (`brand/...`).

---

## In-browser editing

Click **Edit** (next to Download PDF) or add `?edit` to the URL — the deck becomes its own
editor, no install:

- **Click any text to edit it** in place (plain text; markup stays intact).
- **＋ Add slide** picks from the 23 templates and drops one in after the current slide.
- **Reorder, duplicate, delete** from the thumbnail rail.
- **Replace images/video** — hover to upload, drag-and-drop, or paste a link.
- **Save** writes back to the file (Chromium: in place after a one-time pick, then auto-saves;
  others download an updated copy). Diffs stay clean — only changed slides are rewritten.

See [`docs/USING.md`](docs/USING.md) for the full mechanics, and the human/agent division of
labor in [`AGENTS.md`](AGENTS.md).

---

## Components

23 on-brand components covering covers, text, data, media, and quotes. The source of truth is
`templates/templates.js`; the full markup is generated into [`docs/COMPONENTS.md`](docs/COMPONENTS.md)
and browsable in [`templates/gallery.html`](templates/gallery.html). Add a component by editing
`templates.js` and running `node scripts/gen-components-doc.mjs` — the doc, gallery, and picker
all derive from that one list, so they can't drift.

---

## Shipping a single file

Source decks stay thin (they link `engine/` + `brand/`). To produce a shareable single file,
run the bundler — it inlines the engine and base64-embeds every brand image:

```bash
node scripts/bundle.mjs ingrid_examples.html            # → dist/ingrid_examples.html (editor kept)
node scripts/bundle.mjs ingrid_examples.html --no-edit   # view-only, smaller (external/client)
node scripts/bundle.mjs ingrid_examples.html --offline   # also inline Chart.js, Mermaid, fonts
```

By default the output keeps the editor and leaves CDN libs + Google Fonts as links
(self-contained assuming internet). `dist/` is a build artifact (gitignored). Iterate on the
thin source deck and re-bundle; don't edit a bundle back into source.

---

## Embedding

```html
<iframe src="ingrid_examples.html?embed" style="width:100%; aspect-ratio:16/9; border:none;"></iframe>
```

`?embed` hides the PDF button; navigation stays. For sharing inside another page, embed a
bundled deck so it carries its own assets.

---

## License

[MIT](LICENSE). Forked from [noskillish/slides](https://github.com/noskillish/slides) and
specialized for Ingrid Capacity; the original framework artifacts are kept in `reference/`.
