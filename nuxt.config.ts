// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  /* changer le favicon */
  app: {
    head: {
      title: 'Nuxt app',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/shrek.jpg' }],
    },
  },

  /*import du css */
  css: ['./assets/css/global.css'],
})
