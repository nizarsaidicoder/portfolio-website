export default defineI18nConfig(() => {
  return {
    legacy: false,
    fallbackLocale: "fr",
    messages: {
      en: {
        welcome: "Hello",
      },
      fr: {
        welcome: "Bonjour",
      },
    },
  };
});
