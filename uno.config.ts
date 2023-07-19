import { defineConfig } from 'unocss';

export default defineConfig({
  rules: [[/^m-([\.\d]+)$/, ([_, num]) => ({ margin: `${num}px` })]],
});
