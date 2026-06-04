---
description: Switch a deck between visual themes (Default, Craft, Solid). Replaces the CSS style block and adjusts theme-specific classes.
---

# /slides-theme

Convert a deck from one visual theme to another.

## Usage

- `/slides-theme craft` — switch to the Craft theme
- `/slides-theme solid` — switch to the Solid theme
- `/slides-theme default` — switch to the Default theme

## Available themes

| Theme | File | Character |
|-------|------|-----------|
| **Default** | `deck.html` | Warm off-white, minimal, editorial. The starting point. |
| **Craft** | `deck-craft.html` | Richer textures, art overlays, painterly backgrounds. More visual weight. |
| **Solid** | `deck-solid.html` | Glass morphism, gradients, frosted cards. Modern SaaS aesthetic. |

## What the command does

1. Identify the current theme by reading the existing `<style>` block
2. Replace the entire `<style>` block with the target theme's tokens
3. Adjust any theme-specific CSS classes or inline styles
4. Preserve all slide content and structure unchanged

## Important

- All three themes share the same HTML component structure
- The difference is purely in CSS: colors, backgrounds, card styles, shadows
- Content, slide order, and component types remain identical after switching
