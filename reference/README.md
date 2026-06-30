# Reference (upstream fork artifacts)

These files come from the upstream framework this repo was forked from
([noskillish/slides](https://github.com/noskillish/slides)). They are **not Ingrid decks**
and are **not** part of the Ingrid presentation system — they use the upstream
tokens (Inter, `#f5f5f3`, `.slide-inner`) and single-file structure, not the Ingrid
brand or the shared `engine/`.

They are kept here only as reference for the original layouts and components. Do not
edit them, link to them, or generate from them. For real work use the Ingrid system:

- **Build decks from:** `ingrid_examples.html`, `ingrid_library.html` (thin shells on `engine/`)
- **Brand:** `brand/ingrid/BRAND.md`
- **Components:** `docs/COMPONENTS.md` (generated from `templates/templates.js`)
- **Agent entry point:** `AGENTS.md`

| File | What it was |
|---|---|
| `deck.html` | Upstream single-file demo deck |
| `deck-craft.html` | Upstream "craft" theme variant |
| `deck-solid.html` | Upstream "solid" theme variant |
| `landing.html` | Upstream marketing/landing page |

`DESIGN-upstream.md` (if present) is the original upstream `docs/DESIGN.md`, kept for
reference after `docs/DESIGN.md` was repurposed as the Ingrid design-craft layer.
