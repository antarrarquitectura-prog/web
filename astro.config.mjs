import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false
  })],
  site: 'https://www.antarrarquitectos.com',
  trailingSlash: 'never',
  build: {
    inlineStylesheets: 'auto'
  },
  devToolbar: {
    enabled: false
  }
});
