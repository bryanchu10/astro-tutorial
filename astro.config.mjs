// @ts-check
import { defineConfig } from 'astro/config';
import { remarkModifiedTime } from './remark-modified-time.mjs';

import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.hosaki.net",
  integrations: [
    vue(),
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  i18n: {
    locales: ['en', 'zh-TW'],
    defaultLocale: 'zh-TW',
  },
  markdown: {
    remarkPlugins: [
      remarkModifiedTime,
    ],
  },
});
