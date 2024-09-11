// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',

  future: {
    compatibilityVersion: 4,
  },
  experimental: {
    typedPages: true,
  },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true
    }
  },
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image'
  ]
})