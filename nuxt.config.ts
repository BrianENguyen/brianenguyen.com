// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt'],
  components: {
    global: true,
    dirs: ['~/components', '~/components/about'],
  },
  css: ['assets/styles/global.css', '@unocss/reset/normalize.css'],
});
