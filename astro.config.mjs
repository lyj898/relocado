// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readFileSync } from 'node:fs';

// Old Singapore directory URLs, pointed at the directory that replaced them. The old overseas
// listings are deliberately NOT redirected: they have no relevant new home, so they 404.
/** @type {Record<string, string>} */
const redirects = JSON.parse(readFileSync(new URL('./src/data/redirects.json', import.meta.url), 'utf8'));
const redirectSources = new Set(Object.keys(redirects).map((from) => `https://relocado.asia${from}/`));

// https://astro.build/config
export default defineConfig({
  site: 'https://relocado.asia',
  trailingSlash: 'always',
  redirects,
  integrations: [
    sitemap({
      filter: (page) => !redirectSources.has(page) && !page.endsWith('/404/'),
    }),
  ],
});
