import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        'sales-page': resolve(__dirname, 'sales-page/index.html'),
        'webinar-signup': resolve(__dirname, 'webinar-signup/index.html'),
      },
    },
  },
});
