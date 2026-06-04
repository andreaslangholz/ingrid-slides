---
name: generate-deck
description: >
  Generate, extend, and manage HTML slide decks using the Slides framework.
  Use when the user wants to create a presentation, build a slide deck, make slides,
  generate a pitch deck, prepare a talk, create a keynote, or produce any kind of
  presentation from a description. Also triggers on: "build me a deck", "slide deck",
  "presentation about", "pitch for investors", "conference talk", "sales deck",
  "board presentation", "strategy deck", "product launch deck".
  Produces a single self-contained HTML file with 25+ components, inline CSS/JS,
  and a professional design system. No build step, no dependencies.
---

# Slides — Deck Generation Skill

You are generating a slide deck using the Slides framework. This skill gives you everything needed to produce correct, on-brand decks.

## What you produce

A single self-contained HTML file (`deck.html`) with inline CSS and JS. No build step, no dependencies beyond Google Fonts (Inter). Navigate with arrow keys, space, swipe. Export to PDF with `P`.

## Step 1 — Choose the storytelling format

Based on the user's description, select the right storytelling format. Read the corresponding file for full structure and guidance.

| Signal in user's description | Format | File |
|------------------------------|--------|------|
| "talk", "conference", "keynote", "audience", "stage" | TED Talk (six-beat) | `docs/STORYTELLING.md` |
| "pitch", "investors", "funding", "raise", "seed", "series" | Sequoia pitch deck | `docs/STORYTELLING-sequoia.md` |
| "strategy", "board", "quarterly", "exec", "leadership" | McKinsey SCR | `docs/STORYTELLING-mbb.md` |
| "launch", "product", "release", "announce", "unveil" | Product launch | `docs/STORYTELLING-product-launch.md` |
| "board update", "status", "review", "KPIs", "OKRs" | Board update | `docs/STORYTELLING-board.md` |
| "sales", "prospect", "customer", "close", "pipeline" | Sales deck | `docs/STORYTELLING-sales.md` |

**Default:** If unclear, use the six-beat TED Talk structure from `docs/STORYTELLING.md`. It adapts to most formats.

## Step 2 — Draft the outline

Before writing HTML, produce a slide-by-slide outline:
- Slide number
- Component type (from the reference below)
- Headline text
- Which storytelling beat it belongs to

Share the outline with the user. Get approval before writing HTML.

## Step 3 — Write the HTML

Use the component reference below. Copy the exact HTML structure. Change only the text content. Stay on-token.

---

## Design tokens

### Colors

| Token | Hex | Use |
|-------|-----|-----|
| Background | `#f5f5f3` | Page/slide background |
| Surface | `#fafaf8` | Card backgrounds |
| Surface (white) | `#ffffff` | Cards that need more contrast |
| Ink / Hero | `#1a1a1a` | Text primary, dark slides |
| Border soft | `#e0e0db` | Default borders |
| Border medium | `#d5d5d0` | Emphasized borders |
| Pill background | `#eeeee9` | Context pills |
| Text dim | `#a0a09a` | Subtitles, body copy |
| Text very dim | `#b5b5b0` | Dim spans in headlines, meta |
| Text faint | `#c5c5c0` | Labels, very low priority text |
| On-dark text | `#f5f5f3` | Primary text on dark backgrounds |
| On-dark dim | `#ccc` | Body text on dark backgrounds |
| On-dark very dim | `#888` | Labels on dark backgrounds |

### Typography

- **Font:** Inter (weights 300, 400, 500, 600)
- **H1 display:** `clamp(2.5rem, 6vw, 5rem)`, weight 500, tracking `-0.035em`
- **H2 section:** `clamp(1.75rem, 3.5vw, 2.6rem)`, weight 500, tracking `-0.025em`
- **H3 column:** ~1rem, weight 500
- **Body/subtitle:** 0.85–1rem, weight 400, line-height 1.5–1.6
- **Eyebrow:** 0.65–0.75rem, uppercase, weight 500, tracking `0.08–0.1em`, color `#a0a09a`

