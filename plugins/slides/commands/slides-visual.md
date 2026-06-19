---
description: Generate a visually-rich slide deck that automatically sources images for every visual beat.
---

# /slides-visual

Generate a complete slide deck with images sourced automatically.

## Usage

- `/slides-visual "a pitch deck for our sustainable fashion brand"`
- `/slides-visual --format launch "introducing our new developer API"`

## What the command does

1. Runs the full `/slides` workflow (outline, approval, generation)
2. For every slide that benefits from an image, finds a matching photo (via MCP server or Unsplash)
3. Uses the image components (split, hero, image cards, caption, photo grid) alongside standard text components
4. Produces a visually-rich deck where at least 30% of slides include real images

## How to find images

### Option A: Configured image MCP server

If an `img` MCP server is configured in `.mcp.json`, call its search endpoint:

```
GET {base_url}/api/search?q={description}&limit=3
```

Pick the highest-scoring result and use its `image_url` in the slide component.

### Option B: Unsplash fallback

If no image server is configured, search the web for `unsplash {description}` and use the image URL directly:

```
https://images.unsplash.com/photo-{id}?w=1200&q=80
```

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
- Unsplash has millions of images. Be specific with descriptions for best results.
