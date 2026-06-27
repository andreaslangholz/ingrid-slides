# Using the deck

A guide to making slides with this template.

---

## Quick start

1. **Clone or download** this repo.
2. **Open `deck.html`** in any modern browser. That's it. No build step. No dependencies.
3. **Edit the HTML** to add your content. Each slide is a `<section class="slide">`.
4. **Drop your media** into `media/` and reference it with relative paths.
5. **Drop data files** into `data/` and reference them in chart slides (or embed data inline — see Charts below).
6. **Present** in full-screen (F11 in Chrome, or Cmd+Ctrl+F on Mac).

The file is fully self-contained except for fonts (Inter from Google Fonts) and the Chart.js / Mermaid libraries (loaded from jsDelivr CDN when slides with charts or diagrams are used). If you'll present somewhere without wifi, download those libraries in advance — links are in the script tags at the bottom of `deck.html`.

---

## Editing in the browser

For quick changes — fixing a typo, rewording a headline, reordering slides — you don't need to touch the HTML. Click the **Edit** button next to **Download PDF**, or open the deck with `?edit` appended to the URL.

**Text.** Click any text to edit it in place. Enter or Escape commits, Cmd/Ctrl+Z undoes within a field. Editing is plain-text only, so pasted formatting is stripped and the underlying markup stays intact.

**Slides.** The rail on the left shows live thumbnails. Click to jump, drag to reorder, or use the per-slide buttons to move, duplicate, and delete. Cmd/Ctrl+Z (outside a text field) undoes structural changes.

**Images and video.** Hover any image and a card appears. Drag an image or video file onto it, click to upload, or paste a link. Uploaded files embed in the deck (images are downscaled, so the file stays reasonable); pasted links stay as URLs. Dropping a video swaps that slot to a `<video>` automatically, so any image slot can hold video.

**Saving.** Press Cmd/Ctrl+S or click **Save**.

- In Chromium browsers (Chrome, Edge), the first save asks you to select the deck's own file once — that's the browser's way of granting write access. Every save after that writes straight back to the file, silently. Choose "Allow on every visit" when the browser asks after a reload and it stays silent permanently.
- Once write access is granted, edits **auto-save** as you go (debounced), so you rarely need to press Save yourself.
- Other browsers can't write to local files, so they download an updated copy instead. Replace the original with it.

Saves are surgical: only the slides you actually changed are rewritten. Untouched slides, the styles, and the scripts pass through byte-for-byte, so if the deck lives in git, diffs show only real edits.

**Good to know.**

- Edit mode changes text, slide order, and images or video. New layouts, components, and styling are still HTML work.
- In slides you edited, HTML character entities (like `&amp;trade;`) are written back as their literal characters. Same rendering, just a different spelling in the source.
- The comment line above each `<section>` is the anchor that in-place saving uses. Keep one per slide.
- Exit edit mode with the **Exit** button. Without `?edit`, the deck behaves exactly as before.

---

## Using with Claude Code

This template was made for collaboration with Claude Code (or any AI coding assistant). The workflow that works:

1. **Open the repo in your editor** with Claude Code running.
2. **Tell Claude what slide you want.** Example: *"Add a quote slide after slide 4 that says 'But isn't this just chaos?' as a question."*
3. Claude inserts the slide using the existing components.
4. **Iterate by feedback.** *"Make it dark."* *"Move it before slide 5."* *"Shorten the headline."*
5. **Drop in media** as you go: *"Wire `media/demo.mp4` to the collage on slide 8."*

The key is treating the deck as **a document**. You write it like prose. The components are just the vocabulary.

### Tips for prompting

- **Say what you want.** "Add a comparison slide" beats "use a three-column grid."
- **Reference existing slides.** "Make slide 5 quieter, like slide 2." Claude will copy the pattern.
- **Iterate small.** Don't ask for 10 changes at once. One thing, see it, next thing.

---

## Components

Every component is in `deck.html` as a working example. Copy any `<section class="slide">` and edit the content.

