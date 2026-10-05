// Post-build audit of dist/. Fails the build on anything that would ship broken or break the site's rules.
//   node scripts/audit.mjs
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const DIST = fileURLToPath(new URL('../dist/', import.meta.url));
const SITE = 'https://relocado.asia';
const BRAND_HOSTS = ['junktoclear.com.sg', 'hometomoved.com', 'hometoclean.com'];
// The GA4 ID is read from src/lib/site.ts so there's one place it lives. Every page must carry the tag,
// including the 404 page: losing it silently loses the site's measurement.
const GA4_ID = readFileSync(new URL('../src/lib/site.ts', import.meta.url), 'utf8').match(/ga4Id:\s*'(G-[A-Z0-9]+)'/)?.[1];
if (!GA4_ID) throw new Error('Could not read ga4Id from src/lib/site.ts');
const errors = [];
const fail = (page, msg) => errors.push(`${page}: ${msg}`);

function htmlFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    const p = join(dir, name);
    return statSync(p).isDirectory() ? htmlFiles(p) : p.endsWith('.html') ? [p] : [];
  });
}

const pages = htmlFiles(DIST).map((file) => {
  const rel = relative(DIST, file).split(sep).join('/');
  const url = '/' + rel.replace(/index\.html$/, '').replace(/\.html$/, '/');
  return { file, url, html: readFileSync(file, 'utf8') };
});

const isRedirect = (p) => /http-equiv="refresh"/i.test(p.html);
const content = pages.filter((p) => !isRedirect(p));
const titles = new Map();
const descriptions = new Map();

for (const p of content) {
  const title = p.html.match(/<title>([^<]*)<\/title>/)?.[1];
  const desc = p.html.match(/<meta name="description" content="([^"]*)"/)?.[1];
  const noindex = /<meta name="robots" content="noindex"/.test(p.html);
  if (!title) fail(p.url, 'missing <title>');
  if (!desc) fail(p.url, 'missing meta description');
  if (!p.html.includes(`googletagmanager.com/gtag/js?id=${GA4_ID}`)) fail(p.url, `missing the GA4 tag (${GA4_ID})`);
  if (!noindex) {
    const canon = [...p.html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map((m) => m[1]);
    if (canon.length !== 1) fail(p.url, `expected 1 canonical, found ${canon.length}`);
    else if (canon[0] !== SITE + p.url) fail(p.url, `canonical ${canon[0]} is not self-referencing`);
    if (titles.has(title)) fail(p.url, `duplicate title with ${titles.get(title)}`);
    if (descriptions.has(desc)) fail(p.url, `duplicate description with ${descriptions.get(desc)}`);
    titles.set(title, p.url);
    descriptions.set(desc, p.url);
  }

  for (const m of p.html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try { JSON.parse(m[1]); } catch { fail(p.url, 'JSON-LD does not parse'); }
  }

  // Every internal link must resolve to a built page (or a known public file).
  for (const m of p.html.matchAll(/href="(\/[^"#?]*)(?:[#?][^"]*)?"/g)) {
    const href = m[1];
    if (href.startsWith('//')) continue;
    const target = href.endsWith('/') ? join(DIST, href, 'index.html') : join(DIST, href);
    if (!existsSync(target)) fail(p.url, `broken internal link ${href}`);
  }

  // The family's one footer link (OurKampung revamp, 5 Oct 2026) stays nofollow, and no link is ever noreferrer:
  // that would hide the visit's source from the other site's GA4.
  const footer = p.html.match(/<footer class="site">([\s\S]*?)<\/footer>/)?.[1] ?? '';
  if (!footer.includes('<a href="https://ourkampung.com/" rel="nofollow">')) fail(p.url, 'footer is missing the nofollow "Part of OurKampung" link');
  if (/rel="[^"]*\bnoreferrer\b/.test(p.html)) fail(p.url, 'a link has rel="noreferrer"');

  // Astro drops the space when a line of text ends and a link starts on the next line ("withGoogle’s"). Keep the
  // word before a link on the link's line.
  const glued = p.html.replace(/<script[\s\S]*?<\/script>/g, '').match(/[A-Za-z0-9,;:’)]<a\s/);
  if (glued) fail(p.url, `a word runs into a link with no space ("${glued[0]}")`);

  // Brand rules: matching services never say "our movers"/"our cleaners"; a guide links to the brands at most twice.
  const body = p.html.match(/<article class="prose">([\s\S]*?)<\/article>/)?.[1] ?? '';
  if (/\bour (movers|cleaners|trucks|crew)\b/i.test(body)) fail(p.url, 'says "our movers/cleaners/trucks/crew"');
  if (body) {
    const beforeDisclosure = body.split('class="disclosure-note"')[0];
    const brandLinks = [...beforeDisclosure.matchAll(/href="https?:\/\/(?:www\.)?([^/"]+)/g)].filter((mm) => BRAND_HOSTS.includes(mm[1]));
    if (brandLinks.length > 2) fail(p.url, `${brandLinks.length} links to our own brands in the guide body (max 2)`);
    if (/(?<![A-Za-z])\$\d/.test(beforeDisclosure.replace(/S\$\d/g, ''))) fail(p.url, 'amount written with a bare "$" (use S$)');
  }
}

// Sitemap: every entry must exist and must not be a redirect or noindex page.
const sitemap = readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8');
for (const m of sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)) {
  const path = m[1].replace(SITE, '');
  const page = pages.find((p) => p.url === path);
  if (!page) fail('sitemap', `lists ${path}, which was not built`);
  else if (isRedirect(page)) fail('sitemap', `lists redirect ${path}`);
  else if (/<meta name="robots" content="noindex"/.test(page.html)) fail('sitemap', `lists noindex page ${path}`);
}

if (errors.length) {
  console.error(`Audit failed with ${errors.length} problem(s):\n  ${errors.join('\n  ')}`);
  process.exit(1);
}
console.log(`Audit passed: ${content.length} pages, ${pages.length - content.length} redirects, sitemap clean.`);
