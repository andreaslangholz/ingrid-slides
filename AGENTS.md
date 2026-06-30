# Ingrid Presentation System — Agent Guide

You are helping a human build an **Ingrid Capacity** slide deck. This file is the entry
point for any agent. It is short on purpose: it orients you and points you at the one
correct source for each kind of decision. Read the source before you act — don't work
from memory.

This is an Ingrid-only system. The upstream framework it was forked from lives in
`reference/` and is not used here.

---

## North star (the 7 qualities)

A self-contained Ingrid presentation system. "Done" = an agent and a human can pair to
produce on-brand, knowledge-anchored decks that ship as a single file.

1. A final deck is **one self-contained HTML file** — shareable, opens in any browser.
2. Every deck follows the **Ingrid brand & design**.
3. All generated text is **anchored in real Ingrid knowledge and wording** — never fabricated.
4. The system is **usable by multiple agents** (this file is the agnostic entry point).
5. There is a clear **human-editable vs agent-generated** boundary.
6. There are **shared components and starter decks** to build from.
7. It is **collaboration / version-control ready** (clean diffs, source vs build split).

---

## Where everything lives (read the right source)

| You need… | Go to | It is the source of truth for |
|---|---|---|
| Brand tokens & assets — colors, type, logos, gradient, photos | `brand/ingrid/BRAND.md` | *what is on-brand* |
| The slide components — exact on-brand markup | `docs/COMPONENTS.md` (generated) | *what to build with* |
| How to compose a good slide — hierarchy, density, do/don'ts | `docs/DESIGN.md` | *how to make it good* |
| Deck structure — the arc / beats | `docs/STORYTELLING.md` (+ variants) | *what story* |
| Operating the system — engine, editor, charts, PDF, **bundle/export** | `docs/USING.md` | *how to run it* |
| The component source (machine-readable) | `templates/templates.js` | feeds COMPONENTS.md + the ＋Add-slide picker + the gallery |
| Browse components rendered | `templates/gallery.html` | a view of `templates.js` |
| Ingrid facts — company, products, market, proof, wording | `knowledge/*.md` | *what is true about Ingrid* |
| Live Ingrid data | the `ingrid` MCP server (see below) | sites, telemetry, market prices |

**Decks you build from / edit:** `ingrid_examples.html` (generic layout & component
gallery) and `ingrid_library.html` (concrete reusable Ingrid content). Both are thin
shells over the shared `engine/`. The launcher `index.html` lists them.

**Do not edit** anything in `reference/` (upstream fork artifacts) — and never copy their
tokens (Inter, `#f5f5f3`, `.slide-inner`) into Ingrid work. Ingrid decks use Plus Jakarta
Sans / Fira Code and the engine's `.slide` structure, not the upstream ones.

---

## How a deck works

Each deck is a **thin shell**: `<section class="slide">` blocks plus links to the shared
engine. To change brand styling, layout, navigation, edit mode, or charts, edit the files
in `engine/` — not the deck.

```
engine/
  engine.css   ← brand tokens, layout, component styles, cover toggles
  engine.js    ← navigation, progress bar, PDF export
  edit.js      ← in-browser editor (?edit) + ＋Add-slide picker
  charts.js    ← Chart.js + Mermaid
```

A slide is a `<section class="slide">` directly inside `.deck`; content sits **directly
inside** the section (there is no inner wrapper). The first slide also has `active`.

```html
<!-- ========== 4. HEADLINE ========== -->
<section class="slide">
  <div class="eyebrow">Section label</div>
  <h2>The point. <span class="dim">The extension that fades.</span></h2>
  <div class="pptc-subhead">SECTION LABEL</div>
  <p class="subtitle">One or two sentences of nuance.</p>
</section>
```

Rules that keep a deck working:
- **Keep one HTML comment line directly above each `<section>`** (e.g. `<!-- ===== 3. AGENDA ===== -->`). The editor uses these as save anchors and they keep the file scannable.
- **Keep the full script tail and the `.btn-row`** (Edit + Download PDF) exactly as the existing decks have them. The engine and editor are loaded there; dropping them breaks the deck.
- Dark slides use `class="slide ig-dark"`; gradient-background slides use `ig-grad-bg`. Pick logo variants by background (see BRAND.md) — never recolor a logo with CSS filters.

---

## Components

The building blocks are defined once in `templates/templates.js` and documented in
`docs/COMPONENTS.md`. Use those exact patterns — copy the markup, change the text.

- To **add a slide** the human can use the **＋ Add slide** picker in edit mode; you can
  paste a component's markup from `docs/COMPONENTS.md`.
- **Use the range.** For a deck over ~10 slides use at least 5 different component types;
  include at least one visual-heavy slide (full-bleed image, split, photo grid).
- If a beat needs a component that doesn't exist, **propose it on-brand** (describe it,
  ask), then add it to `templates/templates.js` and regenerate the doc
  (`node scripts/gen-components-doc.mjs`) so the picker, gallery, and doc stay in sync.

---

## The headline pattern (use everywhere)

Bold anchor + dim extension — the visual signature of the system.

```html
<h2>Anchor. <span class="dim">Extension that fades.</span></h2>
```

First phrase carries weight; the `.dim` span recedes. Use it on every headline with room.

---

## Tone rules (follow strictly)

