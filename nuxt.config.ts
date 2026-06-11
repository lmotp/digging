import { fileURLToPath } from 'node:url'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  alias: {
    '@styles': fileURLToPath(new URL('./app/assets/scss', import.meta.url)),
    '@components': fileURLToPath(new URL('./app/components', import.meta.url)),
    '@composables': fileURLToPath(new URL('./app/composables', import.meta.url))
  },
  css: ['~/assets/scss/main.scss'],
  typescript: {
    strict: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@styles/abstracts" as *;'
        }
      }
    }
  }
})
