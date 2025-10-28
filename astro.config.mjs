import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import partytown from '@astrojs/partytown';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  adapter: netlify(),
  site: "https://ikeralvarez.com",
  integrations: [sitemap(),
  partytown({
    config: {
      forward: ["dataLayer.push"],
    }
  })
  ],
});