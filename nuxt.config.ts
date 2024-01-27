// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/style.scss" as *;',
        },
      },
    },
  },

  modules: ["@nuxt/image"],
  alias: {
    "~": "/src",
  },
  images: {
    baseURL: "https://nizaro.netlify.app", // Add your Netlify URL here
  },
});
