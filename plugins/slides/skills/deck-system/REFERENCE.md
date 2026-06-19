---
name: deck-system
description: >
  Reference skill for the Slides framework. Loaded by /slides and other commands.
  Contains the full component library, design tokens, theme rules, storytelling routing,
  tone rules, and diversity guidelines. Not a user-facing command on its own.
---

# Slides: Deck Generation Skill

You are generating a slide deck using the Slides framework. This skill gives you everything needed to produce correct, on-brand decks.

## What you produce

A single self-contained HTML file (`deck.html`) with inline CSS and JS. No build step, no dependencies beyond Google Fonts (Inter). Navigate with arrow keys, space, swipe. Export to PDF with `P`.

## Step 0. Use what the user already provided

The user's message, form responses, and attachments are the brief. Extract every detail: topic, format, length, theme, audience, key points.

**Never re-ask for information the user already gave.** If the user filled in a form or wrote a description, that is the brief. Use it. Proceed to Step 1 immediately.

If you truly have zero context about what the deck is about, ask once in plain text. One short question. Then move on.

## Step 1. Choose the storytelling format

Based on the user's description, select the right storytelling format. Read the corresponding file for full structure and guidance.

| Signal in user's description | Format | File (same folder as this skill) |
|------------------------------|--------|-----------------------------------|
| "talk", "conference", "keynote", "audience", "stage" | TED Talk (six-beat) | `STORYTELLING.md` |
| "pitch", "investors", "funding", "raise", "seed", "series" | Sequoia pitch deck | `STORYTELLING-sequoia.md` |
| "strategy", "board", "quarterly", "exec", "leadership" | McKinsey SCR | `STORYTELLING-mbb.md` |
| "launch", "product", "release", "announce", "unveil" | Product launch | `STORYTELLING-product-launch.md` |
| "board update", "status", "review", "KPIs", "OKRs" | Board update | `STORYTELLING-board.md` |
| "sales", "prospect", "customer", "close", "pipeline" | Sales deck | `STORYTELLING-sales.md` |

These files are in the same directory as this SKILL.md. Read them from here.

**Default:** If unclear, use the six-beat TED Talk structure from `STORYTELLING.md`. It adapts to most formats.

## Step 2. Draft the outline

Before writing HTML, produce a slide-by-slide outline:
- Slide number
- Component type (from the reference below)
- Headline text
- Which storytelling beat it belongs to

Share the outline with the user. Get approval before writing HTML.

## Step 3. Write the HTML

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

### 26. Split slide (text + image)

Two-column grid inside `.slide-inner`. Eyebrow + headline above the grid. Add `.split-reverse` to the `.split` div to swap sides.

```html
<section class="slide">
  <div class="slide-inner">
    <div class="eyebrow">Label</div>
    <h2>Headline. <span class="dim">Extension.</span></h2>
    <div class="split">
      <div class="split-text">
        <h3>Sub-headline</h3>
        <p>Description text.</p>
      </div>
      <div class="split-image">
        <img src="image-url" alt="">
      </div>
    </div>
  </div>
</section>
```

### 27. Hero image slide

Rounded 16:9 image frame with gradient overlay and caption. Lives inside `.slide-inner`.

```html
<section class="slide">
  <div class="slide-inner">
    <div class="eyebrow">Label</div>
    <h2>Headline. <span class="dim">Extension.</span></h2>
    <div class="hero-frame">
      <img src="image-url" alt="">
      <div class="hero-frame-overlay"></div>
      <div class="hero-frame-caption">
        <h3>Caption headline</h3>
        <p>One line of context.</p>
      </div>
    </div>
  </div>
</section>
```

### 28. Image card row

Three 4:3 image cards with title and description below each.

```html
<div class="image-cards">
  <div class="image-card">
    <div class="image-card-frame"><img src="url" alt=""></div>
    <div class="image-card-body">
      <div class="image-card-title">Title</div>
      <div class="image-card-desc">Description.</div>
    </div>
  </div>
</div>
```

### 29. Caption slide

Large image with an annotation bar below.

```html
<section class="slide caption-slide">
  <div class="caption-frame"><img src="url" alt=""></div>
  <div class="caption-bar">
    <div class="caption-title">Title</div>
    <div class="caption-text">Context text.</div>
  </div>
</section>
```

### 30. Image + quote

Portrait image paired with a pull quote. Add `.image-quote-reverse` to swap sides.

```html
<div class="image-quote">
  <div class="image-quote-frame"><img src="url" alt=""></div>
  <div class="image-quote-content">
    <div class="image-quote-text">"Quote text."</div>
    <div class="image-quote-attr">Speaker, role</div>
  </div>
</div>
```

### 31. Photo grid

2×2 mosaic with gradient-overlay labels on each cell.

```html
<div class="photo-grid">
  <div class="photo-grid-cell">
    <img src="url" alt="">
    <div class="photo-grid-label">Label</div>
  </div>
</div>
```

---

## Themes

Four options are available. The first three are predefined templates. The fourth is a custom theme the user describes.

| Theme | Source | Character |
|-------|--------|-----------|
| Default | `deck.html` | Warm off-white, minimal, editorial |
| Craft | `deck-craft.html` | Richer textures, art overlays, more visual weight |
| Solid | `deck-solid.html` | Glass morphism, dark background, frosted surfaces |
| Custom | User description | User defines the visual identity |

### Predefined themes (Default, Craft, Solid)

**CRITICAL: Do not invent your own theme CSS.** When using a predefined theme:

