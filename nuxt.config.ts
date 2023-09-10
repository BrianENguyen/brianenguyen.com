// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@unocss/nuxt', '@nuxt/content'],
  content: {
    highlight: {
      theme: 'one-dark-pro',
    },
  },
  components: {
    global: true,
    dirs: ['~/components', '~/components/about'],
  },
  css: [
    'assets/styles/global.css',
    'assets/styles/nuxt-content.css',
    '@unocss/reset/normalize.css',
  ],
});
