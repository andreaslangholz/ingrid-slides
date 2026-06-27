# TODO

## In progress

- [ ] **Complete Ingrid MCP integration** — blocked on platform team
  - Get real `env` and `namespace` values (currently placeholders in `.env.example`)
  - Copy `.env.example` → `.env.local` and fill in all four vars
  - Test auth: `source .env.local && source scripts/ingrid-auth.sh`
  - Verify Ingrid tools appear in Claude Code (`site-config__*`, `analytics-mcp__*`)
  - Test a live data pull → write to `data/` CSV → chart slide

## Backlog

- [ ] **Build Ingrid-specific styleguide deck** — `ingrid-styleguide.html` covering colors, typography, logo usage, gradient backgrounds, all components in brand
- [ ] **Design new-presentation starter concept** — template + Claude prompt recipe for starting a new Ingrid deck with live data and visuals
- [ ] **Build object and flowchart visualisation component** — native CSS component (no library) for boxes, labels, and arrows; document in AGENTS.md
- [ ] **Integrate standard Ingrid company slides** — port boilerplate slides from `media/Ingrid.pptx` into reusable HTML templates

## Done

- [x] **Structure Ingrid assets and pictures** — reorganised into `brand/ingrid/` (logos, gradients, photos, video, templates) with consistent naming, duplicates removed, `BRAND.md` index created, `.gitignore` + `AGENTS.md` updated
- [x] **Align brand instructions with the styleguide PDF** — verified colors, gradient stops, typography, photography, iconography, visual system against all 47 pages; generated the two missing Arc marks; fixed swapped/broken logo references and the wrong invert/screen trick in `ingrid.html`