| Component | What it's for |
|---|---|
| **Cover** | Title, speaker, date. First slide. |
| **Quote slide** | A single bold statement. Used for openings, transitions, mic-drops. |
| **Eyebrow + headline + subtitle** | The default text slide. Use for setup, explanation, framing. |
| **Two-column** | Side-by-side comparison. Problem/fix, before/after, today/tomorrow. |
| **Step stack** *(in two-column)* | The "old way of building" pattern. Cumulative steps, dimmed blockers, kill marker at the end. |
| **Three-column** | Why/how/what or any structural breakdown. |
| **Capability list** | Q&A rows. "What it solves" sections. |
| **Dark callout** | One-per-deck emphasis block. Black background, white text. |
| **Dot flow** | Process diagram. Five steps connected by a thin line. |
| **Stack grid** | Four cards of categorized tools/items with simple marks. |
| **Spec block + outputs** | Input → process → outputs vertical flow. |
| **Product slide** | Showcase style. Big name on the right, description on the left. |
| **Collage slide** | Full-bleed image or video. Used after a product slide for impact. |
| **JEDUF three-column** | Two extremes vs the middle path. Hero column is dark. |
| **Dark slide** | A pivot moment. Marks the turn in the talk. |
| **Closing** | Mic-drop line. Often dark. |
| **Chart slide** | Bar, line, pie, or doughnut chart from CSV or XLSX data. |
| **Diagram slide** | Flowchart, sequence, ER, or any Mermaid diagram type. |

---

## Charts

Charts are powered by Chart.js. The library loads from CDN automatically when the deck has a `<canvas data-chart="...">` element.

### Data format

CSV and XLSX follow the same convention:

- **First row:** column headers. First cell is the label name; remaining cells are series names.
- **Remaining rows:** one row per data point. First cell is the label (x-axis value or pie segment name); remaining cells are numeric values.

```csv
Quarter,Revenue,Costs
Q1,120,80
Q2,145,95
Q3,160,100
Q4,190,110
```

### Three ways to load data

**1. Inline (works everywhere, including double-clicking the file)**

Embed the CSV directly in the HTML in a `<script type="text/csv">` tag and reference it with `data-src="#that-id"`. This is the recommended default — no server, no fetch, no CORS issue.

```html
<canvas data-chart="bar" data-src="#my-data"></canvas>

<script type="text/csv" id="my-data">
Quarter,Revenue,Costs
Q1,120,80
Q2,145,95
</script>
```

Place the `<script>` tag right after the `</section>` that contains the chart.

**2. Drag-and-drop**

Drop any `.csv` or `.xlsx` file directly onto a chart canvas. The chart re-renders immediately with the new data. This is the ThinkCell-equivalent workflow — no code change needed.

**3. File path (HTTP server only)**

```html
<canvas data-chart="bar" data-src="data/revenue.csv"></canvas>
```

Drop the file in `data/` and reference it. Works when the deck is served over HTTP (`python3 -m http.server`), not when opened as a local file. XLSX files use SheetJS, which loads lazily on first use.

### Chart types

| `data-chart` | Chart type |
|---|---|
| `bar` | Grouped bars — comparisons across categories |
| `line` | Connected line — trends over time |
| `pie` | Filled circle — part-to-whole (≤5 segments) |
| `doughnut` | Ring — part-to-whole with visual breathing room |
| `scatter` | X/Y dots — correlation (data format: `Label,X,Y`) |

---

## Diagrams

Diagrams are powered by Mermaid.js (loaded from CDN). Write diagram syntax in a `<pre class="mermaid">` block inside a `.mermaid-wrap` div.

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

Diagrams render lazily when their slide first becomes visible — this avoids sizing errors that occur when Mermaid tries to render inside a hidden slide.

### Common diagram types

```
graph TD          top-down flowchart
graph LR          left-to-right flowchart
sequenceDiagram   interaction/timing diagram
erDiagram         entity-relationship
gantt             project timeline
classDiagram      UML class diagram
```

