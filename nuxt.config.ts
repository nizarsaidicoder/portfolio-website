// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },
  modules: ["@nuxt/image", "nuxt-icon", "@nuxtjs/color-mode", "@nuxtjs/i18n"],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
    compilation: {
      strictMessage: false,
    },
  },
});
