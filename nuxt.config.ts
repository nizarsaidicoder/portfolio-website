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
  modules: [
    "@nuxt/image",
    "nuxt-icon",
    "@nuxtjs/color-mode",
    [
      "nuxt-mail",
      {
        message: { to: "nizar.saidi.coder@gmail.com" },
        smtp: { host: "smtp.gmail.com", port: 465, secure: true },
      },
    ],
  ],
});
