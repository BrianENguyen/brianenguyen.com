import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  rules: [[/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })]],
  presets: [presetIcons({ prefix: 'i-' }), presetUno()],
});