1. **Read the actual template file** from the repo root (two levels up from this skill: `../../deck.html`, `../../deck-craft.html`, or `../../deck-solid.html`). If those paths fail, search the repo for `deck.html`, `deck-craft.html`, or `deck-solid.html`.
2. **Copy the entire `<style>` block verbatim.** Every CSS variable, every component style, every media query. Do not modify it. Do not improvise colors, gradients, or effects.
3. **Copy the entire `<script>` block verbatim.** Navigation, progress bar, PDF export. Do not rewrite it.
4. **Only write the slide content.** Replace the `<section class="slide">` elements with the new deck content. Keep the `<head>`, `<style>`, `<script>`, `.progress`, and `.deck` wrapper structure identical to the template.

The template files are the source of truth. If you cannot read them, ask the user to provide the template file. Never generate CSS from memory or from the token table above.

### Custom theme

When the user describes a custom style (e.g. "dark blue with orange accents", "brutalist black and white", "pastel and playful"):

1. **Start from `deck.html` as the structural base.** Read it, copy its `<script>` block verbatim.
2. **Rewrite the `<style>` block** to match the user's description. Follow these rules:
   - Keep every CSS selector and class name identical to the Default theme. Components must still work.
   - Change only visual properties: colors, backgrounds, gradients, shadows, border styles, border-radius, font weights.
   - Preserve all layout properties: padding, margin, grid, flexbox, clamp values, media queries.
   - Define a cohesive palette: background, surface, ink, border, dim text, accent. At minimum 6 tokens.
   - Keep the Inter font unless the user requests a different one.
3. **Show the user the palette** before writing HTML. List the key colors and ask for approval.
4. **Apply the same headline pattern** (bold + dim) and all component HTML structures.

Default to the Default theme (`deck.html`) unless the user specifies otherwise.

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
2. **No em-dashes.** Anywhere. Use periods, commas, or colons instead.
3. **No contrast framing. Zero tolerance.** This is the most common mistake. Scan every sentence you write. If it contains any of these patterns, rewrite it:
   - "X, not Y." → Say what X is. Drop the Y.
   - "Not X. Y." → Say what Y is. Drop the negation.
   - "I thought X. Actually Y." → Say what Y is directly.
   - "X is the work, not the leftover." → "X is the work."
   - "That is not a cat skill. That is the whole assignment." → "That is the whole assignment."
   - "I thought I was adopting a cat. Molly was adopting a project." → "Molly adopted a project."
   - Any sentence that defines something by what it is NOT is contrast framing. Delete the negative half. Keep the positive claim.
4. **No fluff.** If a sentence does not add information, delete it.
5. **Specific numbers.** "7x" beats "huge gains."
6. **Headlines are statements.** Exception: Q&A rows.
7. **Use names.** Say the product or feature name instead of "it."
8. **Pick one term and stick with it.** Do not paraphrase your own product.
9. **Self-check before output.** Read every slide. If any sentence uses "not", "instead of", "rather than", or "but" to set up a contrast between what something ISN'T and what it IS, rewrite it. Keep only the positive claim.

---

## Component diversity

Use the full component library. Do not default to the same five component types.

- For decks over 10 slides: use at least 5 different component types.
- For decks over 20 slides: use at least 8 different component types.
- Every deck should have at least one visual-heavy slide (Collage, Art overlay, Product slide, Hero image, or Split slide).
- Before finalizing, check: did you use any of these components? Timeline, Product slide, JEDUF, Quote pair, Spec block, Stack grid, Art overlay, Testimonial grid, Feature card row, Update row, Code slide, Logo bar, Logo grid, Step stack, Collage slide, Split slide, Hero image, Image card row, Caption slide, Image + quote, Photo grid.
- If a beat would benefit from a component that does not exist yet, suggest it. Describe what it would look like and ask the user: "This slide would work better with a [description]. Want me to build it?" If yes, follow the freestyle rules to create it on-token before continuing.

---

## Images

Images can come from three sources:

1. **User-provided files:** embed as a base64 data URI directly in the `<img>` tag. Use the format: `<img src="data:image/jpeg;base64,..." alt="description">`. This keeps the deck self-contained in a single HTML file. Do NOT write placeholder text like "save the photo as X.jpg". If you cannot access the image data, use a CSS placeholder (a colored `div` with the same dimensions) and tell the user: "I could not embed the photo. Drop the image file next to deck.html and update the `src` attribute."
2. **User-provided URLs:** use the URL directly in the `src` attribute.
3. **Image search:** if an `img` MCP server is configured (`.mcp.json`), use it to search for images by description. If no MCP server is configured, search the web for Unsplash images and use their URLs directly (`https://images.unsplash.com/photo-{id}?w=800&q=80`).

Use the image components (26–31) to integrate images into decks:

- **Split slide (26):** Feature highlight with explanation alongside an image.
- **Hero image (27):** Dramatic full-bleed visual moment.
- **Image cards (28):** Three visual items with descriptions.
- **Caption slide (29):** Single showcase image with annotation.
- **Image + quote (30):** Testimonial with portrait.
- **Photo grid (31):** Four related images in a 2×2 mosaic.

---

## Constraints

- **Max 1 dark callout** per deck.
- **Max 2–3 dark slides** per deck.
- Quote slides for openings, transitions, and mic-drops only.
- Every slide wraps content in `<div class="slide-inner">` inside `<section class="slide">`.
- First slide gets class `active`: `<section class="slide active">`.
- The JS handles navigation, counter, and progress bar automatically.
