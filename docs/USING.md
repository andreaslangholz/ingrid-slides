# Using the deck

A guide to making slides with this template.

---

## Quick start

1. **Clone or download** this repo.
2. **Open `deck.html`** in any modern browser. That's it. No build step. No dependencies.
3. **Edit the HTML** to add your content. Each slide is a `<section class="slide">`.
4. **Drop your media** into `media/` and reference it with relative paths.
5. **Present** in full-screen (F11 in Chrome, or Cmd+Ctrl+F on Mac).

The file is fully self-contained except for fonts (Inter is loaded from Google Fonts). If you'll present somewhere without wifi, that one line at the top of `<style>` is the only thing that needs to change.

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

---

## Scope

Plain HTML and CSS. No transitions, no themes, no build steps. That's the point.

For animation, fragments, speaker notes, or a presenter view, use Reveal.js. For editing in PowerPoint, use PowerPoint. This template is for people who want to write their deck like a website.
