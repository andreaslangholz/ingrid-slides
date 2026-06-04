---
description: Generate a complete slide deck from a description. Auto-detects the best storytelling format (talk, pitch, sales, board, product launch) and produces a single self-contained HTML file.
---

# /slides

Generate a complete presentation deck from a description.

## Usage

- `/slides`, then describe your presentation in the follow-up
- `/slides "a 20-minute conference talk about AI-assisted development"`
- `/slides --format sequoia "our Series A pitch for a developer tools company"`

## What the command does

Runs the `deck-system` skill end-to-end:

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
- CSS and JS copied verbatim from the template file
- Keyboard and touch navigation built in

## How themes work

For predefined themes (default, craft, solid), the skill reads the actual template file and copies its `<style>` and `<script>` blocks verbatim. Only the slide content is generated.

For custom themes, the user describes the visual style in plain language (e.g. "dark blue with orange accents", "brutalist black and white"). The skill starts from the Default template structure, rewrites the CSS to match the description, and shows the palette for approval before generating slides.

## Tips

- Be specific about your audience, duration, and goal
- Mention the format if you have a preference: "pitch deck", "conference talk", "sales presentation"
- Mention the theme if you want one: "use the solid theme", "craft theme", or describe your own: "warm earth tones with terracotta accents". Default is the Default theme.
