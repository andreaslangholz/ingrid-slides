---
description: Browse and preview images from the Heyra MCP server. Search, filter, and save URLs for use in slides.
---

# /slides-gallery

Search and browse the Heyra image library.

## Usage

- `/slides-gallery "minimal architecture"`
- `/slides-gallery random`
- `/slides-gallery recent`

## What the command does

1. Connects to the `img` MCP server
2. Runs a semantic search (or fetches random/recent images)
3. Displays results with thumbnails, IDs, and relevance scores
4. Lets the user pick images to use in their deck

## Search modes

| Mode | Description |
|------|-------------|
| `"query"` | Semantic search by description |
| `random` | Random selection from the index |
| `recent` | Recently indexed images |

## Tips

- Queries are semantic. "warm sunset over water" finds relevant images even if titles differ
- Use this to explore before building a deck, or to find replacement images for specific slides
- Image URLs from results can be used directly in any image component's `src` attribute
