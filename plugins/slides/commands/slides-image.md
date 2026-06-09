---
description: Add an image slide to an existing deck. Finds images via the Heyra MCP server and generates the right component.
---

# /slides-image

Add an image-powered slide to your current deck.

## Usage

- `/slides-image "a dramatic hero shot of abstract architecture"`
- `/slides-image split "team working together" --reverse`
- `/slides-image caption "product screenshot"`

## What the command does

1. Takes the user's image description
2. Uses the `img` MCP server to search for matching royalty-free images
3. Presents the top results for the user to pick from
4. Generates the appropriate image slide component using the selected image URL

## Component selection

The command auto-detects the best image component, or the user can specify:

| Keyword | Component | Use case |
|---------|-----------|----------|
| `hero` | Hero image slide (27) | Full-bleed dramatic moment |
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
- The MCP server returns semantic matches. Describe the mood, not just the subject
- For the best results, search for one concept at a time
