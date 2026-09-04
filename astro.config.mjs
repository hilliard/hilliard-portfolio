// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import node from '@astrojs/node';
import sitemap from '@astrojs/sitemap';

const siteUrl =
  process.env.SITE_URL || process.env.PUBLIC_SITE_URL || 'https://hilliardportfolio.com';

// https://astro.build/config
export default defineConfig({
  site: siteUrl,
  integrations: [sitemap()],
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  security: {
    checkOrigin: false,
  },
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: true,
    },
  },
});
