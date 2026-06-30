# Using the system

How to operate the Ingrid presentation system: the engine, the decks, the in-browser
editor, charts, diagrams, presenting, and shipping a single-file deck.

Brand rules live in `brand/ingrid/BRAND.md`. Components live in `docs/COMPONENTS.md`.
Design judgement lives in `docs/DESIGN.md`. This file is the mechanics.

---

## What's in the repo

```
index.html              ← launcher: starters + example decks (open / edit)
starter-*.html          ← starter decks: copy one to begin (blank, market-update, pitch)
ingrid_examples.html    ← deck: generic layout & component gallery (thin shell)
ingrid_library.html     ← deck: concrete reusable Ingrid content (thin shell)
engine/                 ← shared engine, reused by every deck
  engine.css            ← brand tokens, layout, component styles
  engine.js             ← navigation, progress bar, PDF export
  edit.js               ← in-browser editor (?edit) + ＋Add-slide picker
  charts.js             ← Chart.js + Mermaid
templates/              ← templates.js (component source) + gallery.html (browse)
knowledge/              ← institutional facts: COMPANY/MESSAGING/PRODUCTS/MARKET/PROOF/GLOSSARY
brand/ingrid/           ← BRAND.md + logos, gradients, photos, video
docs/                   ← BRAND/COMPONENTS/DESIGN/STORYTELLING + this file
scripts/                ← bundle.mjs (export) + gen-components-doc.mjs
dist/                   ← generated single-file decks (build artifact, gitignored)
reference/              ← upstream fork artifacts (not used; do not edit)
```

A **deck is a thin shell**: just `<section class="slide">` blocks plus links to `engine/`.
That keeps decks small and diffs clean. The price is that a raw deck needs its sibling
files to run — which is what the bundler (below) resolves for sharing.

---

## Quick start

1. **Open `index.html`** in a modern browser. **Start a new deck** by copying a starter
   (`starter-blank.html`, `starter-market-update.html`, `starter-pitch.html`) to a new file,
   or open `ingrid_examples.html` to browse every component.
2. **Edit content** by adding/removing `<section class="slide">` blocks, or use edit mode (below).
3. **Drop media** into `media/` and reference it with relative paths; data files go in `data/`.
4. **Present** full-screen (F11 in Chrome, Cmd+Ctrl+F in Safari).
5. **Ship** a self-contained copy with the bundler when the deck is ready.

No build step is needed to *author* — the build step only produces the shareable single file.

---

## Editing in the browser

For quick changes — typos, rewording, reordering — you don't need to touch HTML. Click the
**Edit** button (next to Download PDF) or add `?edit` to the URL.

**Text.** Click any text to edit in place. Enter/Escape commits, Cmd/Ctrl+Z undoes within a
field. Editing is plain-text only — pasted formatting is stripped, the underlying markup stays intact.

**Slides.** The rail on the left shows live thumbnails. Click to jump, drag to reorder, or
use the per-slide buttons to move, duplicate, and delete. Cmd/Ctrl+Z (outside a text field)
undoes structural changes.

**＋ Add slide.** The picker offers every component from `templates/templates.js`. Inserting
one adds a new on-brand slide after the current one.

**Images and video.** Hover any image for a card. Drag a file onto it, click to upload, or
paste a link. Uploaded files embed in the deck (images are downscaled); pasted links stay as
URLs. Dropping a video swaps that slot to a `<video>` automatically.

**Saving.** Press Cmd/Ctrl+S or click **Save**.
- In Chromium (Chrome, Edge) the first save asks you to select the deck's own file once
  (granting write access); after that, saves write straight back, and edits auto-save
  (debounced) as you go.
- Other browsers can't write local files, so they download an updated copy — replace the original.

Saves are **surgical**: only changed slides are rewritten; styles and scripts pass through
byte-for-byte, so git diffs show only real edits. The HTML comment above each `<section>` is
the save anchor — keep one per slide.

**Boundary.** Edit mode covers text, order, and images/video. New layouts, components, and
styling stay HTML/CSS work (in the deck and `engine/`). See the division of labor in `AGENTS.md`.

---

## Working with an AI agent

The system is built for an agent + human pairing (any agent — see `AGENTS.md`). The workflow:

1. Tell the agent the story and the beat you want: *"Add a quote slide after slide 4 asking 'but isn't this just chaos?'"*
2. The agent inserts a slide using the real components, anchored in real facts.
3. Iterate by feedback: *"Make it dark." "Move it before 5." "Shorten the headline."*
4. Hand wording, image, and reorder tweaks to yourself via edit mode.

Treat the deck as a document you write like prose; the components are the vocabulary.
Tips: say what you want ("add a comparison") not the class name; reference existing slides
("quieter, like slide 2"); iterate one change at a time.

---

## Components

Every component is documented with copy-paste markup in **`docs/COMPONENTS.md`**, generated
from `templates/templates.js`. Browse them rendered in `templates/gallery.html`, or insert
them live with ＋ Add slide. To add a new component, edit `templates/templates.js` and run:

```
node scripts/gen-components-doc.mjs
```

That regenerates `docs/COMPONENTS.md` so the doc, the gallery, and the picker stay in sync.

---

## Charts

Charts use Chart.js, loaded from CDN when a deck has a `<canvas data-chart="…">`.

**Data format** (CSV and XLSX alike): first row = headers (first cell = label name, rest =
series names); each later row = one data point (first cell = label, rest = numbers).

```csv
Quarter,Revenue,Costs
Q1,120,80
Q2,145,95
```

**Three ways to load data:**

