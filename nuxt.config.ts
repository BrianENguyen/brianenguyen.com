// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  components: [{ path: '~/components', extensions: ['.vue'] }],
  css: ['assets/styles/global.css', '@unocss/reset/normalize.css'],
});