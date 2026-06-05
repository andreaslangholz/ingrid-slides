---
description: Generate a Claus Mode deck. Big bold headlines, extreme buzzwords, zero nuance. Every slide is a billboard. Use when the user wants maximum energy and minimum explanation.
---

# /slides-claus

Generate a high-energy deck of nothing but big bold headlines and extreme buzzwords.

## Usage

- `/slides-claus "AI is eating the world"`
- `/slides-claus "our company in 30 seconds"`
- `/slides-claus "why we are winning"`

## What the command does

1. **Use what the user already provided.** Do not re-ask.
2. Load the Claus storytelling guide (`STORYTELLING-claus.md`) from the `deck-system` skill folder.
3. Generate 20-35 slides of pure headline energy. No subtitles. No body text. No complex components.
4. Use the Solid theme by default. Read `deck-solid.html` from the skill folder and copy its style and script blocks verbatim.
5. Every slide is a quote slide. Alternate dark and light. 2-5 words per headline.
6. Last slide is one word.

## Rules

- Maximum 5 words per headline
- All quote slides, no other components (except cover and closing)
- No subtitles, no body text, no eyebrows, no meta
- Extreme confidence. Buzzwords welcome.
- Fast pacing. Each slide lives 20 seconds max.
- End on a single word.

## Example output

Slide 1: EVERYTHING IS A PLATFORM.
Slide 2: WE STOPPED PLANNING.
Slide 3: SPEED IS THE STRATEGY.
...
Slide 25: GO.
