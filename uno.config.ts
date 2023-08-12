import { defineConfig, presetIcons, presetUno } from 'unocss';

export default defineConfig({
  rules: [[/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })]],
  theme: {
    breakpoints: {
      zero: '0px',
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
    },
    colors: {
      brianBlue: '#79c2d0',
      grayLight: '#282c34',
    },
  },
  presets: [presetIcons({ prefix: 'i-' }), presetUno()],
});
