import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
  define: {
    global: 'globalThis',
  },
  root: 'src',
  base: './',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    sourcemap: true,
  },
}));
