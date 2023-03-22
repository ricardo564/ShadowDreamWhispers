// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    'virtual:windi.css',
    'virtual:windi-devtools',
  ],
  buildModules: [
    'nuxt-windicss',
    '@vite-pwa/nuxt',
    '@nuxt/image-edge',
  ],
  modules: [
    'nuxt-windicss',
    '@vite-pwa/nuxt',
    '@nuxt/image-edge',
  ],
  pwa: {
    /* PWA options */
  },
  typescript: {
    strict: true
  }
})