See [mermaid.js.org](https://mermaid.js.org) for full syntax reference.

### Theme

Diagrams automatically inherit the deck's visual style: Inter font, near-black text, light gray borders, transparent background.

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `→` `Space` `PageDown` | Next slide |
| `←` `PageUp` | Previous slide |
| `Home` | Jump to first slide |
| `End` | Jump to last slide |
| `P` | Download PDF |
| Swipe left/right | Next / previous slide (touch devices) |

---

## Embedding

Add `?embed` to any deck URL to get an embeddable version. The PDF button hides; navigation arrows, slide counter, and progress bar stay visible.

```html
<iframe src="your-deck.html?embed" style="width:100%; aspect-ratio:16/9; border:none;"></iframe>
```

Works in blog posts, Notion, documentation sites, or anywhere that renders HTML. The deck is fully interactive inside the iframe. Arrow keys, swipe, and click navigation all work.

---

## Presenting

**Full-screen:** F11 (Chrome/Edge) or Cmd+Ctrl+F (Safari).

**Tip:** Test the deck on the actual screen you'll present from. Aspect ratios matter. The deck is responsive but feels best at 16:9.

**Backup plan:** Always download a PDF before the talk. If the laptop dies, you can present from the PDF on a phone or borrowed machine.

---

## PDF export

Click **Download PDF** (bottom center) or press `P`. In the browser print dialog:

- **Destination:** Save as PDF
- **Layout:** auto-detected from `@page` (16:9, 13.333in × 7.5in, matches PowerPoint widescreen)
- **Margins:** None / Default
- **Background graphics: ON** *(critical, otherwise dark slides print white)*

This works best in Chrome. Safari and Firefox sometimes mangle backgrounds.

---

## Adding a slide

1. Find the slide that comes before yours in `deck.html`.
2. Copy any existing `<section class="slide">…</section>` block.
3. Paste it after the previous slide.
4. Edit the content.

The slide counter and progress bar update automatically. No JS changes needed.

---

## Customizing the design

**To change colors, type, or spacing:** edit the `<style>` block at the top of `deck.html`.

**To stay on-brand:** see `docs/DESIGN.md` for the design tokens and rules. The design is opinionated: bold-then-dim headlines, no em-dashes in body copy, monochrome with one accent color (black). Lean into it or fork it.

**To use your own fonts:** replace the Inter import line at the top with your own. Update `font-family` in the `body` rule.

---

## Troubleshooting

**Images don't load.** You're probably opening the file from a different folder than `media/`. Make sure `deck.html` and `media/` sit next to each other.

**Videos won't autoplay with sound.** Browsers block this by default. Use `controls` (let the user click play) or `autoplay muted loop` (silent background).

**PDF export looks wrong.** Make sure "Background graphics" is enabled in the print dialog. Use Chrome. It has the best print engine.

**Fonts look wrong offline.** Inter is loaded from Google Fonts via the `@import` line. If you need offline support, download Inter and reference it locally instead.

**Chart shows "Could not load …: Failed to fetch".** You're opening the file directly (`file://`) and using `data-src="data/file.csv"`. Switch to the inline pattern: put your CSV in a `<script type="text/csv" id="my-id">` block and use `data-src="#my-id"`. Or drag your CSV file directly onto the chart canvas.

**Chart is blank when navigating to the slide.** This usually means the chart was initialized before the slide was visible. The deck resizes charts on every slide activation via `requestAnimationFrame` — if the chart is still blank, try pressing the left arrow and right arrow to re-trigger the resize.

**Mermaid diagram does not appear.** Check that the `<pre>` has `class="mermaid"` and that it's wrapped in `<div class="mermaid-wrap">`. Diagrams render on first slide activation, not on page load. If the diagram syntax is invalid, Mermaid replaces it with an error message — check the browser console for details.

**Charts or diagrams missing in PDF export.** Chart.js canvases export correctly via the browser print engine. Mermaid SVGs also print. Make sure "Background graphics" is enabled in the print dialog. If a diagram is on a slide you never navigated to before printing, do so once before exporting — diagrams render lazily on first visit.

---

## Scope

Plain HTML and CSS. No transitions, no themes, no build steps. That's the point.

For animation, fragments, speaker notes, or a presenter view, use Reveal.js. For editing in PowerPoint, use PowerPoint. This template is for people who want to write their deck like a website.