### Spacing

- Slide padding: `6vh 8vw`
- Max content width: `1100px`
- Card padding: `1rem–1.5rem`
- Border radius: `10px` cards, `4px` small elements
- Section gaps: `2–4rem`

---

## The headline pattern (use everywhere)

Bold anchor + dim extension. This is the visual identity of the system.

```html
<h1>Anchor. <span class="dim">Extension that fades.</span></h1>
```

- First phrase: weight 500, full color
- Second phrase: weight 300, color `#b5b5b0` (or `#888` on dark slides)
- Use on every headline that has the room

---

## Component reference

### 1. Cover slide

```html
<section class="slide active">
  <div class="slide-inner">
    <div class="eyebrow">Conference · Date</div>
    <h1>Your headline.<br><span class="dim">Continuation.</span></h1>
    <div class="meta">Speaker name · 20 minutes</div>
  </div>
</section>
```

### 2. Quote slide

A single bold statement. No subtitle. No supporting text.

```html
<section class="slide quote-slide">
  <div class="slide-inner">
    <h1>A bold statement <span class="dim">that opens the talk.</span></h1>
  </div>
</section>
```

Dark variant: `<section class="slide dark quote-slide">`

### 3. Eyebrow + Headline + Subtitle

The default text slide.

```html
<section class="slide">
  <div class="slide-inner">
    <div class="eyebrow">Section label</div>
    <h1>Headline. <span class="dim">One line that lands.</span></h1>
    <p class="subtitle">One or two sentences of nuance. Keep it short.</p>
  </div>
</section>
```

### 4. Two-column

```html
<div class="two-col">
  <div>
    <div class="eyebrow">The problem</div>
    <h2>What's broken.</h2>
    <p>Description of the pain.</p>
  </div>
  <div>
    <div class="eyebrow">The fix</div>
    <h2>What we built.</h2>
    <p>Description of the solution.</p>
  </div>
</div>
```

### 4b. Step stack (inside two-column)

```html
<div class="col-stack">
  <div class="step">First step</div>
  <div class="step dim">Blocked step</div>
  <div class="step kill">Negative outcome</div>
  <div class="step live">Positive outcome</div>
</div>
```

### 5. Three-column

```html
<div class="three-col" style="margin-top: 2rem;">
  <div><h3>Why</h3><p>The motivation.</p></div>
  <div><h3>How</h3><p>The mechanism.</p></div>
  <div><h3>What</h3><p>The outcome.</p></div>
</div>
```

### 6. Capability list (Q&A rows)

```html
<div class="cap-list" style="margin-top: 2rem;">
  <div class="cap-row">
    <div class="cap-q">Question?</div>
    <div class="cap-a">Clear, specific answer.</div>
  </div>
</div>
```

### 7. Dark callout (one per deck max)

```html
<div class="callout">
  <h3>Why now</h3>
  <p>The moment. <strong>Key insight in bold.</strong> Then context.</p>
</div>
```

### 8. Dot flow (process)

```html
<div class="dot-flow">
  <div class="dot-step"><div class="dot"></div><h4>Step 1</h4><p>Caption</p></div>
  <div class="dot-step"><div class="dot"></div><h4>Step 2</h4><p>Caption</p></div>
</div>
```

### 9. Stack grid

```html
<div class="stack-grid">
  <div class="stack-card">
    <div class="stack-card-label">Category</div>
    <div class="stack-tool"><span class="mark"></span>Tool name</div>
  </div>
</div>
```

### 10. Spec block + context + outputs

```html
<div class="spec-flow">
  <div class="spec-block"><h4>The Input</h4><p>What goes in</p></div>
  <div class="ctx-row">
    <span class="ctx-label">draws from</span>
    <span class="ctx-pill">Source 1</span>
    <span class="ctx-pill">Source 2</span>
  </div>
  <div class="ai-divider">
    <div class="line"></div>
    <span class="ai-pill">Process</span>
    <div class="line"></div>
  </div>
  <div class="outputs-row">
    <div class="output-card"><h5>Output A</h5><p>What it produces.</p></div>
    <div class="output-card"><h5>Output B</h5><p>What it produces.</p></div>
    <div class="output-card"><h5>Output C</h5><p>What it produces.</p></div>
  </div>
</div>
```

