// @ts-check
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import icon from 'astro-icon';
import { defineConfig, envField } from 'astro/config';
import { fileURLToPath, URL } from 'url';

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

  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },

  env: {
    schema: {
      SECRET_KEY: envField.string({ context: 'server', access: 'secret' }),
    },
    validateSecrets: true,
  },
});
