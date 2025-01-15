// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.hosaki.net",
  integrations: [vue(), tailwind({
    applyBaseStyles: false,
  }), react()],
  i18n: {
    locales: ['en', 'zh-TW'],
    defaultLocale: 'zh-TW',
  }
});