1. **Bold the keyword, dim the rest** — every headline.
2. **No em-dashes** anywhere. Use periods, commas, or colons.
3. **No contrast framing.** Don't write "Not X. Y." Say what it *is*, lead with the positive.
4. **No fluff.** If a sentence adds no information, delete it.
5. **Specific numbers.** "7×" beats "huge gains."
6. **Headlines are statements.** Exception: Q&A rows.
7. **Use names.** Say the product or feature by name, not "it."
8. **Pick one term and stick with it.** Don't paraphrase your own product.

Marketing headlines are **lowercase** ("we make the grid flex, not break") — intentional
Ingrid voice. Sub-headers (`.pptc-subhead`) are ALL CAPS. See BRAND.md for the full type hierarchy.

---

## Never fabricate facts (quality 3)

Every factual claim — numbers, site names, customer names, metrics, quotes, dates — must
come from something real: **`knowledge/*.md`** (the company fact base), the user, provided
data, the `ingrid` MCP server, or another file in this repo. Never invent Ingrid facts.

**Read `knowledge/` before writing factual copy.** `COMPANY` · `MESSAGING` · `PRODUCTS` ·
`MARKET` · `PROOF` · `GLOSSARY` are the source of truth for Ingrid wording and facts. If a
fact you need isn't there, get it from the user or the MCP server, then add it back to the
right `knowledge/` file so the next deck inherits it.

When you lack a fact, use an obvious placeholder (`[metric]`, `Add name · Role`) and ask
the user for the real value. It is always better to leave a marked gap than to guess.

---

## Division of labor (quality 5)

The in-browser editor enforces this split — don't fight it.

| Agents generate (in the HTML) | Humans edit directly (in-browser, no code) |
|---|---|
| Deck structure & narrative arc | Specific wording / copy (click to edit) |
| Component selection per beat | Swap / upload images & video (hover an image) |
| First-draft copy, anchored in real facts | Reorder / duplicate / delete slides (the rail) |
| Data → chart slides; Mermaid diagrams | Add a slide from the library (＋ Add slide) |
| New on-brand components when a beat needs one | Diagram / flowchart label text |

In-browser text editing is plain-text only (your markup stays intact); structure changes
go through the rail; inserts come from the template library; saves are surgical (clean
diffs). New layouts, components, and styling remain HTML/CSS work. See `docs/USING.md`.

---

## Storytelling structure

Decks follow six beats (timing scales to format). Full guidance in `docs/STORYTELLING.md`.

| Beat | ~Share | Purpose |
|---|---|---|
| Open | 10% | Hook the room. A confession, a contradiction, a surprising fact. |
| Act 1 — The world before | 15% | The status quo / the old way. Build empathy. |
| Act 2 — The turn | 15% | Something changed. State it cleanly. |
| Act 3 — The evidence | 40% | 3–5 concrete examples. Before → action → after. |
| Act 4 — The honest part | 15% | Doubt, risk, what's still being figured out. |
| Close | 5% | The closing line. Slow down. Stop. |

---

## When the human asks you to build a deck

1. **Ask for the story first.** What's it about, what's the arc, what's the closing line.
2. **Anchor the facts.** Read `knowledge/` first; fill gaps from the user or the `ingrid` MCP server. Mark anything you don't have.
3. **Draft the structure** with the six beats.
4. **Pick components** from `docs/COMPONENTS.md`, matching component to content type.
5. **Write the HTML** into a thin-shell deck using the exact class names. Keep comment anchors and the script tail.
6. **Iterate small.** One change at a time; show it, get feedback. Hand wording/image/order tweaks to the human via edit mode.
7. **Ship it.** When the deck is ready, bundle it to a single self-contained file (next section).

---

## Shipping a deck (self-contained, quality 1)

Source decks stay thin (they link `engine/` + `brand/`). To produce a shareable single
file, run the bundler — it inlines the engine and base64-embeds every brand image:

```
node scripts/bundle.mjs ingrid_examples.html            # → dist/ingrid_examples.html (editor kept)
node scripts/bundle.mjs ingrid_examples.html --no-edit   # view-only, smaller (for external/client)
node scripts/bundle.mjs ingrid_examples.html --offline   # also inline Chart.js, Mermaid, fonts (airgapped)
```

By default the output keeps the in-browser editor and leaves CDN libs + Google Fonts as
links (self-contained assuming internet). `dist/` is a build artifact (gitignored).
**Keep iterating on the thin source deck and re-bundle** — don't edit a bundle back into
source. Details in `docs/USING.md`.

---

## Ingrid data (MCP)

When the `ingrid` MCP server is configured (`.mcp.json` + `MCP_SERVER_URL` + `INGRID_JWT`),
you can pull live data into slides.

| Prefix | Covers |
|---|---|
| `site-config__list_*` / `get_*` / `search_*` | Sites, configuration, availability |
| `analytics-mcp__get_*` | Telemetry, P&L, market prices |

**Workflow:** call the read tool(s) → shape the result into CSV (first row = headers,
first column = labels) → write `data/ingrid-{topic}.csv` → reference it from a chart slide
(`<canvas data-chart="bar" data-src="data/ingrid-{topic}.csv">`).

Rules:
- **Never** call `site-config__list_sites` if the site list is already in context (it returns ~190 KB).
- **Batch** independent reads; each call is a full round-trip.
- **Never fabricate** site names or IDs — only use what the tools returned.
- A 401/403 means the JWT expired — ask the user to refresh `INGRID_JWT`.
