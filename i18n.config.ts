export default defineI18nConfig(() => {
  return {
    legacy: false,
    fallbackLocale: "fr",
    messages: {
      en: {
        // s
        welcome: "Hello",
        nom: "I'm Nizar.",
        heroDesc: "Developer & Designer Based in",
        heroContactButton: "Contact me",
      },
      fr: {
        welcome: "Bonjour",
        nom: " Je suis Nizar.",
        heroDesc: "Développeur & Designer basé à",
        heroContactButton: "Contactez Moi",
      },
    },
  };
});
