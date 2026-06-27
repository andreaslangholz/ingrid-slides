# Ingrid Capacity — Brand Reference

This file is the single source of truth for all Ingrid brand assets. Read it before touching any Ingrid deck. Do not invent colors, fonts, or logo treatments from memory.

---

## Identity

**Company:** Ingrid Capacity  
**Tagline:** "making the grid intelligent for an electrified future"  
**Category:** Energy tech / smart grid software  
**Website:** ingrid.se

---

## Colors

### Core palette

| Name | Token | Hex | Use |
|---|---|---|---|
| Flux Violet | `--violet` | `#AA73FA` | Primary accent — buttons, dots, highlights, progress bar |
| Current Blue | `--blue` | `#5FA4FA` | Secondary accent |
| Ember Orange | `--orange` | `#F8898C` | Warm accent |
| Solar Yellow | `--yellow` | `#FFCD96` | Warm accent |
| Dark Current Blue | `--dblue` | `#4C92E9` | Gradient stop, active states |
| Dark Ember Orange | `--dorange` | `#EE686C` | Gradient stop, active states |
| Dark Solar Yellow | `--dyellow` | `#E0790D` | Gradient stop, active states |
| Core Black | `--ink` | `#000000` | Body text, headings, dark slide bg |
| Balance White | `--white` | `#ffffff` | Default slide bg, reversed text |

**Color proportion rule:**
- 50% Core & Neutrals (Core Black + Balance White)
- 30% Ingrid Gradient (signature expression)
- 20% Natural Energies (Violet, Blue, Orange, Yellow — used sparingly in data, icons, fine details)

### Digital palette — gray scale (7 stops)

`#000000` → `#3F3F3F` → `#999999` → `#BFBFBF` → `#D8D8D8` → `#F2F2F2` → `#FFFFFF`

| Token | Hex | Use |
|---|---|---|
| `--g4` | `#3F3F3F` | Dark surface text |
| `--g3` | `#999999` | Muted text |
| `--g2b` | `#BFBFBF` | Light muted |
| `--g2` | `#D8D8D8` | Borders |
| `--g1` | `#F2F2F2` | Light surface |

### Digital palette — Flux Violet tint scale

`#AA73FA` → `#B88AFB` → `#C6A2FC` → `#D4B9FD` → `#E3D0FD` → `#F1E8FE` → `#FFFFFF`

Use tints for hover states, backgrounds, disabled states, and subtle brand-tinted surfaces.

### Alert colors (brand-adapted signal colors)

| Purpose | Hex |
|---|---|
| Success (green) | `#4BE696` |
| Error (red) | `#FF6464` |
| Warning (orange) | `#FA9B4D` |
| Caution (yellow) | `#FFE77D` |

Signal colors are adapted to fit the Ingrid palette while ensuring accessibility and instant recognition.

---

## The Ingrid Gradient — "Signature Expression"

**The gradient is stored as a real PNG image, not a CSS gradient.**

### Gradient color stops (Freeform Gradient, 4 stops)

The background gradient uses the DARK variant colors at three stops:

| Color | Hex | Spread | Position |
|---|---|---|---|
| Flux Violet | `#AA73FA` | 40% | Center-left |
| Dark Current Blue | `#4C92E9` | 0% | Upper right |
| Dark Ember Orange | `#EE686C` | 0% | Lower left |
| Dark Solar Yellow | `#E0790D` | 0% | Lower right |

Result: violet–blue in the upper half, warm orange–gold in the lower half, with the violet dominating the center.

### PNG files

| File | Description | Use when |
|---|---|---|
| `gradients/pastel.png` | Bare gradient texture, no text or logo | Slide background, panel fill |
| `gradients/dark.png` | Dark moody variant, black base + purple/orange glows | Dark accent sections |
| `gradients/cover-centered.png` | Gradient + centered Ingrid logo + tagline | Official cover slide as-is |
| `gradients/cover-topleft.png` | Flipped gradient + logo top-left + tagline | Alternative cover, logo as header |

**CSS usage:**
```css
background: url('brand/ingrid/gradients/pastel.png') center/cover no-repeat;
```

**Do NOT try to recreate the gradient with CSS radial-gradients** — use the PNG directly. The progress bar uses a simplified CSS approximation only because it's 2px tall:
```css
linear-gradient(135deg, #6CA6F3, #AE76F2, #D981B7)
```

