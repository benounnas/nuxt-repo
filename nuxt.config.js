export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Fabrication de meubles en bois sur mesure - Atlasmob',
    htmlAttrs: {
      lang: 'fr',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Atlasmob est un atelier spécialisé dans la fabrication de meubles en bois MDF et en bois mélaminé. Nous créons des meubles sur mesure pour répondre à vos besoins spécifiques.',
      },
      { name: 'format-detection', content: 'telephone=no' },
      {
        name: 'keywords',
        content:
          'meubles en bois, meubles sur mesure, fabrication de meubles, bois MDF, bois mélaminé',
      },
      { name: 'robots', content: 'noindex, nofollow' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
