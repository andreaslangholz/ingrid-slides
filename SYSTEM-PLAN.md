# Ingrid Presentation System — Plan

**Status:** workstreams A–E done; F (collaboration / version control) remains, by design a future step.
**Authored:** 2026-06-29. (Supersedes the earlier `AI-NATIVE-PLAN.md`; AI-nativeness is one pillar of this larger goal.)

## North star

A **self-contained Ingrid presentation system**, built on this branched repo. "Done" = any agent and a human can pair to produce on-brand, knowledge-anchored decks that ship as a single file. Success criteria:

| # | Quality | Today | Delivered by |
|---|---|---|---|
| 1 | Final deck = **one self-contained HTML file**, shareable, opens in any browser | ❌ thin shells link `engine/` + 16 external `brand/` images + CDN libs | **NEW bundler** → `dist/<deck>.html` (inline engine + base64 images) |
| 2 | Every deck follows **Ingrid brand & design** | ◐ BRAND.md + templates.js correct; AGENTS/DESIGN/USING contradict | BRAND.md · DESIGN.md (craft) · COMPONENTS.md · templates.js |
| 3 | All generated text **anchored in company knowledge & wording** | ❌ no `knowledge/` exists | `knowledge/` + AGENTS rule "never fabricate" |
| 4 | Usable by **multiple agents** | ◐ AGENTS.md is hybrid/contradictory | agent-agnostic `AGENTS.md` router (no `CLAUDE.md`) |
| 5 | Clear **human-editable vs generated** boundary | ◐ editor exists; the boundary is undocumented | in-browser editor + a documented division of labor |
| 6 | **Basic shared components + a few example decks** to pick from | ◐ templates.js = 23 components; decks exist but aren't framed as starters | templates.js + starter decks + launcher |
| 7 | Long-term ready for **collaboration & version control** (future) | ◐ surgical clean-diff save; no source/dist split yet | clean diffs · source/`dist` split · conventions |

Legend: ❌ not yet · ◐ partial · ✓ done.

---

## The core tension: quality 1 vs the architecture

The modular refactor (done) deliberately moved decks to **thin shells** that share one `engine/` and reference `brand/` assets by relative path. That's ideal for *authoring many decks* and for *clean diffs* (qualities 6–7), but it means a shipped deck is **not** self-contained: send someone `ingrid_examples.html` and it breaks without `engine/` and its 16 images.

**Resolution — keep authoring thin, add a build step:**

- **Source** (committed, diff-friendly): thin-shell decks + shared `engine/` + `brand/`. Agents and humans edit these. The canonical copy you keep iterating on.
- **Output** (generated, shareable): `scripts/bundle.mjs` flattens one deck into `dist/<deck>.html` by inlining every *local* dependency: `engine.css` → `<style>`; `engine.js` / `charts.js` / `edit.js` → inline `<script>`; `templates/templates.js` → inline (so the ＋Add-slide picker still works in the bundle); and every `brand/` image the deck uses → base64 `data:` URI. Result: one portable file, zero external local files.
- CDN libs (Chart.js, Mermaid) and Google Fonts stay as CDN links by default (fine for "opens in a browser" with internet); `--offline` inlines them too for airgapped sharing.
- `--no-edit` strips `edit.js` for a locked, smaller, view-only share (external/client). Default keeps the editor in.

**Does bundling break later editing? No.** It only changes *where* the CSS/JS/images live (inline vs. external), not the editor's ability to manipulate the DOM and re-serialise. In a bundled file with the editor kept (default):
- Inline text edits, image swaps, reorder/duplicate/delete, and ＋Add-slide all work — `edit.js` operates on the live DOM, and image-replace already base64-embeds, so it's consistent with the bundle.
- **Save still works:** the serialiser passes the `<head>` and script tail through byte-for-byte and only rewrites changed `<section>` blocks, so the inlined engine survives saves untouched. Chromium writes back to the file; other browsers download an updated copy.
- The only feature needing the extra inline step is the ＋Add-slide picker (it lazy-loads `templates.js`) — the bundler inlines it, so it keeps working.

