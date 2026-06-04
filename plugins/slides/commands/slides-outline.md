---
description: Generate a slide-by-slide outline without writing HTML. Fast iteration on structure, beats, and component types before committing to code.
---

# /slides-outline

Draft the structure of a deck before writing any HTML.

## Usage

- `/slides-outline "a 15-minute talk about why we rebuilt our data pipeline"`
- `/slides-outline --format sequoia "pitch for a developer productivity tool"`
- `/slides-outline` — then describe in the follow-up

## What the command does

1. Read the user's description and detect the best storytelling format
2. Generate an outline as a markdown table:

```
| # | Beat | Component | Headline | Notes |
|---|------|-----------|----------|-------|
| 1 | Open | Quote slide | "We threw away six months of work." | Hook — surprise |
| 2 | Act 1 | Eyebrow + headline | The old pipeline. | Status quo |
| 3 | Act 1 | Two-column | Before vs. after. | Pain points |
| ... | | | | |
```

3. Present the outline for feedback
4. Iterate until the user approves

## What you get back

- A numbered slide list with storytelling beats
- Component type recommendations
- Headline drafts
- Estimated time allocation per section

## Tips

- Use this before `/slides` to iterate on structure quickly
- Once approved, run `/slides` to generate the full HTML from the outline
- Specify format with `--format` if you know what you want (talk, sequoia, mbb, launch, board, sales)
