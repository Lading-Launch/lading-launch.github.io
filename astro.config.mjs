// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://ladingandlaunch.com',
  integrations: [
    sitemap({
      filter: (page) =>
        !['/404/', '/design-system/', '/privacy/', '/terms/'].some((path) =>
          page.endsWith(path)
        ),
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
