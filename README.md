# slides

A minimalist, AI-friendly slide deck framework. One HTML file. No build step. Pair it with Claude Code (or your editor of choice) and write decks like prose.

```
slides/
├── deck.html              The template. Edit this.
├── design-system.html     Visual showcase of every component.
├── media/                 Drop your images and videos here.
├── assets/                Screenshots used in this README.
├── docs/
│   ├── USING.md           How to use the template.
│   ├── STORYTELLING.md    How to structure a 20-min talk.
│   └── DESIGN.md          Design tokens, components, and tone rules.
└── LICENSE                MIT.
```

---

## Why this exists

Slides are usually built in PowerPoint, Keynote, or Google Slides. Those tools are great if you like dragging text boxes. They're terrible if you want to:

- Treat your deck like a document you can *write*, not a canvas you have to *arrange*
- Pair with an AI assistant to draft, edit, and iterate
- Keep your slides in version control
- Print to PDF without losing fidelity
- Stop fighting auto-formatting

This framework is a single HTML file with a small library of components. You edit it like a webpage. You present it in a browser. You pair with Claude Code (or any AI assistant) to write slides through prompts.

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

6. **Present** in full-screen (F11), navigate with arrow keys.

7. **Export to PDF** by clicking the button or pressing `P`.

---

## The Claude Code workflow

This template was made with AI assistance in mind. The workflow:

1. Open the repo in your editor with Claude Code running.
2. Tell Claude what slide you want: *"Add a quote slide that says 'Coding is solved' as the opening."*
3. Claude inserts a slide using the right component.
4. Iterate by feedback: *"Make it dark."* *"Move it to slide 3."* *"Shorten the headline."*
5. Drop in media as you go: *"Wire `media/demo.mp4` to the collage on slide 8 with controls."*

The components are the vocabulary. You write the deck like you'd write the talk. See [docs/USING.md](docs/USING.md) for the full workflow.

---

## Documentation

- **[docs/USING.md](docs/USING.md)** — How to use the template, components, keyboard shortcuts, PDF export, troubleshooting.
- **[docs/STORYTELLING.md](docs/STORYTELLING.md)** — How to structure a 20-minute talk that lands. The 4-act pattern, the headline rule, common mistakes.
- **[docs/DESIGN.md](docs/DESIGN.md)** — Design tokens, components, tone & voice rules.
- **[design-system.html](design-system.html)** — Visual showcase of every component, rendered.

---

## Components

| Component | Use it for |
|---|---|
| Cover | Title slide |
| Quote slide | One bold statement, no other elements |
| Eyebrow + headline + subtitle | Default text slide |
| Two-column | Problem/fix, before/after |
| Step stack | The "old way" pattern with cumulative steps |
| Three-column | Why/how/what or any structural breakdown |
| Capability list | Q&A rows for "what it solves" |
| Dark callout | One-per-deck emphasis |
| Dot flow | Process diagram, 5 steps |
| Stack grid | Categorized tools/items |
| Spec block + outputs | Input → process → outputs |
| Product slide | Showcase style: huge name on the right, story on the left |
| Collage slide | Full-bleed image or video |
| JEDUF three-column | Two extremes vs the middle path |
| Dark slide | Pivot moment |
| Closing | Mic-drop |

---

## Keyboard shortcuts

| Key | Action |
|---|---|
| `→` `Space` `PageDown` | Next slide |
| `←` `PageUp` | Previous slide |
| `Home` / `End` | First / last slide |
| `P` | Download PDF |

---

## Tech

- One HTML file per deck. No JavaScript framework.
- Inter font from Google Fonts (the only external dependency).
- Self-contained. No build step. No npm install.
- Works in any modern browser.
- PDF export via `window.print()` with print-optimized CSS.

---

## License

[MIT](LICENSE). Use it, fork it, change it. Pull requests welcome.

---

## Credits

Inspired by editorial layouts (mockups.directory, NYT) and the broader minimalist tradition in tech writing. Built originally for a specific talk and generalized for anyone who wants to present with less friction.