1. **Inline (recommended, works on `file://`).** Put the CSV in a `<script type="text/csv" id="…">`
   right after the chart's `</section>`, and reference it: `<canvas data-chart="bar" data-src="#that-id">`.
2. **Drag-and-drop.** Drop a `.csv`/`.xlsx` onto a canvas to re-render instantly.
3. **File path (HTTP only).** `<canvas data-chart="bar" data-src="data/revenue.csv">` — works
   when served (`python3 -m http.server`), not on `file://`. XLSX uses SheetJS, loaded lazily.

**Types:** `bar` (categories), `line` (trends), `pie`/`doughnut` (part-to-whole, ≤5), `scatter`
(correlation, rows are `Label,X,Y`). Charts use the deck's palette automatically.

For live Ingrid data, pull it via the `ingrid` MCP server, write it to `data/`, and reference
it from a chart slide (see `AGENTS.md`).

---

## Diagrams

Diagrams use Mermaid.js (CDN). Write the syntax in a `<pre class="mermaid">` inside a
`.mermaid-wrap` div:

```html
<div class="mermaid-wrap">
  <pre class="mermaid">
graph LR
  A[Start] --> B{Check}
  B -->|Pass| C[Done]
  B -->|Fail| D[Retry]
  </pre>
</div>
```

Common types: `graph TD` / `graph LR` (flowcharts), `sequenceDiagram`, `erDiagram`, `gantt`,
`classDiagram`. Full syntax at [mermaid.js.org](https://mermaid.js.org). Diagrams render
lazily on first slide visit (so they size correctly), and inherit the deck's visual style
(near-black text, light borders, transparent background).

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `→` `Space` `PageDown` | Next slide |
| `←` `PageUp` | Previous slide |
| `Home` / `End` | First / last slide |
| `P` | Download PDF |
| Swipe left/right | Next / previous (touch) |

---

## Presenting & PDF

**Full-screen:** F11 (Chrome/Edge) or Cmd+Ctrl+F (Safari). Test on the real screen — the deck
is responsive but feels best at 16:9.

**PDF:** click **Download PDF** or press `P`. In the print dialog: Destination *Save as PDF*,
Margins *None*, and **Background graphics ON** (critical, or dark/gradient slides print white).
Chrome has the best print engine. Always export a PDF backup before a talk. If a chart or
diagram slide hasn't been visited, navigate to it once before printing (they render lazily).

---

## Embedding

Add `?embed` to a deck URL for an embeddable version (PDF button hides; nav stays):

```html
<iframe src="ingrid_examples.html?embed" style="width:100%; aspect-ratio:16/9; border:none;"></iframe>
```

For sharing a single file inside another page, embed the **bundled** deck (next section) so it
carries its own assets.

---

## Shipping: bundle to a single file

Author thin; ship flat. `scripts/bundle.mjs` flattens a deck into one self-contained file in
`dist/` by inlining the engine (CSS + JS + the template library) and base64-embedding every
brand image the deck uses. Large photos are downscaled on the way in (needs `sips`, built into
macOS), so the output stays a sensible size.

```
node scripts/bundle.mjs ingrid_examples.html              # → dist/ingrid_examples.html
node scripts/bundle.mjs ingrid_examples.html --no-edit     # view-only, smaller (external/client)
node scripts/bundle.mjs ingrid_examples.html --offline     # also inline Chart.js, Mermaid, fonts
node scripts/bundle.mjs ingrid_examples.html --out path.html
```

**Defaults:** the editor stays in (recipients can edit their copy), and CDN libraries + Google
Fonts stay as links — self-contained *assuming internet*. `--offline` inlines those too for
airgapped sharing; `--no-edit` strips the editor for a smaller, locked share. `--no-optimize`
embeds images at full size.

**Discipline.** `dist/<deck>.html` is a build artifact (gitignored). Keep iterating on the
thin **source** deck and re-bundle. Don't edit a bundle back into source — its inlined engine
and base64 images would diverge from the thin original. Source = author; dist = share.

A bundled file (default mode) is still fully editable: text edits, image swaps, reorder, and
＋ Add slide all work, and Save rewrites only changed slides while passing the inlined engine
through untouched.

---

## Troubleshooting

**Images don't load.** A raw deck needs its sibling `engine/` and `brand/` folders. To share
a deck where those won't travel, bundle it. Within the repo, keep the deck at the repo root so
`engine/…` and `brand/…` paths resolve.

**Videos won't autoplay with sound.** Browsers block this. Use `controls`, or `autoplay muted loop`.

**Chart shows "Failed to fetch".** You opened the file as `file://` with `data-src="data/…csv"`.
Use the inline pattern (`<script type="text/csv" id="…">` + `data-src="#id"`) or drag the CSV
onto the canvas.

**Chart blank on a slide.** It initialized while hidden; the deck resizes on slide activation.
Arrow left then right to re-trigger.

**Mermaid diagram missing.** Confirm `<pre class="mermaid">` inside `.mermaid-wrap`. Diagrams
render on first visit, not page load. Invalid syntax shows an error — check the console.

**Fonts/charts/diagrams look wrong offline.** Fonts and the chart/diagram libraries load from
CDN by default. For offline use, bundle with `--offline`.

**Customizing the design.** Colors, type, and spacing live in `engine/engine.css` (driven by
the tokens in `brand/ingrid/BRAND.md`) — not in the deck. Edit the engine to restyle every deck
at once.

---

## Scope

Plain HTML, CSS, and a small JS engine. Authoring needs no build step; the bundler is a single
optional export script. For animation, fragments, or a presenter view, use Reveal.js. This
system is for writing an on-brand Ingrid deck like a document and shipping it as one file.
