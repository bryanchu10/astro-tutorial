// @ts-check
import { defineConfig } from 'astro/config';
import vue from '@astrojs/vue';

// https://astro.build/config
export default defineConfig({
  site: "https://blog.hosaki.net",
  integrations: [vue()],
  i18n: {
    locales: ['en', 'zh-TW'],
    defaultLocale: 'zh-TW',
  }
});
