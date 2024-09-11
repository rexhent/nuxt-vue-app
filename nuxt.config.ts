// https://nuxt.com/docs/api/configuration/nuxt-config
import Aura from '@primevue/themes/aura';
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
  hub: {},
  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@hebilicious/vue-query-nuxt',
    'nuxt-time',
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxt/test-utils',
    '@nuxtjs/seo',
    '@nuxthub/core',
    '@nuxt/scripts',
    '@primevue/nuxt-module'
  ],
  primevue: {
    options: {
      theme: {
        preset: Aura
      }
  }},
})