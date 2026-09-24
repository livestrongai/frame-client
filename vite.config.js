/*
 * Vite build configuration.
 * Configures the React plugin, public assets directory,
 * source maps, output directory, and bundle filename.
 * It uses index.html in root by default but does not modify it.
 */

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: '_public-vite',
  build: {
    sourcemap: true,
    outDir: '_dist-vite',
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: 'bundle.js',
      },
    },
  },
});