### Gradient usage rules (from visual system)
- Use selectively: reserve gradient graphics for key communications — hero ads, campaign visuals, cover applications
- Keep everyday usage minimal and intentional
- Allow gradients to interact with the grid or key visual: emerging from foreground or background to add depth, rather than sitting as flat overlays
- Can be masked into any shape, feathered at edges, or morphed organically into soft blobs

---

## Typography

### Primary typeface: Plus Jakarta Sans

Used for all display, headline, and body text.

Available weights: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700), ExtraBold (800)

**Type hierarchy:**

| Role | Font | Weight | Size | Leading | Tracking | Case |
|---|---|---|---|---|---|---|
| Headlines / Marketing callouts | Plus Jakarta Sans | Medium (500) | ≥4× body size | 100% | 0 | **lowercase** |
| Sub-headers | Plus Jakarta Sans | Bold (700) | 100% body size | 110% | 0 | ALL CAPS |
| Body copy | Plus Jakarta Sans Light | Light (300) | <20pt | 120% | 0 | Sentence case |
| Captions / eyebrows | Fira Code | any | 40% body size | 140% | 0 | ALL CAPS |

**Key rules:**
- Headlines are **Medium (500), NOT ExtraBold (800)** — ExtraBold is available but not for main display
- Marketing headlines use **lowercase** ("we make the grid flex, not break") — this is intentional brand voice
- Body copy is always **Light (300)**
- Sub-headers are **Bold (700), ALL CAPS**

### Secondary typeface: Fira Code

Reserved for specific functional roles: captions, eyebrows/labels, footers, technical highlights, code snippets.

Available weights: Light, Regular, Medium, SemiBold, Bold

Usage guidance:
- **Captions:** Short text under images or diagrams
- **Highlights:** Emphasized text for technical clarity
- **Footers:** Small, consistent text in print or digital

### System fallback: Aptos

Use ONLY when Plus Jakarta Sans or Fira Code cannot be installed or embedded (e.g., shared documents, system-generated templates). Apply the same weight and size rules as Plus Jakarta Sans.

### Google Fonts import

```html
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,700;0,800;1,300;1,400&family=Fira+Code:wght@300;400;500;600&display=swap');
```

---

## Logos

All logo files live in `brand/ingrid/logos/`. Always use a PNG; AI source files are in `logos/source/` and are not for direct use in HTML.

### The six approved placements (from the brand guide)

The guide defines **six** logo variants by background. Pick by background; never recolor with CSS filters.

| # | Placement | Logo file |
|---|---|---|
| 1 | Full color logo on white background | `color-on-light.png` |
| 2 | Full color logo on black background | `color-on-dark.png` |
| 3 | Single white logo on gradient background | `mono-on-dark.png` |
| 4 | Single black logo on light color background | `mono-on-light.png` |
| 5 | Single white logo on dark color background | `mono-on-dark.png` |
| 6 | Full color logo on imagery background | `color-on-dark.png` |

"Full color" = black/white wordmark **with** the purple dot. "Single" = one solid color (all white or all black), no purple.

### Full logo (Arc mark + "ingrid" wordmark)

| File | Use when |
|---|---|
| `logos/color-on-light.png` | Light or white backgrounds. Full color: black wordmark + purple dot. |
| `logos/color-on-dark.png` | Dark or gradient backgrounds. Full color: white wordmark + purple dot. |
| `logos/mono-on-light.png` | Light backgrounds, single-color constraint. All black, no purple. |
| `logos/mono-on-dark.png` | Dark backgrounds, single-color constraint. All white. |

### Mark only (Arc symbol without wordmark)

| File | Use when |
|---|---|
| `logos/mark-on-light.png` | Light backgrounds. Black squares + purple dot, transparent. |
| `logos/mark-on-dark.png` | Dark/gradient backgrounds. White squares + purple dot, transparent. |

These were generated by cropping the Arc symbol out of the transparent full-color logos (562×562, the purple dot is baked in). Source AI files: `brand/ingrid/logos/source/` (bw-positive.ai, bw-negative.ai, color-positive.ai, color-negative.ai).

### The Arc mark — what it looks like

