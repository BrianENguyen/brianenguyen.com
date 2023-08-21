import { defineConfig } from 'vite';
import UnoCSS from 'unocss/vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      configFile: './uno.config.ts',
    }),
  ],
});
