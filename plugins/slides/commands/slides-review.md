---
description: Review an existing slide deck for storytelling structure, design consistency, pacing, and common mistakes. Produces actionable feedback.
---

# /slides-review

Get a structured review of your deck before you present.

## Usage

- `/slides-review` — review the current deck.html
- `/slides-review deck-craft.html` — review a specific file

## What the command does

Reads the deck and evaluates it across six dimensions:

### 1. Storytelling arc
- Does the deck follow a recognizable structure (six-beat, SCR, pitch, etc.)?
- Is there a clear open, turn, evidence section, and close?
- Does it build toward something?

### 2. Pacing
- Are there too many text-heavy slides in a row?
- Are dark slides and quote slides used as punctuation, not decoration?
- Is Act 3 (evidence) roughly 40% of the deck?

### 3. Headline pattern
- Do headlines use bold-then-dim (`<span class="dim">`)?
- Are headlines statements, not questions?
- Are they specific enough?

### 4. Component variety
- Is the deck using the right component for each content type?
- Are there missed opportunities (e.g., a stat grid instead of a text slide)?

### 5. Design rules
- Max 1 dark callout? Max 2–3 dark slides?
- Are eyebrows, spacing, and typography on-token?
- No em-dashes in body copy?

### 6. Tone
- Specific numbers over vague claims?
- Names instead of pronouns?
- No fluff sentences?

## What you get back

A structured report with:
- Overall assessment (strong / needs work / major issues)
- Specific findings per dimension
- Suggested fixes with slide numbers