The brand guide shows the Arc built as a **three-step progression**, not as flat squares:
1. **The Grid** — four solid rounded-corner squares in a 2×2 grid: structure and order.
2. **The Thinking Brain** — the **bottom-left** square becomes a **Flux Violet circle** (`#AA73FA`), the intelligence node.
3. **Rearchitecture** — the **top-left and bottom-right** squares flow together into a single **curved channel**, while the top-right square and the violet circle remain separate. This rearchitected, flowing form is the final Arc — **NOT** four separate squares.

Result: two squares joined by a flowing curve + one standalone square + a violet circle (black on light bg, white on dark bg). Structure + intelligence joined.

The Arc is used as: full mark (in logo), app/digital icon (white mark on black square), uniform print, social media profile avatar. The mark PNGs (`mark-on-light.png` / `mark-on-dark.png`) already contain this final curved form — use them directly rather than recreating it from squares.

### Logo do-nots (from PDF)
- No recoloring (other than approved mono/color variants)
- No gradient applied to the logo itself
- No reconfiguring the mark arrangement
- No new lockups
- No distorting or skewing
- No shadows or effects
- Never display wordmark without the Arc symbol
- Never use on backgrounds with insufficient contrast

### Logo rendering — IMPORTANT

**All current logo and mark PNGs have real transparency.** The `color-on-dark` / `mono-on-dark` variants already contain a white wordmark on a transparent background. Place them directly on dark or gradient slides — do **NOT** apply `filter:invert(1)` or `mix-blend-mode:screen`. Those tricks were for an old white-canvas logo and will corrupt these assets (they invert the white wordmark to black and shift the purple dot to green).

Pick the variant by background, not by CSS filter:

| Background | Logo file |
|---|---|
| White / light | `color-on-light.png` or `mono-on-light.png` |
| Dark / gradient / photo | `color-on-dark.png` or `mono-on-dark.png` |

**Standard HTML usage:**
```html
<!-- Light slide -->
<img src="brand/ingrid/logos/color-on-light.png" alt="Ingrid" style="height:40px;width:auto;">

<!-- Dark or gradient slide -->
<img src="brand/ingrid/logos/color-on-dark.png" alt="Ingrid" style="height:40px;width:auto;">
```

---

## Photography

Photography captures the dynamic relationship between people, technology, and the natural energy systems around them. Three approved categories:

### 1. Energy Landscape
Grid infrastructure, solar panels, wind turbines, natural landscapes. Shows the broader energy system — how sources, infrastructure, and environments connect into one intelligent system.

**Rules:**
1. Use unexpected angles — aerial, top-down, or abstract perspectives that reframe how energy and nature are seen
2. Highlight full systems — show energy networks in context from generation to storage to distribution
3. Balance nature and technology — architectural-inspired compositions, strong contrasts between raw Sweden landscapes and precise infrastructure
4. Embrace dynamism — compositions should convey motion and transformation, avoiding static or overly literal depictions

### 2. People / Society / Business
The human side of Ingrid's work — showing how energy impacts lives, businesses, and industries. Focus on authenticity: diverse individuals, real environments, genuine activity.

**Rules:**
1. Show authentic, diverse individuals — never staged, always captured mid-motion or mid-task
2. Capture real moments — everyday journeys, work, or interactions that suggest forward momentum
3. Highlight environments shaped by Ingrid — industrial electrification, urban mobility, or community spaces where our solutions have an impact
4. Balance human presence and system scale — show people within the broader energy network

### 3. Intelligent Expert
The precision, intelligence, and integrity behind Ingrid's solutions. Expertise and systems-thinking in action.

**Rules:**
1. Showcase expertise in action — experts immersed in interfaces, system controls, or technical environments
2. Highlight digital depth — environments where screens, data, or system flows become the backdrop of intelligence
3. Use organic data visualizations — gradients, flowing lines, or layered structures that echo Ingrid's signature color system
4. Balance human and system intelligence — pairing the human touch with precise, engineered digital environments

**Note:** As of v2.1 (August 2025), the Intelligent Expert photo set is still being finalized ("not quite home yet").

### Company photos on disk