**Discipline:** `dist/<deck>.html` is a build artifact. Recipients can edit their own copy freely, but for *your* ongoing iteration edit the source thin shell and re-bundle — don't round-trip a bundle back into source (inline engine + base64 images would diverge from the thin source). Source = author; dist = share.

This makes quality #1 real **without** sacrificing the authoring model behind 6–7. The editor's existing "download copy" is the seed of this, but it leaves `engine/` external — the bundler generalises it into a proper, repeatable export.

---

## Division of labor (quality 5)

| Agents generate | Humans edit directly (in-browser, no code) |
|---|---|
| Deck structure & narrative arc | Specific wording / copy (click-to-edit, plain text) |
| Component selection per beat | Swap / upload images & video (hover an image) |
| First-draft copy, anchored in `knowledge/` | Reorder / duplicate / delete slides (the rail) |
| Data → chart slides; Mermaid diagrams | Add a slide from the library (＋ Add slide) |
| New on-token components when a beat needs one | Flowchart / diagram label text |

The in-browser editor (`engine/edit.js`) already **enforces** this split: inline text is plain-text only (markup stays intact), images swap in place, structure changes via the rail, inserts come from the template library, and saves are surgical (clean diffs). The plan only needs to *document* the boundary — in `AGENTS.md` (what to generate) and `docs/USING.md` (what to hand-edit) — so neither side fights the other.

---

## Diagnosis (why the docs aren't consistent yet)

