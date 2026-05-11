// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  adapter: vercel(),
  site: 'https://koos-salon.com',
  integrations: [sitemap({
    filter: (page) => !['https://koos-salon.com/about/', 'https://koos-salon.com/faq/', 'https://koos-salon.com/contact/'].includes(page)
  })]
});