### 11. Product slide (showcase)

```html
<div class="product-row">
  <div class="product-meta">
    <div class="product-num">/01</div>
    <div class="product-tag">A short, punchy hook.</div>
    <h3 class="product-headline">One-line description.</h3>
    <p class="product-desc">Two or three sentences. Personal and concrete.</p>
    <div class="product-stat">Build time or metric</div>
  </div>
  <div class="product-name">Name<sup>™</sup></div>
</div>
```

### 12. Collage slide (full media)

```html
<section class="slide collage-slide">
  <div class="collage">
    <img src="media/your-image.png" alt="">
  </div>
</section>
```

### 13. JEDUF three-column comparison

```html
<div class="jeduf">
  <div class="jeduf-col">
    <div class="jeduf-label">Too much</div>
    <div class="jeduf-title">Extreme A</div>
    <div class="jeduf-philosophy">"Philosophy quote."</div>
    <div class="jeduf-step">Step 1</div>
  </div>
  <div class="jeduf-col hero">
    <div class="jeduf-label">Just right</div>
    <div class="jeduf-title">The middle path</div>
    <div class="jeduf-philosophy">"Balanced philosophy."</div>
    <div class="jeduf-step">Step 1</div>
  </div>
  <div class="jeduf-col">
    <div class="jeduf-label">Too little</div>
    <div class="jeduf-title">Extreme B</div>
    <div class="jeduf-philosophy">"Other extreme."</div>
    <div class="jeduf-step">Step 1</div>
  </div>
</div>
```

### 14. Dark slide

```html
<section class="slide dark">
  <div class="slide-inner">
    <div class="eyebrow">Section label</div>
    <h1>The pivot moment. <span class="dim">Lands harder in dark.</span></h1>
    <p class="subtitle">Use sparingly. Two or three per deck max.</p>
  </div>
</section>
```

### 15. Timeline

```html
<div class="timeline">
  <div class="timeline-row">
    <div class="timeline-year">Year 1</div>
    <div class="timeline-track"><div class="timeline-dot"></div><div class="timeline-line"></div></div>
    <div class="timeline-content"><h4>Title</h4><p>Description.</p></div>
  </div>
</div>
```

### 16. Stat grid

```html
<div class="stat-grid">
  <div class="stat-card">
    <div class="stat-label">Metric</div>
    <div class="stat-number">7×</div>
    <div class="stat-desc">What this number means.</div>
  </div>
  <div class="stat-card stat-dark">
    <div class="stat-label">Hero metric</div>
    <div class="stat-number">42</div>
    <div class="stat-desc">The key number, highlighted.</div>
  </div>
</div>
```

### 17. Quote pair

```html
<div class="quote-pair">
  <div class="quote-card">
    <div class="quote-text">"The first perspective."</div>
    <div class="quote-attr">Speaker or label</div>
  </div>
  <div class="quote-card quote-dark">
    <div class="quote-text">"The counterpoint."</div>
    <div class="quote-attr">Speaker or label</div>
  </div>
</div>
```

### 18. Logo grid

```html
<div class="logo-grid">
  <div class="logo-cell">
    <div class="logo-mark"></div>
    <div class="logo-name">Partner name</div>
    <div class="logo-role">Role or team</div>
  </div>
</div>
```

### 19. Code slide

```html
<div class="code-frame">
  <div class="code-frame-header">
    <div class="code-frame-dot"></div>
    <div class="code-frame-dot"></div>
    <div class="code-frame-dot"></div>
    <div class="code-frame-title">filename.ext</div>
  </div>
  <pre><span class="code-comment">// comment</span>
<span class="code-keyword">function</span> <span class="code-string">example</span>() {}</pre>
</div>
```

### 20. Closing / Thanks

