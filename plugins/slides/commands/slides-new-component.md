---
description: Design and build a new slide component that doesn't exist in the standard 25-component library. Ensures it follows the design system tokens and naming conventions.
---

# /slides-new-component

Build a custom slide component when the standard library doesn't have what you need.

## Usage

- `/slides-new-component "a funnel chart showing conversion rates across 5 stages"`
- `/slides-new-component "a matrix grid with two axes for effort vs impact"`
- `/slides-new-component "a horizontal bar chart comparing three metrics"`
- `/slides-new-component "a kanban-style board showing project status"`

## What the command does

1. Understand what the user needs to visualize
2. Check if an existing component can be adapted first
3. If not, design a new component following the Freestyle rules:
   - **Stay on-token.** Only use colors, fonts, weights, and spacing from the design tokens
   - **Use the headline pattern.** Bold-then-dim with `<span class="dim">` where applicable
   - **Match existing craft.** Border radius 10px for cards, 4px for small elements. Padding 1–1.5rem
   - **Name the class.** Lowercase, hyphenated: `funnel-chart`, `impact-matrix`, `bar-compare`
   - **Keep CSS inline** in the `<style>` block, grouped with a descriptive comment
   - **One new idea per slide.** Pair with familiar elements (eyebrow, subtitle)
4. Generate both the CSS and HTML for the new component
5. Show an example slide using the component with placeholder content

## What you get back

- CSS to add to the `<style>` block (with comment group header)
- HTML template for the new component
- An example slide using it with realistic placeholder content
- Integration notes (where it fits in a deck, which beats it serves)

## Design constraints

The new component must look like it belongs next to the existing 25 components. If it needs a new color or a different font to work, it needs to be rethought. The design system is deliberately constrained — that constraint is what makes decks look consistent.
