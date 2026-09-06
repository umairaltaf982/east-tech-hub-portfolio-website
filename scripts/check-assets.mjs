/**
 * Pre-build sanity check.
 *
 * Catches the two mistakes that only show up at runtime, on a page nobody
 * happened to open before deploying:
 *   1. an image path that does not resolve to a file in /public
 *   2. an internal link that points at a route which does not exist
 *
 * Runs automatically before `next build` (see the "prebuild" script).
 * Run it on its own any time with:  npm run check
 */
import fs from 'node:fs';
import path from 'node:path';

const SKIP_DIRS = new Set(['node_modules', '.next', '.git', 'out']);
const walk = (dir, acc = []) => {
  if (!fs.existsSync(dir)) return acc;
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (!SKIP_DIRS.has(e.name)) walk(p, acc); }
    else acc.push(p);
  }
  return acc;
};

const sourceFiles = [...walk('app'), ...walk('components'), ...walk('lib')]
  .filter((f) => /\.(tsx?|css)$/.test(f));

const problems = [];

/* ---------- 1. image paths ---------- */
const IMG = /['"`]([^'"`]*images\/[^'"`]+\.(?:jpg|jpeg|png|webp|avif|svg|ico))['"`]/i;
let imagesChecked = 0;

for (const file of sourceFiles) {
  fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    const m = line.match(IMG);
    if (!m) return;
    const src = m[1];
    // Skip interpolated strings (e.g. `${site.url}/images/logo.png` in JSON-LD)
    if (src.includes('${') || line.includes('${')) return;
    imagesChecked++;
    if (!src.startsWith('/')) {
      problems.push(
        `${file}:${i + 1}\n    "${src}"\n    Image paths are served from /public, so they must start with "/".\n` +
        `    Write "/images/..." — never "public/images/..." or a bare "images/...".`
      );
      return;
    }
    if (!fs.existsSync(path.join('public', src))) {
      problems.push(`${file}:${i + 1}\n    "${src}"\n    No such file at public${src}`);
    }
  });
}

/* ---------- 2. internal links ---------- */
const routes = new Set(['/']);
for (const f of walk('app')) {
  if (!/[\\/]page\.tsx$/.test(f)) continue;
  const r = ('/' + path.dirname(f).replace(/^app[\\/]?/, '').split(path.sep).join('/')).replace(/\/$/, '') || '/';
  routes.add(r);
}
const slugsIn = (file) =>
  fs.existsSync(file) ? [...fs.readFileSync(file, 'utf8').matchAll(/slug: '([^']+)'/g)].map((m) => m[1]) : [];

const valid = new Set([...routes].filter((r) => !r.includes('[')));
slugsIn('lib/services.ts').forEach((s) => valid.add(`/services/${s}`));
slugsIn('lib/team.ts').forEach((s) => valid.add(`/team/${s}`));
slugsIn('lib/content.ts').forEach((s) => valid.add(`/blog/${s}`));

let linksChecked = 0;
for (const file of sourceFiles) {
  fs.readFileSync(file, 'utf8').split('\n').forEach((line, i) => {
    for (const m of line.matchAll(/href="(\/[^"#?]*)"/g)) {
      const href = m[1].replace(/\/$/, '') || '/';
      if (href.startsWith('/images/') || href.startsWith('/fonts/')) continue;
      linksChecked++;
      if (!valid.has(href)) problems.push(`${file}:${i + 1}\n    href="${href}" does not match any route`);
    }
  });
}

/* ---------- report ---------- */
if (problems.length) {
  console.error(`\n✖ Asset check failed — ${problems.length} problem(s):\n`);
  problems.forEach((p, i) => console.error(`  ${i + 1}. ${p}\n`));
  process.exit(1);
}
console.log(`✔ Asset check passed — ${imagesChecked} image paths, ${linksChecked} internal links, all resolve.`);
