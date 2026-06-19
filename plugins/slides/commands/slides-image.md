---
description: Add an image slide to an existing deck. Finds images via the configured image server or Unsplash fallback.
---

# /slides-image

Add an image-powered slide to your current deck.

## Usage

- `/slides-image "a dramatic hero shot of abstract architecture"`
- `/slides-image split "team working together" --reverse`
- `/slides-image caption "product screenshot"`

## What the command does

1. Takes the user's image description
2. Finds matching images (via MCP server or Unsplash fallback)
3. Presents the top results for the user to pick from
4. Generates the appropriate image slide component using the selected image URL

## How to find images

### Option A: Configured image MCP server (preferred)

If an `img` MCP server is configured in `.mcp.json`, use it. The expected API shape:

```
GET {base_url}/api/search?q={query}&limit=6
```

Response:

```json
{
  "query": "abstract architecture",
  "results": [
    {
      "id": "abc123",
      "filename": "IMG212.png",
      "image_url": "https://your-cdn.example.com/images/IMG212.png",
      "thumb_url": "https://your-cdn.example.com/thumbs/IMG212.webp",
      "score": 0.32
    }
  ],
  "total": 6
}
```

### Option B: Unsplash fallback

If no image MCP server is configured, use Unsplash. Search the web for `unsplash {description}` and use image URLs in this format:

```
https://images.unsplash.com/photo-{id}?w={width}&q=80
```

Widths to use:
- Hero/caption/collage: `w=1200`
- Split/cards/grid: `w=800`
- Thumbnails: `w=400`

Unsplash images are free to use. No attribution required in slide decks.

## Component selection

The command auto-detects the best image component, or the user can specify:

| Keyword | Component | Use case |
|---------|-----------|----------|
| `hero` | Hero image slide (27) | Cinematic framed moment |
| `split` | Split slide (26) | Text + image side by side |
| `cards` | Image card row (28) | Three visual items |
| `caption` | Caption slide (29) | Single image with annotation |
| `quote` | Image + quote (30) | Portrait with testimonial |
| `grid` | Photo grid (31) | Four related images |
| `collage` | Collage slide (12) | Full-bleed, no text |

## Options

- `--reverse`: Flip the image to the opposite side (for split and quote components)
- `--dark`: Use dark slide variant where available

## Tips

- Be descriptive with your image search. "abstract minimal architecture" works better than "building"
- Describe the mood, not just the subject
- For the best results, search for one concept at a time