| File | Category | Subject |
|---|---|---|
| `photos/wind-turbines-sunset.jpg` | Energy Landscape | Two wind turbines, orange/purple sunset, mountains. Primary hero image. |
| `photos/wind-turbines-2.jpg` | Energy Landscape | Wind turbines, alternate angle. |
| `photos/wind-and-solar.jpg` | Energy Landscape | Wind turbines + solar panels, energy mix. |
| `photos/container-snow.jpg` | Energy Landscape | Industrial container in snowy Nordic conditions. |
| `photos/ingrid-container.jpg` | People/Business | Ingrid-branded container on site. |
| `photos/grid-tower.jpg` | Energy Landscape | Power grid tower, shot from below. |
| `photos/team-kajsa-jessica.jpg` | People | Portrait of two team members. For team/founder slides. |
| `photos/site-nivala.jpg` | Energy Landscape | Nivala site (Finland). Geographic proof point. |

---

## Iconography

Simple geometry, subtle rounded corners. Clear and scalable across all contexts.

**Two modes:**
- **Outlined** — for Technical / UI / Product / Tech diagrams. Line icons with consistent stroke weight.
- **Filled** — for Communications / Marketing / Social. Solid filled shapes; can use the Ingrid Gradient fill for emphasis.

**Source:** Google Material Design open source library. Adapt from Material Design to align grids, stroke weights, and proportions to the Ingrid brand.

---

## Visual System

### Principle: Fluid Intelligence

The visual system draws from The Arc symbol — a union of structure (the grid squares) and expression (the organic circle). Two key elements:

1. **2× Modular Grid** — structure, order, scalability. Start at 2 columns; scale by doubling (2 → 4 → 8 → 16 → 32 → 64 columns).
2. **Ingrid Gradient** — expression, adaptability, emotional depth. The organic counterpart to the grid.

Together they embody Fluid Intelligence: precise, adaptive, alive.

### Constructing the grid (3 steps)
1. **Start at 2** — divide the layout into 2 columns as the base grid.
2. **Scale by doubling** — extend to 4, 8, 16, 32, or 64 columns as the layout demands.
3. **Modularize with intention** — style the grid into a modular framework (margins, gutters, baselines).

The grid is "divisions of two" — a flexible, logical framework — and a **graphic device**: exposing the underlying structure makes layout decisions intentional and transparent. It is the foundation for **all brand layouts and typography**, including the deck templates.

### Grid guidance
- Keep it simple, clear, and purposeful — the grid should support the design, not dominate it
- Add lines only when needed; expand structure based on context, otherwise keep minimal
- Grid as a guide, not a cage — let key visuals and typography interact with the grid when it enhances expression
- Maintain rhythm and balance — spacing and negative space should guide the eye naturally

### Gradient application techniques
1. **Mask into Shape** — apply the gradient to any form or container needed
2. **Soften and Blend** — use feathering to soften edges, adjust with Freeform Gradient to create natural, seamless flow
3. **Morph Organically** — let the gradient evolve into soft, organic shapes that interact with key visuals

---

## Video

| File | Description |
|---|---|
| `brand/ingrid/video/ingrid-capacity-demo.mov` | Company demo video, November 2024. Use in a collage slide: `<video src="brand/ingrid/video/ingrid-capacity-demo.mov" autoplay muted loop playsinline>` |

---

## Templates

`brand/ingrid/templates/` contains the official PowerPoint files. These are gitignored (large binary files). Not for direct agent use — design tokens above are the source of truth for HTML slides.

The PPT template has these slide types: Cover (gradient + title + subtitle + date), Content (headline + body or image), Four-column (with thumbnails), Stats (big number + image + caption bar), Divider (dark background + violet title), and Quote/Hero (full-bleed image + large white text).

---

## In the archive but not yet in `brand/ingrid/`

The original `ingrid assets/` archive (gitignored) holds extra brand-in-use artifacts not copied into `brand/ingrid/`. Pull them in only if a deck needs them:

- **Desktop backgrounds** (`Desktop background picture/`): `4K Desktop background picture PRIMARY.png` and `…ALTERNATIVE.jpg` (both 3840×2160). Alternative full-bleed gradient compositions distinct from `gradients/pastel.png`.
- **LinkedIn banners** (`Linkedin banner/`): pre-composed social banners.
- **Teams backgrounds** (`Teams meeting background picture/`): 4K video-call backgrounds.
- **`Rebranding Mapping .xlsx`**: old-asset → new-asset mapping from the 2025 rebrand.

The official PNG/JPEG logo exports in the archive are CMYK-document exports (`…_CMYK.png`). PNG itself is always RGB, so they render fine in browsers, but colors were converted from CMYK masters — spot-check against the hex values in this file if exact color matters.
