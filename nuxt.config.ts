// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/fonts", "@nuxt/content", "@nuxt/ui", "@nuxt/image"],

  fonts: {
    defaults: {
      weights: [400, 700],

    },
    families: [
      { name: "Roboto", provider: "google" },
      { name: "Popins", provider: "google" }

    ]
  },

  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  compatibilityDate: "2024-07-04"
})