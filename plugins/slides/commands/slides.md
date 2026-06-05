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

1. **Use what the user already provided.** The user's message, form responses, and attachments are the brief. Do NOT re-ask for information already given. If topic, format, length, or theme were stated, use them directly. Proceed to the outline.
2. If critical info is missing (you have no idea what the deck is about), ask once. One short question. Then move on.
3. Detect the best storytelling format from context (or use the one the user specified)
4. Load the corresponding storytelling guide (bundled in the `deck-system` skill folder)
5. Draft a slide-by-slide outline (titles, component types, beats)
6. Present the outline for approval
7. Generate the full HTML deck using the component reference and design tokens
8. Output a single `deck.html` file

## Format detection

The skill auto-detects format from context. Override with `--format`:

| Flag | Format |
|------|--------|
| `--format talk` | TED Talk / six-beat |
| `--format sequoia` | Sequoia pitch deck |
| `--format mbb` | McKinsey SCR / pyramid |
| `--format launch` | Product launch (Apple-style) |
| `--format board` | Board / strategy update |
| `--format sales` | Sales deck |
| `--format claus` | Claus (image slides, big headlines, buzzwords) |

The storytelling guides are bundled in the `deck-system` skill folder. The skill handles loading them.

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
