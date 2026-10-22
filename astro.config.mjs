// @ts-check
import { defineConfig } from 'astro/config';
import node from '@astrojs/node';
import studiocms from 'studiocms';

export default defineConfig({
  site: import.meta.env.PUBLIC_BASE_URL || 'http://localhost:4321',
  output: 'server',
  adapter: node({
    mode: 'standalone',
  }),
  integrations: [studiocms()],
});