# Institutional knowledge (quality 3)

This folder is the single source of truth for **what is true about Ingrid**. Every factual
claim an agent puts on a slide — numbers, names, metrics, quotes, dates, product wording —
must trace back to a fact here, to the user, or to the `ingrid` MCP server. **Never invent
Ingrid facts.** (See the rule in `AGENTS.md`.)

These files ship as **empty fill-in templates** on purpose. A blank with a `TODO (user)`
marker is correct; a plausible-sounding guess is a bug. Fill each section with real,
verifiable wording, and leave `TODO (user)` wherever you don't yet have the fact.

| File | Holds |
|---|---|
| `COMPANY.md` | Who Ingrid is — mission, what it does, the basics |
| `MESSAGING.md` | Approved wording — tagline, value props, boilerplate, tone |
| `PRODUCTS.md` | Products & features by name — what each does |
| `MARKET.md` | Market context — segments, competitors, trends, sizing |
| `PROOF.md` | Evidence — customers, metrics, case studies, quotes |
| `GLOSSARY.md` | Terms, acronyms, and the canonical name for each thing |

**For agents:** read the relevant file(s) before writing any factual copy. If a fact you
need isn't here, ask the user or pull it from the `ingrid` MCP server — then add it here so
the next deck inherits it. Use a marked placeholder (`[metric]`, `Add name · Role`) on the
slide until you have the real value.

**For humans:** treat this as the company's deck-facing fact sheet. Anything you fill in
here becomes reusable across every deck. Brand *tokens* (colors, type, logos) live in
`brand/ingrid/BRAND.md`, not here — this folder is facts and words, not visual identity.
