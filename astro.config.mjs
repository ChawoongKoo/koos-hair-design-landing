// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://koos-salon.com',
  integrations: [sitemap({
    filter: (page) => !['https://koos-salon.com/about/', 'https://koos-salon.com/faq/', 'https://koos-salon.com/contact/'].includes(page)
  })]
});