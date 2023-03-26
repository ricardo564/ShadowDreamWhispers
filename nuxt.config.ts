// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  head: {
    title: 'ShadowDreamWhispers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'Projeto de site com gpt3 nuxt module',
        name: 'ShadowDreamWhispers',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }],
  },
  buildModules: ['@vite-pwa/nuxt', '@nuxt/image-edge'],
  modules: [
    '@nuxtjs/tailwindcss',
    '@vite-pwa/nuxt',
    '@nuxt/image-edge',
    'nuxt-chatgpt',
    '@pinia/nuxt',
  ],
  plugins: [
    '~/plugins/axios.ts',
  ],
  devtools: {
    enabled: true,
    vscode: {},
  },
  chatgpt: {
    apiKey: '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',
  },
  pwa: {
    /* PWA options */
  },
  typescript: {
    strict: true,
  },
  googleFonts: {
    families: {
      Montserrat: [100, 200, 300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
  },
})
