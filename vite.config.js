// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/', // Ensure this is set correctly based on your deployment
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
    },
  },
});
