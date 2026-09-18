// @ts-check
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

/**
 * @param {string} page
 */
function includeInSitemap(page) {
  return !page.includes('robots.txt') && !page.includes('llms.txt');
}

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: 'nl',
    locales: ['nl', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  integrations: [
    react(),
    sitemap({
      filter: includeInSitemap,
      i18n: {
        defaultLocale: 'nl',
        locales: {
          en: 'en',
          nl: 'nl'
        }
      }
    })
  ],
  site: process.env.SITE_URL ?? 'https://nrg.pet'
});