- **`AGENTS.md` contradicts itself:** correct Ingrid header (Plus Jakarta Sans, Fira Code, Flux Violet `#AA73FA`) over an upstream body — a Design-tokens table (Inter, `#f5f5f3`) and a 33-component reference using class names (`.slide-inner`, `.dark`) that **don't exist** in `engine.css`. Still calls `deck.html` "the deck."
- **`docs/DESIGN.md` is 100% upstream** (contradicts BRAND.md). **`docs/USING.md`** predates the `engine/` refactor and the ＋Add-slide picker.
- **Component vocabulary lives in 5 places, only 2 correct** (right: `ingrid_examples.html`, `templates/templates.js`; wrong: AGENTS/DESIGN/USING).
- **STORYTELLING duplicated 6×** (`docs/` ↔ `plugins/slides/skills/deck-system/`), and generic, not Ingrid.
- **`knowledge/` does not exist** (quality #3 absent). **No self-contained export** (quality #1 absent).
- Anchors to build on: `brand/ingrid/BRAND.md`, `templates/templates.js`, `design-system.html`, `engine/`.

---

## Target architecture

| File | Concern (quality) | What lives here | Single source of truth for |
|---|---|---|---|
| `AGENTS.md` | Entry / router (4) | Identity, the 7 qualities, tone rules, "never fabricate facts," build-a-deck workflow, division of labor, where everything lives | agent orientation |
| `brand/ingrid/BRAND.md` | Visual identity (2) | Hex colors, typography, logo files & usage, gradient PNGs, photography categories, 2× grid system, iconography | brand tokens & assets — *what is on-brand* |
| `docs/COMPONENTS.md` *(generated)* | Components (2,6) | Every real slide component: name, tag, class names, on-brand HTML — generated from `templates/templates.js` | the building blocks — *what I build with* |
| `docs/DESIGN.md` *(repurposed)* | Design craft (2) | How to compose a good slide: hierarchy, spacing rhythm, density, when to use which component, do/don'ts. Tokens **by reference** to BRAND.md | slide-design judgement — *how to make it good* |
| `docs/STORYTELLING.md` (+ variants) | Structure (2) | The arc/beats, Ingrid default arc, optional format-variant library | deck structure — *what story* |
| `docs/USING.md` | Mechanics (5) | Engine, thin-shell decks, in-browser editor, ＋Add-slide, charts, PDF, embed, **bundle/export** | how to operate the system |
| `knowledge/*.md` | Institutional knowledge (3) | `COMPANY` · `MESSAGING` · `PRODUCTS` · `MARKET` · `PROOF` · `GLOSSARY` | Ingrid facts — *what is true about Ingrid* |
| `templates/templates.js` | Component source — machine (6) | The 23 templates as structured data | machine SoT feeding COMPONENTS.md + picker + gallery |
| `templates/gallery.html` | Component browse — human (6) | Rendered, copy-able preview of every template | — (a view of templates.js) |
| `engine/edit.js` | Human-edit boundary (5) | The in-browser editor | what humans can change without code |
| `engine/` (css, js, charts) | Runtime | Brand styles, navigation, charts/diagrams | behavior |
| `scripts/bundle.mjs` *(new)* | Delivery (1) | Flattens a source deck → one self-contained file | the build step |
| `dist/<deck>.html` *(generated)* | Delivery (1) | Shareable single-file decks | the shippable artifact |
| starter decks + `index.html` | Examples / pick-a-start (6) | A few example decks to copy; launcher lists them | starting points |

**No overlap by design.** BRAND.md = *what is on-brand*; COMPONENTS.md = *what to build with*; DESIGN.md = *how to arrange it well*; STORYTELLING.md = *what story*; knowledge/ = *what is true*. A token is defined once (BRAND.md); a component's markup once (templates.js → COMPONENTS.md).

**Key AI-native move:** `docs/COMPONENTS.md` is *generated* from `templates/templates.js`. The picker, the gallery, and the docs all derive from one machine-readable source — they cannot drift.

---

## Workstreams

- **A — Single source of truth + agent-agnostic docs** (qualities 2, 3, 4). ✅ DONE. `AGENTS.md` rewritten as the thin agnostic router; `docs/COMPONENTS.md` generated from `templates.js` via `scripts/gen-components-doc.mjs`; `docs/DESIGN.md` repurposed (craft, tokens by reference); `docs/USING.md` + `README.md` rewritten; upstream artifacts archived to `reference/`. (STORYTELLING de-dup deferred with F — the duplicate copies live under `plugins/`, which F re-points.) The `engine/charts.js` `Inter` gap is now fixed — chart + Mermaid fonts use the brand stack (`Plus Jakarta Sans`).
- **B — Self-contained export / bundler** (quality 1). ✅ DONE. `scripts/bundle.mjs` → `dist/<deck>.html` (inlines engine + `templates.js`, base64-embeds brand images, downscales large photos via `sips`). Default keeps editor + CDN libs; `--no-edit` strips the editor; `--offline` inlines libs + fonts. `dist/` gitignored. Verified self-contained + error-free in headless Chrome.
- **C — Human/agent division of labor** (quality 5). ✅ DONE. The `AGENTS.md` "Division of labor" table is the single normative statement; `docs/USING.md` describes the human mechanics and links to it (no duplicated table). Audited every "humans edit" row against `engine/edit.js` — plaintext-only inline edit, rail reorder/duplicate/delete, ＋Add-slide, hover image/video swap, surgical save all present and correctly documented. Optional in-product hint skipped (the split is already enforced in code).
- **D — Institutional knowledge** (quality 3). ✅ DONE. `knowledge/` scaffolded with `README` + `COMPANY` · `MESSAGING` · `PRODUCTS` · `MARKET` · `PROOF` · `GLOSSARY` as empty fill-in templates (structured prompts + `TODO (user)` markers, no fabricated facts — per the resolved decision). `AGENTS.md` now lists `knowledge/` in the where-everything-lives table, requires reading it before writing factual copy, and the build-a-deck workflow anchors facts there first.
- **E — Components + starter decks** (quality 6). ✅ DONE. Components were already done (`templates.js`); added three thin-shell starters at the repo root — `starter-blank.html` (cover → agenda → content → closing), `starter-market-update.html` (stats + chart, inline CSV), `starter-pitch.html` (the six-beat arc). The launcher frames them under a "Start a new deck" section above the example decks.
- **F — Collaboration & version control** (quality 7, future). Source/`dist` separation, clean diffs, naming conventions; revisit the deferred `decks/<name>/` manifest when decks get media-heavy.

---

## Workstream C — brief for a fresh agent

**You are picking this up cold. Read this whole section, then the three files named below, before changing anything.** A and B are already done; C is partially done.

**Goal (quality 5):** make the boundary between *what an agent generates* and *what a human edits directly in the browser* explicit and unmissable, stated authoritatively in ONE place and referenced elsewhere, so neither side fights the other. The split is already *enforced in code* by the editor — C is about documenting it cleanly and (optionally) surfacing it in the product. This is a docs/clarity workstream; expect little or no engine code.

**Read first (current state):**
- `AGENTS.md` → the **“Division of labor”** section. A added a table there (agents generate vs humans edit) plus the tone rules and the “never fabricate facts” rule.
- `docs/USING.md` → the **“Editing in the browser”** section (ends with a **Boundary** note) and **“Working with an AI agent.”**
- `engine/edit.js` → the editor that *enforces* the split: inline text edits are plain-text only (markup preserved), structure changes go through the slide rail, inserts come from the `templates.js` picker, images swap on hover, and saves are surgical (only changed `<section>`s rewritten → clean diffs).

**What’s already done (by A):** both docs describe the boundary, and the code enforces it.

**What remains for C:**
1. **Pick the canonical home and de-duplicate.** Right now the boundary is described in two places. Recommendation: make the table in `AGENTS.md` the single normative statement; have `docs/USING.md` describe the *human mechanics* and link to it (don’t restate the table). Remove any drift between the two.
2. **Audit that the docs match what `edit.js` actually does.** Verify each row of the “humans edit” column is genuinely supported (plain-text inline edit, rail reorder/duplicate/delete, ＋Add-slide insert, hover image/video swap, surgical save) and each “agents generate” item is genuinely *not* a browser action. Fix the doc wherever it overstates or understates the editor. Note any real gap as a new TODO rather than silently “fixing” the engine.
3. **(Optional) Surface the boundary in the product.** Only if it adds clarity: a short “what you can change here” hint in edit mode, or a one-line note in `index.html`. The split is already enforced, so this is a nicety, not required. Keep any engine change minimal and on-token.

**Acceptance:** a new contributor can read ONE section and know exactly which edits to make in-browser vs in code; `AGENTS.md` and `docs/USING.md` agree (no contradictory or duplicated boundary tables); every documented human-edit affordance is one `edit.js` actually provides.

**Dependencies / scope:** none — C is independent of D/E/F and can ship on its own. Don’t expand into starter decks (E) or knowledge (D). Don’t touch `reference/`.

### Suggested phasing
1. **A + B in parallel** — make agents produce correct decks *and* make decks shippable. These two unlock the core promise.
2. **D** — knowledge scaffold (then user fills facts).
3. **C + E** — document the edit boundary; add starter decks.
4. **F + plugin alignment** — VC conventions; point the `slides` plugin at the same sources (see the plugin TODO item).

---

## Resolved
- **Entry point:** `AGENTS.md`, agent-agnostic. No `CLAUDE.md`.
- **`docs/DESIGN.md`:** repurposed as the design-craft layer (not retired); tokens by reference to `BRAND.md`.
- **Self-contained delivery:** via a build step (`scripts/bundle.mjs` → `dist/`), keeping source decks thin. Source = authoring; dist = sharing.
- **Bundler defaults:** keep the editor in the output; assume internet (CDN libs + fonts stay as links). `--no-edit` = view-only; `--offline` = inline libs + fonts. (Implemented in B.)
- **`dist/` in git:** gitignored, treated as ephemeral build output.
- **Upstream artifacts:** archived under `reference/` (`deck.html`, `deck-craft/solid.html`, `landing.html`, `DESIGN-upstream.md`). Not used; do not edit.
- **`knowledge/` depth (when D runs):** empty fill-in templates only — no pre-filled facts, to avoid fabrication risk.

## Open decisions for the user
- **Starter decks (E):** resolved — shipped Blank Ingrid, Market update, and Pitch. (Board update not built; add later if wanted.)
- **`knowledge/` facts (D):** the scaffold is empty by design — the user fills in real Ingrid facts before agents can anchor copy to them.
