# Design

The visual system. Tokens, components, rules.

Light, minimal, type-led. Inspired by editorial layouts and product showcase pages.

The principle: most pages are a headline, two columns, and breathing room. Anything more should earn its place.

---

## Colors

```
Background          #f5f5f3   warm off-white
Surface (subtle)    #fafaf8   slightly lighter than background, for cards
Surface (white)     #ffffff   for cards that should pop more
Hero / dark slide   #1a1a1a   inverted callouts, dark slides

Border (soft)       #e0e0db
Border (medium)     #d5d5d0
Pill background     #eeeee9

Text primary        #1a1a1a
Text dim            #a0a09a   subtitles, body that recedes
Text very dim       #b5b5b0   meta info, decorative
Text faint          #c5c5c0   labels next to pills

On-dark text        #f5f5f3
On-dark dim         #ccc
On-dark very dim    #888
```

Two grays do most of the work. Use color for hierarchy.

---

## Typography

**Font:** Inter (Google Fonts). Weights 300, 400, 500, 600.

```
H1 (display)         clamp(2rem, 4.5vw, 3.2rem)   weight 500  letter-spacing -0.03em  line-height 1.2
H1 (slide cover)     clamp(2.5rem, 6vw, 5rem)     weight 500  letter-spacing -0.035em line-height 1.1
H2                   clamp(1.75rem, 3.5vw, 2.6rem) weight 500  letter-spacing -0.025em
H3 (section)         9.5pt–1rem                   weight 500  letter-spacing -0.01em
Body / subtitle      0.78–0.88rem                 weight 400  line-height 1.5–1.6
Eyebrow / label      0.65–0.75rem  uppercase   weight 500  letter-spacing 0.08em  color #a0a09a
Big number           clamp(2.4rem, 4.5vw, 3.5rem) weight 600  letter-spacing -0.035em
```

---

## The headline pattern

Headlines use a bold-then-dim split. The first phrase carries weight (500). The continuation fades to gray (300, color `#b5b5b0`). This gives every headline a built-in narrative: anchor + extension.

```html
<h1>Anchor. <span class="dim">Extension.</span></h1>
<h1>One spec. <span class="dim">Full transparency.</span></h1>
<h1>The tools changed. <span class="dim">The instinct is still yours.</span></h1>
```

```css
h1 span.dim {
  color: #b5b5b0;
  font-weight: 300;
}
```

This is the most consistent visual identity in the system. Use it.

---

## Spacing & rhythm

- **Slides:** 6vh top/bottom, 8vw sides. Max content width 1100px.
- **Cards/callouts:** 1rem–1.5rem padding internal.
- **Border radius:** 6–10pt for cards, 4pt for small buttons/steps.
- **Gaps between sections within a slide:** 2–4rem typically. Err toward more space.

---

## Components

31 components. Full HTML reference in `AGENTS.md`.

### Text & structure
- **Cover slide.** Title + eyebrow + meta.
- **Quote slide.** Single bold statement, no other elements. Openings, transitions, mic-drops.
- **Eyebrow + Headline + Subtitle.** The default text slide. Eyebrow tags context, headline carries the message, subtitle adds nuance.
- **Two-column.** Equal columns for contrast: before/after, problem/solution.
- **Step stack.** Sequential steps with `.dim`, `.kill`, `.live` markers. Lives inside two-column.
- **Three-column.** Structural breakdowns. Each column: 1-word title + 1–2 sentence body.
- **Capability list (Q&A).** Rows with thin borders. Left = question, right = answer.
- **Dark callout.** Black background, white text, rounded. One per deck max.
- **Dark slide.** Light text on black. Pivot moments. Two or three per deck max.
- **Closing.** Mic-drop line + thanks + meta.

### Data & process
- **Dot flow.** Horizontal steps connected by a thin line. Each step: dot + label + caption.
- **Stack grid.** Four-column category cards. Uppercase label + list of items with marks.
- **Spec block + outputs.** Vertical flow: dark spec block → context pills → divider → output cards.
- **Timeline.** Vertical year-based progression with connecting dots and lines.
- **Stat grid.** Big numbers with context. One `.stat-dark` card highlights the hero metric.
- **Update row.** Changelog cards with version badges and dates. Four columns.

### Showcase & media
- **Product slide.** Big product name on the right, story on the left with number, tag, headline, body, stat.
- **Collage slide.** Full-bleed image or video. No text. The image is the slide.
- **Split slide.** Text + image side by side. Add `.split-reverse` to swap.
- **Hero image.** Rounded 16:9 frame with gradient overlay and caption.
- **Image card row.** Three 4:3 images with titles and descriptions.
- **Caption slide.** Single large image with annotation bar below.
- **Image + quote.** Portrait paired with a pull quote. Add `.image-quote-reverse` to swap.
- **Photo grid.** 2×2 mosaic with gradient-overlay labels.
- **Art overlay.** Classical painting background with floating UI mockup.

### Comparison & social proof
- **JEDUF three-column.** Two extremes flanking a dark hero (the middle path).
- **Quote pair.** Two perspectives side by side. One light, one dark.
- **Logo grid.** Four-column grid for partners, clients, team members.
- **Logo bar.** Compact horizontal row of names between hairline borders.
- **Testimonial grid.** 3×2 quote cards with avatars. Social proof.
- **Feature card row.** Three cards with title, description, and inner mock UI.

### Code
- **Code slide.** Dark code block with macOS-style header. Syntax highlighting via `.code-comment`, `.code-keyword`, `.code-string`, `.code-dim`.

---

## Tone & voice rules

- **Bold the keyword. Dim the rest.** That's the rhythm of every headline.
- **No em-dashes in body copy.** Use periods or split into shorter sentences.
- **No fluff.** If a sentence doesn't add information, delete it.
- **Numbers should be specific.** "7×" beats "huge gains." "35 use cases per week" beats "much faster."
- **Headlines are statements.** Q&A rows are the exception: the question is the format.
- **Use names.** The product, feature, or concept by name beats "it" or "this thing."

---

## Scope

- A visual system, self-contained. No NPM package, no CSS variables file, no build step. Each deck is a single HTML file with inline styles.
- Made for content pages: decks, one-pagers, overviews. If you build an app, use a real component library.
- The voice is opinionated. Lean into it.
