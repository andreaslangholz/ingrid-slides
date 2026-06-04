---
description: Generate a complete slide deck from a description. Auto-detects the best storytelling format (talk, pitch, sales, board, product launch) and produces a single self-contained HTML file.
---

# /slides

Generate a complete presentation deck from a description.

## Usage

- `/slides` — then describe your presentation in the follow-up
- `/slides "a 20-minute conference talk about AI-assisted development"`
- `/slides --format sequoia "our Series A pitch for a developer tools company"`

## What the command does

Runs the `generate-deck` skill end-to-end:

1. Read the user's description and detect the best storytelling format
2. Load the corresponding storytelling guide from `docs/`
3. Draft a slide-by-slide outline (titles, component types, beats)
4. Present the outline for approval
5. Generate the full HTML deck using the component reference and design tokens
6. Output a single `deck.html` file

## Format detection

The skill auto-detects format from context. Override with `--format`:

| Flag | Format | Guide |
|------|--------|-------|
| `--format talk` | TED Talk / six-beat | `docs/STORYTELLING.md` |
| `--format sequoia` | Sequoia pitch deck | `docs/STORYTELLING-sequoia.md` |
| `--format mbb` | McKinsey SCR / pyramid | `docs/STORYTELLING-mbb.md` |
| `--format launch` | Product launch (Apple-style) | `docs/STORYTELLING-product-launch.md` |
| `--format board` | Board / strategy update | `docs/STORYTELLING-board.md` |
| `--format sales` | Sales deck | `docs/STORYTELLING-sales.md` |

## What you get back

- A complete, self-contained HTML file
- Inline CSS with design tokens
- Inline JS for navigation, progress bar, and PDF export
- Keyboard and touch navigation built in

## Tips

- Be specific about your audience, duration, and goal
- Mention the format if you have a preference: "pitch deck", "conference talk", "sales presentation"
- The deck uses the Default theme. Use `/slides-theme` to switch after generation.
