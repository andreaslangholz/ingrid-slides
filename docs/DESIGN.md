# Design craft

How to compose a good Ingrid slide. This is the judgement layer: hierarchy, spacing,
density, and when to reach for which component.

It does **not** define tokens. Colors, typography, logos, the gradient, photography, and
the grid all live in **`brand/ingrid/BRAND.md`** — that is the single source of truth for
*what is on-brand*. The exact component markup lives in **`docs/COMPONENTS.md`**. This file
is *how to arrange those well*.

The principle: most slides are an eyebrow, a headline, and breathing room. Anything more
should earn its place.

---

## The spine of every slide

Ingrid content slides read top to bottom in one consistent order:

1. **Eyebrow** (`.eyebrow`) — a short Fira Code label that tags the context.
2. **Headline** (`h2`, with a `.dim` span) — the message, in the bold-then-dim pattern.
3. **Sub-head** (`.pptc-subhead`) — the ALL-CAPS restatement / section marker.
4. **Content** — body, columns, data, or media.

Lead with the headline's point. The slide is the punchline; the speaker is the setup.
Don't write a slide you'd have to read aloud word for word.

---

## The headline pattern

Bold anchor + dim extension. The first phrase carries weight; the `.dim` span recedes.

```html
<h2>Anchor. <span class="dim">Extension that fades.</span></h2>
```

This is the most consistent visual identity in the system. Use it on every headline that
has the room. Marketing headlines are lowercase (Ingrid voice); see BRAND.md for the type
hierarchy and weights.

---

## Hierarchy & density

- **One idea per slide.** If you're making two points, make two slides.
- **Three, not ten.** Three solid columns/stats/steps beat ten thin ones. For Act 3, three
  strong build stories beat a long list.
- **Let the eye rest.** Negative space is part of the design. The engine already pads
  slides generously — don't fight it by cramming.
- **Match the lengths.** In two- and three-column layouts, keep each column's copy roughly
  parallel in length and tone. Asymmetry reads as a mistake.
- **Numbers earn their size.** Big numbers (stat grid) are for figures that actually carry
  the story. Don't inflate a soft metric into a hero number.

---

## Color, used sparingly

Follow the BRAND.md proportion rule: ~50% core black/white, ~30% the Ingrid gradient
(reserved for covers, dividers, key moments), ~20% the accent energies (violet, blue,
orange, yellow) in data, icons, and fine detail. Flux Violet `--violet` is the primary
accent — dots, highlights, the progress bar. Color carries hierarchy; it is not decoration.

The gradient is a **signature expression**, not a background default. Use it on covers,
section dividers, and closings (`ig-grad-bg`), not on ordinary content slides.

---

## Rhythm: punctuation slides

- **Dark slides** (`ig-dark`) mark turning points. Two or three per deck, max — emphasis
  needs contrast to work.
- **One callout** per deck. The dark callout block stops landing if it repeats.
- **Quote / gradient-quote slides** open, close, and mark the pivot. One bold line, nothing else.
- **Show, don't tell.** Pair a setup slide (text, stat, product) with an evidence slide
  (full-bleed image / collage). The visual lands harder after the setup.

---

## Choosing a component

Match the component to the content type. Full markup in `docs/COMPONENTS.md`.

| The content is… | Reach for |
|---|---|
| A single bold statement | Gradient quote |
| A point with nuance | Eyebrow + headline + sub-head + subtitle |
| Two ideas in tension (problem/fix, before/after) | Two column |
| A structural breakdown (why / how / what) | Three column |
| One key insight to spotlight | Callout (one per deck) |
| Questions and answers | Q&A list |
| A turning point | Section divider (dark) |
| Measurable impact | Stat grid (one hero card) |
| A sequence of events over time | Timeline |
| A repeatable process | Process flow |
| Categorised building blocks | Stack grid |
| Quantitative data | Chart (Chart.js, inline CSV or `data/`) |
| A system / decision / architecture | Diagram (Mermaid) |
| A cinematic visual moment | Full-bleed image |
| A feature with explanation | Split (text + image) |
| Several visual items | Image cards / Photo grid |
| A human voice | Image + quote |
| Two perspectives | Quote pair |
| Opening / closing | Cover / Dark gradient cover / Closing |

---

## Do / don't

**Do**
- Keep the eyebrow → headline → sub-head spine.
- Use the bold-then-dim headline everywhere it fits.
- Reserve the gradient and dark slides for moments that matter.
- Keep copy specific: real numbers, real names, one term per concept.

**Don't**
- Don't stack two novel layouts on one slide. Pair a new idea with familiar elements.
- Don't number slides manually in content — the nav counter handles it.
- Don't introduce a color or font that isn't in BRAND.md. If a layout needs one to work,
  the layout is wrong.
- Don't overstuff Act 3 or skip Act 4 (the honest part) — that's where trust is built.

---

## Freestyling a new component

You can invent layouts when the content demands it, as long as they look native:

1. **Stay on-token.** Only BRAND.md colors, fonts, weights, spacing. No new colors/fonts.
2. **Use the headline pattern** for any headline.
3. **Match the craft** — the radius, padding, and hierarchy of existing components.
4. **Name the class** in the existing style (lowercase, hyphenated): `timeline-row`, `quote-pair`.
5. **Put the CSS in `engine/engine.css`**, grouped with a comment.
6. **One new idea per slide.** Surround it with familiar elements so it feels at home.

If a freestyle would need a new color or a different font to work, rethink it. If it looks
like it belongs next to the existing components, it's a good freestyle — and if it'll
recur, add it to `templates/templates.js` and regenerate `docs/COMPONENTS.md`.
