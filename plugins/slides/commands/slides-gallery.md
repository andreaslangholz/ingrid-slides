---
description: Browse and preview images for use in slides. Uses the configured image server or Unsplash.
---

# /slides-gallery

Search and browse images for your deck.

## Usage

- `/slides-gallery "minimal architecture"`
- `/slides-gallery random`

## What the command does

1. Searches for images based on the user's description
2. Displays results with previews and URLs
3. Lets the user pick images to use in their deck

## Image sources

### Option A: Configured image MCP server

If an `img` MCP server is configured in `.mcp.json`:

| Mode | Endpoint | Description |
|------|----------|-------------|
| `"query"` | `GET /api/search?q={query}&limit=6` | Semantic search by description |
| `random` | `GET /api/random?limit=6` | Random selection |

All endpoints return a list of image objects with `image_url`, `thumb_url`, `filename`, and `score`.

### Option B: Unsplash fallback

If no image server is configured, search the web for `unsplash {query}` and present the results. Use image URLs in this format:

```
https://images.unsplash.com/photo-{id}?w=800&q=80
```

## Building your own image server

You can build a simple image search API and configure it in `.mcp.json`:

```json
{
  "mcpServers": {
    "img": {
      "type": "http",
      "url": "https://your-server.example.com/mcp"
    }
  }
}
```

The server should expose a `/api/search` endpoint that accepts a `q` query parameter and returns results with `image_url` and `score` fields. A CLIP-based embedding search over your own image library works well.

## Tips

- Queries work best when descriptive. "warm sunset over water" finds better results than "sunset"
- Use this to explore before building a deck, or to find replacement images for specific slides
