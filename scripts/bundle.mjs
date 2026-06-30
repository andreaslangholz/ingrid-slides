#!/usr/bin/env node
/* ============================================================
   bundle.mjs — flatten a thin-shell Ingrid deck into ONE
   self-contained HTML file in dist/.

   Source decks stay thin (they link engine/ + brand/ by path);
   this build step inlines every *local* dependency so the
   output opens in any browser with no sibling files:
     • engine/engine.css        → inline <style> (its brand
                                   image url()s become base64)
     • engine.js / edit.js /
       charts.js / templates.js → inline <script>
     • brand/ + media/ images   → base64 data: URIs

   By default CDN libs (Chart.js, Mermaid) and Google Fonts stay
   as links — "self-contained" assuming internet. Flags:
     --no-edit   strip the editor (edit.js + Edit button) for a
                 smaller, view-only share
     --offline   also inline Chart.js, Mermaid and the fonts so
                 the file opens with zero network
     --out PATH  write somewhere other than dist/<deck>.html

   Usage:  node scripts/bundle.mjs ingrid_examples.html [flags]

   Discipline: dist/<deck>.html is a build artifact. Keep
   iterating on the thin source deck and re-bundle; don't edit a
   bundle back into source.
   ============================================================ */
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { dirname, resolve, join, basename, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import { execFileSync } from 'node:child_process';
import { createHash } from 'node:crypto';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

// Photos above this embed at full multi-MB size, which makes a bundle
// huge. Downscale + recompress them first (same idea as the in-browser
// editor's image embed). Needs `sips` (built into macOS); falls back to
// the original file with a warning elsewhere.
const OPTIMIZE_OVER_BYTES = 500 * 1024;
const MAX_DIMENSION = 1920;
const JPEG_QUALITY = 72;

const IMG_MIME = {
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.gif': 'image/gif', '.svg': 'image/svg+xml', '.webp': 'image/webp',
  '.ico': 'image/x-icon',
};

// ---- args -------------------------------------------------------------
const argv = process.argv.slice(2);
const flags = new Set(argv.filter(a => a.startsWith('--')));
const outFlagIdx = argv.indexOf('--out');
const outArg = outFlagIdx !== -1 ? argv[outFlagIdx + 1] : null;
// Drop both flag tokens and the --out value, so `--out path deck.html` still
// resolves the deck (not the out path) as the positional argument.
const positional = argv.filter((a, i) => !a.startsWith('--') && (outFlagIdx === -1 || i !== outFlagIdx + 1));
const deckArg = positional[0];
const noEdit = flags.has('--no-edit');
const offline = flags.has('--offline');
const noOptimize = flags.has('--no-optimize');

if (!deckArg) {
  console.error('Usage: node scripts/bundle.mjs <deck.html> [--no-edit] [--offline] [--out path]');
  process.exit(1);
}

const deckPath = resolve(ROOT, deckArg);
if (!existsSync(deckPath)) {
  console.error(`Deck not found: ${deckPath}`);
  process.exit(1);
}

// ---- helpers ----------------------------------------------------------
const dataUriCache = new Map();
const missing = new Set();
let sipsOk = null;
let warnedNoSips = false;

function hasSips() {
  if (sipsOk !== null) return sipsOk;
  try { execFileSync('sips', ['--version'], { stdio: 'ignore' }); sipsOk = true; }
  catch { sipsOk = false; }
  return sipsOk;
}

// Return a path to a downscaled/recompressed copy of an oversized raster,
// or the original path if optimization is off, unavailable, or unneeded.
// Keeps the original format (so transparent PNG logos never flatten).
function optimizedPath(abs, ext) {
  if (noOptimize || !['.jpg', '.jpeg', '.png'].includes(ext)) return abs;
  if (statSync(abs).size <= OPTIMIZE_OVER_BYTES) return abs;
  if (!hasSips()) {
    if (!warnedNoSips) { console.warn('  ⚠ sips not available — embedding large images at full size. Pre-optimize them or run on macOS.'); warnedNoSips = true; }
    return abs;
  }
  const cacheDir = join(tmpdir(), 'ingrid-bundle-cache');
  mkdirSync(cacheDir, { recursive: true });
  const fmt = ext === '.png' ? 'png' : 'jpeg';
  const key = createHash('sha1').update(abs + statSync(abs).mtimeMs + MAX_DIMENSION + JPEG_QUALITY).digest('hex').slice(0, 16);
  const out = join(cacheDir, `${key}.${fmt === 'png' ? 'png' : 'jpg'}`);
  if (!existsSync(out)) {
    const opts = ['-Z', String(MAX_DIMENSION), '-s', 'format', fmt];
    if (fmt === 'jpeg') opts.push('-s', 'formatOptions', String(JPEG_QUALITY));
    execFileSync('sips', [...opts, abs, '--out', out], { stdio: 'ignore' });
  }
  return out;
}

function imageDataUri(ref, baseDir) {
  const clean = ref.split('?')[0].split('#')[0];
  const abs = resolve(baseDir, clean);
  if (dataUriCache.has(abs)) return dataUriCache.get(abs);
  const ext = extname(abs).toLowerCase();
  const mime = IMG_MIME[ext];
  if (!mime) return null;            // not an image we inline
  if (!existsSync(abs)) { missing.add(ref); return null; }
  const src = optimizedPath(abs, ext);
  const uri = `data:${mime};base64,${readFileSync(src).toString('base64')}`;
  dataUriCache.set(abs, uri);
  return uri;
}

const isExternal = s => /^(https?:)?\/\//i.test(s) || s.startsWith('data:');

// Inline local image references (src="..." in HTML, url(...) in CSS).
// Leaves external refs, non-image src (e.g. script .js), and href alone.
function inlineImages(text, baseDir) {
  text = text.replace(/\bsrc=(["'])([^"']+)\1/g, (m, q, ref) => {
    if (isExternal(ref)) return m;
    const uri = imageDataUri(ref, baseDir);
    return uri ? `src=${q}${uri}${q}` : m;
  });
  text = text.replace(/url\(\s*(['"]?)([^'")]+)\1\s*\)/g, (m, q, ref) => {
    if (isExternal(ref)) return m;
    const uri = imageDataUri(ref, baseDir);
    return uri ? `url(${q}${uri}${q})` : m;
  });
  return text;
}

async function fetchText(url) {
  const res = await fetch(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36' } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  return res.text();
}

// font format from magic bytes (CDN URLs don't reliably carry an extension).
function fontMime(buf) {
  const tag = buf.toString('ascii', 0, 4);
  if (tag === 'wOF2') return 'font/woff2';
  if (tag === 'wOFF') return 'font/woff';
  return 'font/ttf';
}

async function fetchFontDataUri(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const b = Buffer.from(await res.arrayBuffer());
  return `data:${fontMime(b)};base64,${b.toString('base64')}`;
}

// Resolve a Google-Fonts @import into a self-contained <style> by
// downloading the CSS and base64-embedding every font file it lists.
async function inlineFontImport(importUrl) {
  let css = await fetchText(importUrl);
  const urls = [...new Set([...css.matchAll(/url\((https:\/\/[^)]+)\)/g)].map(m => m[1]))];
  for (const u of urls) css = css.split(u).join(await fetchFontDataUri(u));
  return css;
}

const read = p => readFileSync(resolve(ROOT, p), 'utf8');
// Escape any literal </script in inlined JS (e.g. templates.js holds a
// chart template with a <script type="text/csv"> block) so it doesn't
// close the wrapping <script> tag early. `<\/script` is identical to
// `</script` inside JS strings.
const scriptTag = (src, body) =>
  `<script>\n/* ${src} (inlined) */\n${body.replace(/<\/script/gi, '<\\/script')}\n</script>`;

// ---- build ------------------------------------------------------------
let html = read(deckArg);

// 1. base64 every local image in the deck body (logos, photos, marks).
html = inlineImages(html, ROOT);

// 2. inline engine.css (and its brand-image url()s) as a <style>.
let css = inlineImages(read('engine/engine.css'), resolve(ROOT, 'engine'));
const importRe = /@import\s+url\((['"]?)(https:\/\/fonts\.googleapis\.com[^)'"]+)\1\)\s*;/;
if (offline) {
  const m = css.match(importRe);
  if (m) css = css.replace(importRe, await inlineFontImport(m[2]));
}
// Replacer functions (not strings) so `$&`, `$'` etc. inside inlined
// JS/CSS are never interpreted as replacement patterns.
html = html.replace(
  /<link[^>]+href=["']engine\/engine\.css["'][^>]*>/,
  () => `<style>\n${css}\n</style>`
);

// 3. inline engine JS. edit.js + templates.js only when the editor stays.
html = html.replace(
  /<script[^>]+src=["']engine\/engine\.js["']><\/script>/,
  () => scriptTag('engine/engine.js', read('engine/engine.js'))
);
html = html.replace(
  /<script[^>]+src=["']engine\/edit\.js["']><\/script>/,
  () => noEdit
    ? ''
    : scriptTag('templates/templates.js', inlineImages(read('templates/templates.js'), ROOT)) +
      '\n' + scriptTag('engine/edit.js', read('engine/edit.js'))
);
html = html.replace(
  /<script[^>]+src=["']engine\/charts\.js["']><\/script>/,
  () => scriptTag('engine/charts.js', read('engine/charts.js'))
);

// 4. CDN libraries: inline only with --offline, otherwise leave as links.
if (offline) {
  const cdnRe = /<script[^>]+src=["'](https:\/\/[^"']+)["']><\/script>/g;
  const cdnUrls = [...html.matchAll(cdnRe)].map(m => m[1]);
  for (const url of cdnUrls) {
    const body = await fetchText(url);
    html = html.replace(
      new RegExp(`<script[^>]+src=["']${url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["']></script>`),
      () => scriptTag(url, body)
    );
  }
}

// 5. with --no-edit, drop the Edit button too.
if (noEdit) {
  html = html.replace(/\s*<button class="pdf-btn edit-btn"[^>]*>Edit<\/button>/, '');
}

// ---- write ------------------------------------------------------------
const outPath = outArg
  ? resolve(ROOT, outArg)
  : resolve(ROOT, 'dist', basename(deckArg));
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, html);

const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`✓ ${basename(deckArg)} → ${outPath.replace(ROOT + '/', '')}  (${kb} KB)`);
console.log(`  mode: ${noEdit ? 'view-only' : 'editor kept'}, ${offline ? 'offline (libs+fonts inlined)' : 'online (CDN libs + fonts)'}`);
if (missing.size) {
  console.warn(`  ⚠ ${missing.size} image ref(s) not found, left as-is:`);
  for (const m of missing) console.warn(`    - ${m}`);
}
