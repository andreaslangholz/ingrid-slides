# slides

A minimalist, AI-friendly slide deck framework. One HTML file. No build step. Pair it with any AI coding assistant and write decks like prose.

```
slides/
├── deck.html              The default template deck. Edit this.
├── deck-craft.html        Craft theme variant.
├── deck-solid.html        Solid theme variant.
├── design-system.html     Visual showcase of every component.
├── index.html             Landing page (uses Tailwind CDN).
├── AGENTS.md              AI agent instructions. Design system + components + storytelling.
├── media/                 Drop your images and videos here.
├── assets/                Screenshots and banners for the README.
├── docs/
│   ├── USING.md           How to use the template.
│   ├── STORYTELLING.md    How to structure any presentation (+ format variants).
│   └── DESIGN.md          Design tokens, components, and tone rules.
├── plugins/
│   └── slides/            Claude plugin (commands + skills).
├── .github/
│   └── workflows/
│       └── deploy.yml     Auto-deploy to GitHub Pages on push.
└── LICENSE                MIT.
```

---

## Why this exists

Slides are usually built in PowerPoint, Keynote, or Google Slides. Those tools are great if you like dragging text boxes. They're terrible if you want to:

- Treat your deck like a document you can *write*
- Pair with an AI assistant to draft, edit, and iterate
- Keep your slides in version control
- Embed your deck anywhere with a single iframe
- Print to PDF without losing fidelity
- Stop fighting auto-formatting

This framework is a single HTML file with a library of 31 components, three themes, and in-browser editing. You edit it like a webpage. You present it in a browser. You pair with an AI assistant to write slides through conversation.

---

## Quick start

1. **Clone the repo:**
   ```bash
   git clone https://github.com/noskillish/slides.git
   cd slides
   ```

2. **Open `deck.html` in your browser.** You'll see the template with examples of every component.

3. **Open the file in your editor** (with Claude Code, Cursor, or whatever you like).

4. **Edit the slides.** Each slide is a `<section class="slide">`. Copy any one to make a new one.

5. **Drop media** into `media/` and reference with relative paths.

6. **Present** in full-screen (F11). Navigate with arrow keys or swipe on touch devices.

7. **Export to PDF** by clicking the button or pressing `P`.

---

## AI workflow

This template was made with AI assistance in mind. The workflow:

1. Open the repo in your editor with your AI assistant running.
2. Tell it what slide you want: *"Add a quote slide that says 'Coding is solved' as the opening."*
3. The AI inserts a slide using the right component.
4. Iterate by feedback: *"Make it dark."* *"Move it to slide 3."* *"Shorten the headline."*
5. Drop in media as you go: *"Wire `media/demo.mp4` to the collage on slide 8 with controls."*

The AI reads `AGENTS.md` to understand the design system, all 31 components, the storytelling framework, and the tone rules. It can also freestyle new components as long as they stay on-token.

See [docs/USING.md](docs/USING.md) for the full workflow.

---

## Embedding

Add `?embed` to any deck URL and drop it in an iframe. The PDF button hides; navigation stays.

```html
<iframe src="your-deck.html?embed" style="width:100%; aspect-ratio:16/9; border:none;"></iframe>
```

Works in blog posts, Notion, documentation sites, or anywhere that renders HTML.

---

## In-browser editing

Click the **Edit** button next to **Download PDF** (or add `?edit` to the URL) and the deck becomes its own editor. No install, no build step:

- **Click any text to edit it in place.** Plain text only — the markup stays intact.
- **Reorder, duplicate, or delete slides** from a thumbnail rail.
- **Replace images and video.** Hover any image to upload, drag-and-drop, or paste a link. Files embed (images downscaled); links stay as URLs; dropping a video swaps the slot to a `<video>`.
- **Save writes back to the HTML file.** Chromium browsers save in place after a one-time file pick, then auto-save as you go; other browsers download an updated copy.
- **Diffs stay clean.** Saving rewrites only the slides that changed; everything else passes through byte-for-byte.

See [docs/USING.md](docs/USING.md) for details.

---

## Claude Plugin

This repo is a Claude plugin marketplace. Install in Claude Code or Claude for Work:

```
/plugin marketplace add noskillish/slides
/plugin install slides@slides
```

Then use the commands:

| Command | What it does |
|---------|-------------|
| `/slides` | Generate a complete deck from a description |
| `/slides-outline` | Draft the structure without writing HTML |
| `/add-slide` | Add slides to an existing deck |
| `/slides-theme` | Switch between themes (default, craft, solid) |
| `/slides-review` | Review a deck for storytelling, design, and tone |
| `/slides-new-component` | Build a custom component that follows the design system |
| `/slides-image` | Add an image slide sourced from the image library |
| `/slides-visual` | Generate a visually-rich deck with auto-sourced images |
| `/slides-gallery` | Browse and preview images from the image library |

The plugin auto-detects the best storytelling format from your description:

| Format | Trigger |
|--------|---------|
| TED Talk (six-beat) | "conference talk", "keynote", "audience" |
| Sequoia pitch deck | "pitch", "investors", "funding", "Series A" |
| McKinsey SCR | "strategy", "board", "executive", "consulting" |
| Product launch | "launch", "product", "release", "unveil" |
| Board update | "board update", "quarterly", "KPIs", "status" |
| Sales deck | "sales", "prospect", "customer", "pipeline" |

---

## Documentation

- **[docs/USING.md](docs/USING.md):** How to use the template, components, keyboard shortcuts, PDF export, troubleshooting.
- **[docs/STORYTELLING.md](docs/STORYTELLING.md):** TED Talk / six-beat narrative structure.
- **[docs/STORYTELLING-sequoia.md](docs/STORYTELLING-sequoia.md):** Sequoia pitch deck format.
- **[docs/STORYTELLING-mbb.md](docs/STORYTELLING-mbb.md):** McKinsey SCR / pyramid principle.
- **[docs/STORYTELLING-product-launch.md](docs/STORYTELLING-product-launch.md):** Apple-style product launch.
- **[docs/STORYTELLING-board.md](docs/STORYTELLING-board.md):** Board and strategy updates.
- **[docs/STORYTELLING-sales.md](docs/STORYTELLING-sales.md):** Sales presentations.
- **[docs/DESIGN.md](docs/DESIGN.md):** Design tokens, components, tone & voice rules.
- **[design-system.html](design-system.html):** Visual showcase of every component, rendered.
- **[AGENTS.md](AGENTS.md):** AI agent context file. Everything an AI needs to produce correct, on-brand slides.

---

## Components

31 components covering text, data, media, and layout patterns.

| Component | Use it for |
|---|---|
| Cover | Title slide |
| Quote slide | One bold statement, no other elements |
| Eyebrow + headline + subtitle | Default text slide |
| Two-column | Problem/fix, before/after, any side-by-side |
| Step stack | Sequential steps with status markers |
| Three-column | Why/how/what or any structural breakdown |
| Capability list | Q&A rows for "what it solves" |
| Dark callout | One-per-deck emphasis |
| Dot flow | Process diagram, pipeline |
| Stack grid | Categorized tools/items/partners |
| Spec block + outputs | Input → process → outputs |
| Product slide | Showcase style: big name right, story left |
| Collage slide | Full-bleed image or video |
| JEDUF three-column | Two extremes vs the middle path |
| Timeline | Vertical year-based progression |
| Stat grid | Big numbers with context |
| Quote pair | Two perspectives side by side |
| Logo grid | Partners, clients, team members |
| Code slide | Syntax-highlighted code block |
| Dark slide | Pivot moment |
| Closing | Mic-drop line + thanks |
| Testimonial grid | Social proof with avatars and quotes |
| Logo bar | Compact row of partner/client names |
| Feature card row | Three cards with title, description, and mock UI |
| Update row | Changelog cards with version badges |
| Art overlay | Classical painting with floating UI mockup |
| Split slide | Text + image side by side |
| Hero image | Cinematic image with gradient overlay and caption |
| Image cards | Three images with descriptions |
| Caption slide | Single showcase image with annotation bar |
| Photo grid | 2×2 image mosaic with labels |

---

## Navigation

| Input | Action |
|---|---|
| `→` `Space` `PageDown` | Next slide |
| `←` `PageUp` | Previous slide |
| `Home` / `End` | First / last slide |
| `P` | Download PDF |
| Swipe left / right | Next / previous (touch devices) |

---

## Themes

Three built-in themes. Each is a self-contained HTML file with the same 31 components styled differently.

| Theme | File | Character |
|-------|------|-----------|
| Default | `deck.html` | Clean, warm neutrals, editorial feel |
| Craft | `deck-craft.html` | Richer textures, more visual weight |
| Solid | `deck-solid.html` | Bolder colors, higher contrast |

Switch themes with the `/slides-theme` command, or start from whichever HTML file fits.

---

## Tech

- **One HTML file per deck.** No JavaScript framework. No build step. No npm install.
- **Self-contained.** Each deck file has zero external dependencies beyond Google Fonts (Inter).
- **Three themes.** Default, Craft, and Solid. Same components, different visual tone.
- **In-browser editing.** Add `?edit` to the URL for a full slide editor with in-place saving.
- **`index.html` is the landing page.** It uses the Tailwind CDN for responsive layout. It's a marketing page for the project. The product files stay dependency-free.
- **Works in any modern browser.** Present, share, embed.
- **PDF export** via `window.print()` with print-optimized CSS (`@page` set to 16:9).
- **Auto-deploy** to GitHub Pages on push to `main` via the included GitHub Action.

---

## License

[MIT](LICENSE). Use it, fork it, change it.

---

## Credits

Built originally for a specific talk and generalized for anyone who wants to present with less friction. Inspired by editorial layouts and the broader minimalist tradition in tech writing.
