# Storytelling: Claus

The Claus format. Every slide is a full-bleed image with one massive headline. No subtitles. No body text. No nuance. Pure energy.

---

## The structure

There is no structure. There is only impact.

Every slide follows the same pattern: image background, dark gradient scrim, one headline in all caps. The deck moves fast. The audience reads one line, absorbs the image, and you advance.

---

## Slide format

Every slide is an image slide. No exceptions.

- Full-bleed image covering the entire slide
- Dark gradient overlay from bottom to top for text readability
- One headline, bottom-left, all caps, max 6 words
- No eyebrows, no subtitles, no body text, no meta

### HTML structure

With color background:
```html
<section class="slide claus-slide" style="background: linear-gradient(135deg, #1a0a2e 0%, #16213e 100%);">
  <h1>DISRUPT EVERYTHING</h1>
</section>
```

With image (if user provides one later):
```html
<section class="slide claus-slide">
  <img src="image.jpg" alt="">
  <h1>DISRUPT EVERYTHING</h1>
</section>
```

### Required CSS (add to the style block)

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

---

## Beats

The Claus format has no formal beats. But a typical flow looks like this:

| Slide | Purpose | Example |
|-------|---------|---------|
| 1 | Identity | WE ARE [COMPANY] |
| 2-3 | Problem | THE MARKET IS BROKEN |
| 4-6 | Vision | 10X EVERYTHING |
| 7-10 | Proof points | HYPER-GROWTH UNLOCKED |
| 11-13 | Ambition | DOMINATE THE CATEGORY |
| 14 | Call to action | LEAN IN. NOW. |
| 15 | Close | QUESTIONS? |

---

## Headline rules

1. **Max 4 words.** If you can say it in 2, use 2.
2. **All caps.** Always.
3. **Every headline must contain at least one buzzword.** Choose from: DISRUPT, SCALE, LEVERAGE, SYNERGY, PARADIGM, MOONSHOT, 10X, EXPONENTIAL, GAME-CHANGER, NORTH STAR, MOVE THE NEEDLE, UNLOCK, SUPERCHARGE, TURBOCHARGE, DOMINATE, CRUSH IT, NEXT-LEVEL, WORLD-CLASS, BEST-IN-CLASS, MISSION-CRITICAL, TRANSFORMATIVE, REVOLUTIONARY, GROUNDBREAKING, BLEEDING-EDGE, HYPER-GROWTH, FLYWHEEL, DEEP DIVE, DOUBLE DOWN, LEAN IN, MULTI-AWARD WINNING.
4. **No dim spans.** Full intensity on every word.
5. **No punctuation** except question marks on the final slide.

---

## Images

Images cannot be uploaded in this environment. Use bold, full-bleed color backgrounds instead.

- Each slide gets a solid or gradient background that matches the energy of the headline.
- Use dark, saturated colors: deep blacks, midnight blues, blood reds, electric purples, burnt oranges.
- Vary the backgrounds across slides. No two slides should look the same.
- Use CSS gradients directly on the `.claus-slide` element instead of `<img>` tags.
- If the user later provides image files, they can replace the backgrounds with `<img>` tags.

---

## Tone

Imagine a management consultant with raging ADHD who just discovered energy drinks. Attention span of a goldfish. Every slide hits in under 2 seconds or you lost the room. Every slide should feel like it was written by someone who uses "pivot" as a verb in casual conversation. No irony. Full commitment. Move fast. Faster.

---

## Minimum slides

15. More is more.

---

## Component recommendations

Only one component exists in a Claus deck: the `claus-slide`. Do not use any other component type. No two-columns. No stat grids. No timelines. No quote pairs. Just images and headlines.
