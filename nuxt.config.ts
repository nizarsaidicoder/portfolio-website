// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nizar Saidi",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" },
      ],
    },
  },
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
