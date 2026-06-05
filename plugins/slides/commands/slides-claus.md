---
description: Generate a slide deck in the style of Claus. Every slide is a full-bleed image with a BIG BOLD HEADLINE and extreme buzzwords. No subtlety. No nuance. Pure energy.
---

# /slides-claus

Generate a Claus-style deck. Maximum impact. Minimum words. Every slide is an image.

## Usage

- `/slides-claus "our new product"`
- `/slides-claus "quarterly results"`
- `/slides-claus "why we're hiring"`

## Rules (follow all of them)

1. **Every slide is a full-bleed image slide.** Use the collage slide structure with a headline overlay. No text-only slides. Every single slide has an image background.
2. **Ask the user to paste images.** Before generating, ask: "Paste or upload the images you want to use. I need at least 15." If the user provides fewer, reuse them across slides. If the user provides none, use solid color backgrounds with subtle gradients as placeholders.
3. **One headline per slide, overlaid on the image.** Position it bottom-left with a dark scrim behind it for readability.
4. **Headlines are MASSIVE.** Use `font-size: clamp(3.5rem, 8vw, 7rem)` and `font-weight: 700`.
5. **All caps.** Every headline is `text-transform: uppercase`.
6. **Extreme buzzwords.** Every headline must contain at least one of: DISRUPT, SCALE, LEVERAGE, SYNERGY, PARADIGM, MOONSHOT, 10X, EXPONENTIAL, GAME-CHANGER, NORTH STAR, MOVE THE NEEDLE, UNLOCK, SUPERCHARGE, TURBOCHARGE, DOMINATE, CRUSH IT, NEXT-LEVEL, WORLD-CLASS, BEST-IN-CLASS, MISSION-CRITICAL, TRANSFORMATIVE, REVOLUTIONARY, GROUNDBREAKING, BLEEDING-EDGE, HYPER-GROWTH, FLYWHEEL, DEEP DIVE, DOUBLE DOWN, LEAN IN.
7. **Short.** Max 6 words per headline. If you can say it in 3, use 3.
8. **No dim spans.** Full intensity on every word. No fading. No subtlety.
9. **15 slides minimum.** More is more.
10. **End with a slide that just says "QUESTIONS?" in the biggest font you can set.**
11. **Add a custom style block** for the image slides:

```css
.claus-slide {
  position: relative;
  display: flex !important;
  align-items: flex-end !important;
  justify-content: flex-start !important;
  padding: 0 !important;
}
.claus-slide img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.claus-slide::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 60%);
}
.claus-slide h1 {
  position: relative;
  z-index: 1;
  font-size: clamp(3.5rem, 8vw, 7rem) !important;
  font-weight: 700 !important;
  text-transform: uppercase !important;
  letter-spacing: 0.03em !important;
  line-height: 1.1 !important;
  color: #fff !important;
  padding: 3rem 4rem !important;
  max-width: 80%;
}
```

## Slide structure

```html
<section class="slide claus-slide">
  <img src="data:image/jpeg;base64,..." alt="">
  <h1>DISRUPT EVERYTHING</h1>
</section>
```

## Theme

Use the Default theme (`deck.html`) as the base. Read it from the `deck-system` skill folder. Copy the style and script blocks. Then add the override CSS above inside the existing `<style>` block.

## Tone

Imagine a management consultant who just discovered energy drinks. Every slide should feel like it was written by someone who uses "pivot" as a verb in casual conversation. No irony. Full commitment.
