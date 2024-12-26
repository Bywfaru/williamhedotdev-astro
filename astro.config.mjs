// @ts-check
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';
import { fileURLToPath, URL } from 'url';

import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind(), icon()],
  vite: {
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
  },
});