```html
<section class="slide">
  <div class="slide-inner">
    <h1 style="font-size: clamp(2.5rem, 5vw, 4rem);">Thanks.</h1>
    <p class="subtitle">Questions?</p>
    <div class="meta">Speaker name · Affiliation</div>
  </div>
</section>
```

### 21. Testimonial grid

```html
<div class="testimonial-grid">
  <div class="testimonial-card">
    <div class="testimonial-quote">"Quote text here."</div>
    <div class="testimonial-author">
      <div class="testimonial-avatar"></div>
      <div>
        <div class="testimonial-name">Name</div>
        <div class="testimonial-title">Role, Company</div>
      </div>
    </div>
  </div>
</div>
```

### 22. Logo bar

```html
<div class="logo-bar">
  <div class="logo-bar-item">Partner A</div>
  <div class="logo-bar-item">Partner B</div>
</div>
```

### 23. Feature card row

```html
<div class="feature-cards">
  <div class="feature-card">
    <div>
      <div class="feature-card-title">Feature name</div>
      <div class="feature-card-desc">Short description.</div>
    </div>
    <div class="feature-card-inner"></div>
  </div>
</div>
```

### 24. Update row (changelog)

```html
<div class="update-row">
  <div class="update-card">
    <div class="update-header">
      <span class="update-badge">3.3</span>
      <span class="update-date">May 7, 2026</span>
    </div>
    <div class="update-title">Feature or fix description</div>
  </div>
</div>
```

### 25. Art overlay

```html
<div class="art-overlay">
  <div class="art-overlay-bg"></div>
  <div class="art-overlay-ui">
    <div class="art-overlay-titlebar">
      <div class="art-overlay-dot"></div>
      <div class="art-overlay-dot"></div>
      <div class="art-overlay-dot"></div>
    </div>
    <div class="art-overlay-content"></div>
  </div>
  <div class="art-overlay-caption">
    <h3>Caption title</h3>
    <p>Caption description.</p>
  </div>
</div>
```

---

## Themes

Three themes are available. Each is a complete HTML file with its own `<style>` block:

| Theme | File | Character |
|-------|------|-----------|
| Default | `deck.html` | Warm off-white, minimal, editorial |
| Craft | `deck-craft.html` | Richer textures, art overlays, more visual weight |
| Solid | `deck-solid.html` | Glass morphism, gradients, modern SaaS aesthetic |

All themes share the same component HTML structure. The difference is in the CSS tokens. When generating a deck, default to the Default theme unless the user specifies otherwise.

---

## Freestyle: new components

You can invent new slide layouts when needed. Rules:

1. **Stay on-token.** Use only the colors, fonts, weights, and spacing from the tokens table.
2. **Use the headline pattern.** Bold-then-dim with `<span class="dim">`.
3. **Match existing craft.** Border radius 10px cards, 4px small elements. Padding 1–1.5rem.
4. **Name the class.** Lowercase, hyphenated: `timeline-row`, `stat-grid`, `quote-pair`.
5. **Keep CSS inline** in the `<style>` block, grouped with a comment.
6. **One new idea per slide.** Pair novel layouts with familiar elements.

---

## Tone rules (follow strictly)

1. **Bold the keyword. Dim the rest.** Every headline.
2. **No em-dashes in body copy.** Use periods or shorter sentences.
3. **No fluff.** If a sentence doesn't add information, delete it.
4. **Specific numbers.** "7×" beats "huge gains."
5. **Headlines are statements, not questions.** Exception: Q&A rows.
6. **Use names, not pronouns.** Say the product/feature name, not "it."
7. **Pick one term and stick with it.** Don't paraphrase your own product.

---

## Constraints

- **Max 1 dark callout** per deck.
- **Max 2–3 dark slides** per deck.
- Quote slides for openings, transitions, and mic-drops only.
- Every slide wraps content in `<div class="slide-inner">` inside `<section class="slide">`.
- First slide gets class `active`: `<section class="slide active">`.
- The JS handles navigation, counter, and progress bar automatically.
