---
description: Generate a Claus-style deck. Full-bleed image slides with massive uppercase headlines and extreme buzzwords. Use when someone says "claus", "buzzword deck", "hype deck", or "big headlines".
---

# /slides-claus

Generate a Claus-style deck. Maximum impact. Minimum words. Every slide is an image.

## Usage

- `/slides-claus "our new product"`
- `/slides-claus "quarterly results"`
- `/slides-claus "why we're hiring"`

## What the command does

1. Use the user's description as the brief. Do not re-ask for information already given.
2. Load the Claus storytelling guide from `STORYTELLING-claus.md` in the `deck-system` skill folder.
3. Ask the user to paste or upload images (at least 15).
4. Generate the full HTML deck using the Default theme as base, with the Claus CSS overrides.
5. Output a single HTML file.
