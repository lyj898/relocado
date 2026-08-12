// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://relocado.asia',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
