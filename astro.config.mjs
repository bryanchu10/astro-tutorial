// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.hosaki.net",
  integrations: [
    vue(),
    tailwind({
      applyBaseStyles: false,
    })
  ],
  i18n: {
    locales: ['en', 'zh-TW'],
    defaultLocale: 'zh-TW',
  }
});
