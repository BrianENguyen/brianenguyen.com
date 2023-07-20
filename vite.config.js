import { defineConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import Markdown from 'vite-plugin-vue-markdown';

export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/], // <-- add .md
    }),
    Markdown(),
  ],
});
