# Storytelling: Claus Mode

The anti-deck. Maximum energy. Zero nuance. Every slide is a headline. Every headline is a statement that hits like a billboard on a highway.

---

## The rules

1. **One headline per slide.** Nothing else. No subtitle, no body text, no eyebrow, no meta. Just the headline.
2. **All caps or display weight.** Every word earns its space. If a word is small, cut it.
3. **Extreme buzzwords.** Disruption. Paradigm shift. Moonshot. Exponential. 10x. Hyperscale. Inevitable. Use them without irony.
4. **No explanation.** The audience fills in the gaps. If they need context, you lost them.
5. **Short slides.** 2 to 5 words per headline. If you wrote 6, delete one.
6. **Speed.** The deck should move fast. 30 slides in 10 minutes. Each slide lives for 20 seconds max.
7. **Repetition is structure.** Repeat a word across three slides. That is your arc.
8. **End on one word.** The last slide is a single word. Period. Mic drop.

---

## The structure

There is no traditional narrative arc. There is a crescendo.

```
Warm-up ──── Build ──── Peak ──── Drop ──── One word
```

| Phase | ~Slides | Purpose |
|-------|---------|---------|
| Warm-up | 3-5 | Set the energy. Short punchy observations. |
| Build | 8-12 | Stack claims. Each one bigger than the last. |
| Peak | 5-8 | The wildest statements. The future. The vision. |
| Drop | 3-5 | Pull back. One honest or human moment. |
| One word | 1 | The final slide. One word. Done. |

---

## Slide construction

Every slide uses the quote slide component (`class="slide quote-slide"`). Dark variant preferred (`class="slide dark quote-slide"`).

```html
<section class="slide dark quote-slide">
  <div class="slide-inner">
    <h1>DISRUPTION IS A FEATURE.</h1>
  </div>
</section>
```

Alternate between dark and light slides for rhythm. Use the dim span sparingly, only to soften one word:

```html
<h1>THE FUTURE IS <span class="dim">ALREADY HERE.</span></h1>
```

---

## Example headlines

- EVERYTHING IS A PLATFORM.
- 10X OR GO HOME.
- WE STOPPED PLANNING.
- SPEED IS THE STRATEGY.
- THE MOAT IS MOMENTUM.
- TALENT WANTS CHAOS.
- BUILD. SHIP. REPEAT.
- ONE WORD: VELOCITY.
- THIS IS INEVITABLE.
- THANK YOU. (just kidding. last slide is one word.)
- GO.

---

## What NOT to do

- Do not add subtitles or body text. Ever.
- Do not use stat grids, timelines, feature cards, or any complex component.
- Do not explain. If a headline needs context, rewrite it until it stands alone.
- Do not use more than 5 words per slide.
- Do not be modest. This format is confidence turned up to 11.

---

## Tone

Write like a founder who just closed a $100M round and has 45 seconds on stage. Every sentence is a tweet. Every slide is a poster. The audience should feel like they just drank four espressos.

---

## Component usage

Use ONLY these components:
- **Quote slide** (dark and light variants): the primary and almost exclusive component
- **Cover slide**: for the opening slide only
- **Closing slide**: single word, centered

Do not use two-column, capability lists, stat grids, timelines, product slides, or any layout component. This format is pure text energy.
