import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './index.html'
      }
    },
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser',
    cssMinify: true,
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari13.1']
  },
  server: {
    open: true,
    port: 3000,
    host: 'localhost'
  },
  preview: {
    port: 4173,
    host: 'localhost'
  },
  assetsInclude: ['**/*.webp', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.gif', '**/*.svg'],
  css: {
    devSourcemap: true
  }
});