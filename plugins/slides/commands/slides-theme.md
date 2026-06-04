---
description: Switch a deck between visual themes (Default, Craft, Solid, or a custom description). Replaces the CSS style block and adjusts theme-specific classes.
---

# /slides-theme

Convert a deck from one visual theme to another.

## Usage

- `/slides-theme craft`: switch to the Craft theme
- `/slides-theme solid`: switch to the Solid theme
- `/slides-theme default`: switch to the Default theme
- `/slides-theme dark blue with orange accents`: switch to a custom theme

## Available themes

| Theme | Source | Character |
|-------|--------|-----------|
| **Default** | `deck.html` | Warm off-white, minimal, editorial. The starting point. |
| **Craft** | `deck-craft.html` | Richer textures, art overlays, painterly backgrounds. More visual weight. |
| **Solid** | `deck-solid.html` | Glass morphism, gradients, frosted cards. Modern SaaS aesthetic. |
| **Custom** | User description | Any visual style the user describes. |

## Predefined themes (Default, Craft, Solid)

1. Read the target template file (`deck.html`, `deck-craft.html`, or `deck-solid.html`) from the repo
2. Copy the entire `<style>` block from the template file verbatim into the deck
3. Copy the entire `<script>` block from the template file verbatim into the deck
4. Preserve all slide content and structure unchanged
5. Always read the actual template file. Never generate theme CSS from memory or descriptions.

## Custom theme

When the argument does not match "default", "craft", or "solid", treat it as a custom theme description.

1. Read `deck.html` from the repo as the structural base. Copy the `<script>` block verbatim.
2. Rewrite the `<style>` block to match the user's description:
   - Keep every CSS selector and class name identical to the Default theme. Components must still work.
   - Change only visual properties: colors, backgrounds, gradients, shadows, border styles, border-radius, font weights.
   - Preserve all layout properties: padding, margin, grid, flexbox, clamp values, media queries.
   - Define a cohesive palette with at minimum 6 tokens: background, surface, ink, border, dim text, accent.
3. Show the user the proposed palette before applying. Get approval first.
4. Replace the deck's `<style>` block with the new CSS. Preserve all slide content.

## Important

- All themes share the same HTML component structure
- The difference is purely in CSS: colors, backgrounds, card styles, shadows
- Content, slide order, and component types remain identical after switching
