#!/usr/bin/env node
/* ============================================================
   gen-components-doc.mjs — generate docs/COMPONENTS.md from the
   single source of truth, templates/templates.js.

   The picker (engine/edit.js), the gallery (templates/gallery.html)
   and this doc all derive from one machine-readable list, so they
   cannot drift. Re-run after editing templates.js:

     node scripts/gen-components-doc.mjs
   ============================================================ */
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// templates.js is browser code (it assigns window.SLIDE_TEMPLATES).
// Run it with a stub window to recover the structured list.
const src = readFileSync(resolve(ROOT, 'templates/templates.js'), 'utf8');
const win = {};
new Function('window', src)(win);
const templates = win.SLIDE_TEMPLATES;
if (!Array.isArray(templates) || !templates.length) {
  console.error('Could not load SLIDE_TEMPLATES from templates/templates.js');
  process.exit(1);
}

// Preserve tag order as it first appears in the source.
const tags = [];
for (const t of templates) if (!tags.includes(t.tag)) tags.push(t.tag);

const lines = [];
lines.push('# Components');
lines.push('');
lines.push('> Generated from `templates/templates.js` by `scripts/gen-components-doc.mjs`. Do not edit by hand — change the template source and re-run the script.');
lines.push('');
lines.push('These are the building blocks for an Ingrid deck: the exact, on-brand slide markup the engine styles. The same list powers the in-editor **＋ Add slide** picker and `templates/gallery.html`. Brand tokens (colors, type, logos) live in `brand/ingrid/BRAND.md`; how to arrange components well lives in `docs/DESIGN.md`.');
lines.push('');
lines.push(`**${templates.length} components**, grouped by purpose:`);
lines.push('');

// Quick index table.
lines.push('| Component | Group | id |');
lines.push('|---|---|---|');
for (const t of templates) lines.push(`| ${t.name} | ${t.tag} | \`${t.id}\` |`);
lines.push('');

// Full markup, grouped.
for (const tag of tags) {
  lines.push('---');
  lines.push('');
  lines.push(`## ${tag}`);
  lines.push('');
  for (const t of templates.filter(t => t.tag === tag)) {
    lines.push(`### ${t.name}`);
    lines.push('');
    lines.push(`\`id: ${t.id}\``);
    lines.push('');
    lines.push('```html');
    lines.push(t.html);
    lines.push('```');
    lines.push('');
  }
}

writeFileSync(resolve(ROOT, 'docs/COMPONENTS.md'), lines.join('\n'));
console.log(`✓ docs/COMPONENTS.md — ${templates.length} components across ${tags.length} groups (${tags.join(', ')})`);
