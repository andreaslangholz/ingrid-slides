---
description: Generate a visually-rich slide deck that automatically sources images from the Heyra MCP server for every visual beat.
---

# /slides-visual

Generate a complete slide deck with images sourced automatically.

## Usage

- `/slides-visual "a pitch deck for our sustainable fashion brand"`
- `/slides-visual --format launch "introducing our new developer API"`

## What the command does

1. Runs the full `/slides` workflow (outline, approval, generation)
2. For every slide that benefits from an image, searches the `img` MCP server for a matching photo
3. Uses the new image components (split, hero, image cards, caption, photo grid) alongside the standard text components
4. Produces a visually-rich deck where at least 30% of slides include real images

## How it differs from `/slides`

- `/slides` produces text-only decks by default, using collage slides only when the user provides images
- `/slides-visual` proactively searches for images and uses the full image component library

## Format detection

Same as `/slides`. Override with `--format`:

| Flag | Format |
|------|--------|
| `--format talk` | TED Talk / six-beat |
| `--format sequoia` | Sequoia pitch deck |
| `--format launch` | Product launch |
| `--format sales` | Sales deck |

## Tips

- The more specific your topic, the better the image matches
- You can mix `/slides-visual` with `/slides-image` to add or replace specific slides later
- All images are royalty-free from the Heyra index
