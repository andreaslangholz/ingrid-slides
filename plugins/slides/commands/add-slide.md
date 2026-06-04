---
description: Add one or more slides to an existing deck. Respects the current theme, storytelling arc, and component style.
---

# /add-slide

Add slides to an existing deck without regenerating the whole thing.

## Usage

- `/add-slide "a stat grid after slide 8 showing our key metrics"`
- `/add-slide "a dark quote slide before the closing that says 'The question was never if. It was when.'"`
- `/add-slide "two-column comparison between the old and new workflow after the intro"`

## What the command does

1. Read the existing deck to understand theme, structure, and storytelling arc
2. Determine the right component type for the requested content
3. Generate the new slide HTML using the same design tokens and patterns
4. Insert at the specified position (or suggest the best position if not specified)
5. Update nothing else — the JS counter and progress bar adjust automatically

## Tips

- Reference slides by number: "after slide 8"
- Reference slides by content: "after the team slide"
- Reference storytelling beats: "in the evidence section"
- Specify the component if you know it: "a dot-flow slide", "a product slide"
- If you don't specify a position, the command suggests one based on the storytelling arc
