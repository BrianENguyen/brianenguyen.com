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
      brianBlueDark: '#0495b1',
      brianBlueLight: '#d4f3f9',
      grayLight: '#282c34',
      black: '#202020',
    },
  },
  presets: [presetIcons({ prefix: 'i-' }), presetUno()],
  shortcuts: {
    btn: 'cursor-pointer font-[Poppins] inline-block py-4 px-8 bg-transparent rounded border-solid border-1 text-black dark:!text-white decoration-none border-brian-blue transition duration-300 hover:bg-brian-blue font-700',
    'form-input':
      'w-full mx-auto overflow-hidden border-1 border-solid border-brian-blue-dark rounded outline-none dark:bg-#323645 px-4 py-5 mt-4 dark:text-white focus:border-2 focus:border-solid focus:border-brian-blue dark:focus:bg-#494e63',
  },
});
