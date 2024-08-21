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
        aboutTitle: "About me",
        aboutDesc:
          "I'm a developer and designer studying computer science at the University of Strasbourg.<br /><br />Passionate about crafting impactful digital experiences, I specialize in blending creativity with cutting-edge technology to create sleek websites and intuitive interfaces.<br />Outside of my studies, I'm dedicated to honing my craft through independent coding projects and design explorations.",
        downloadCV: "Download CV",
      },
      fr: {
        welcome: "Bonjour",
        nom: " Je suis Nizar.",
        heroDesc: "Développeur & Designer basé à",
        heroContactButton: "Contactez Moi",
        aboutTitle: "A propos",
        aboutDesc:
          "Je suis développeur et designer, étudiant en informatique à l'Université de Strasbourg.<br /><br />Passionné par la création d'expériences numériques percutantes, je me spécialise dans le mélange de créativité et de technologies de pointe pour concevoir des sites web élégants et des interfaces intuitives.<br />En dehors de mes études, je me consacre à perfectionner mon savoir-faire à travers des projets de codage indépendants et des explorations en design.",
        downloadCV: "Télécharger le CV",
      },
    },
  };
});
