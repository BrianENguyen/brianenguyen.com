import { defineConfig } from 'vite';
import UnoCSS from 'unocss';
import UnocssIcons from '@unocss/preset-icons';

export default defineConfig({
  plugins: [
    UnoCSS({
      // when `presets` is specified, the default preset will be disabled
      // so you could only use the pure CSS icons in addition to your
      // existing app without polluting other CSS
      presets: [
        UnocssIcons({
          // options
          prefix: 'i-',
          extraProperties: {
            display: 'inline-block',
          },
        }),
        // presetUno() - if you want to use other atomic CSS as well
      ],
    }),
  ],
});
