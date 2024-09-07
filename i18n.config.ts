export default defineI18nConfig(() => {
  return {
    legacy: false,
    fallbackLocale: "fr",
    messages: {
      en: {
        // s
        nav: {
          home: "Home",
          about: "About",
        },
        welcome: "Hello",
        nom: "I'm Nizar.",
        heroDesc: "Developer & Designer Based in",
        heroContactButton: "Contact me",
        aboutTitle: "About me",
        aboutDesc:
          "I'm a developer and designer studying computer science at the University of Strasbourg.<br /><br />Passionate about crafting impactful digital experiences, I specialize in blending creativity with cutting-edge technology to create sleek websites and intuitive interfaces.<br />Outside of my studies, I'm dedicated to honing my craft through independent coding projects and design explorations.",
        downloadCV: "Download CV",
        viewProject: "View Project",

        techDescriptions: {
          html: "With over 6 years of experience, HTML has been an integral part of my coding journey.",
          css: "For over a decade, I've been shaping web aesthetics with CSS.",
          js: "JavaScript is my go-to language for interactive web development.",
          node: "Node.js is my go-to runtime for building scalable and fast server-side applications with Express.js.",
          vue: "Venturing into Vue.js for 2 years, I've marveled at its simplicity and power.",
          react:
            "React is a good friend of mine, but Vue.js is my best friend.",
          nuxt: "Nuxt.js is my go-to framework for building static and server-rendered applications using Vue.js.",
          tailwind:
            "Tailwind CSS is my favorite utility-first CSS framework. I've been using it for over 4 years now.",
          bootstrap:
            "If you don't need an ultra-customized design, Bootstrap is a great choice for rapid prototyping. I'm good at it too.",
          sass: "Sass is CSS with superpowers. Perfect for collaboration and maintainability. I use it a lot too.",
          mongo:
            "MongoDB is my go-to database for NoSQL. Simple, flexible, and scalable.",
          firebase:
            "Firebase is my go-to platform for building web and mobile applications. It's easy to use and has a lot of features.",
          git: "I use Git for version control. It's a great tool for collaboration and code management.",
          sql: "SQL is my go-to language for relational databases. I've got a good grasp of it.",
          python:
            "Python, I know it, I love it, I use it. It's a great language for web development.",
          c: "C# is my go-to language for building Windows applications.",
          figma:
            "I use Figma for UI/UX design. It's a great tool for prototyping and collaboration.",
        },
        projects: {
          p1: {
            title: "Technical Website",
            description:
              "Ezwin is a website I created with my friends at university. It showcases an algorithm for compressing BMP images. The site is built with HTML, CSS, and JavaScript/Vue. It is hosted on Netlify.",
          },
          p2: {
            title: "Local Chess Game",
            description:
              "A chess game developed with Vue.js, simple and minimalist. For now, it's a local multiplayer game, but I'm working on adding AI to play against, as well as a multiplayer feature to play online with friends.",
          },
          p3: {
            title: "Pokemon TCG",
            description:
              "A console-based Pokémon fighting card game developed with Java. The game is simple; you can choose a Pokémon and battle against the computer. The game is developed with Java and is hosted on GitHub.",
          },
          p4: {
            title: "Studio Ghibli API",
            description:
              "An API that provides information about all the Studio Ghibli movies and characters. The API is hosted on Heroku. It is built with Node.js, Express.js, and MongoDB, along with web scraping using Python.",
          },
          p5: {
            title: "Landing Page",
            description:
              "A landing page for the amicale core, the club of computer science students in my university. The landing page is built with HTML, CSS, and JavaScript. The website is hosted on vercel.",
          },
          p6: {
            title: "Internship Platform",
            description:
              "A web application that allows students to find internships. The application is developed with Nuxt.js with AI integration to write cover letters. the internship data has been cleaned and processed by OpenAI in python.",
          },
        },
        collab: {
          title: "Let's Collaborate",
          text: " Want to create an amazing website or develop an app with some magic ! I can work with a team of developers and designers, or all alone",
        },
      },
      fr: {
        nav: {
          home: "Acceuil",
          about: "A propos",
        },
        welcome: "Bonjour",
        nom: " Je suis Nizar.",
        heroDesc: "Développeur & Designer basé à",
        heroContactButton: "Contactez Moi",
        aboutTitle: "A propos",
        aboutDesc:
          "Je suis développeur et designer, étudiant en informatique à l'Université de Strasbourg.<br /><br />Passionné par la création d'expériences numériques percutantes, je me spécialise dans le mélange de créativité et de technologies de pointe pour concevoir des sites web élégants et des interfaces intuitives.<br />En dehors de mes études, je me consacre à perfectionner mon savoir-faire à travers des projets de codage indépendants et des explorations en design.",
        downloadCV: "Télécharger le CV",
        viewProject: "Voir Projet",
        techDescriptions: {
          html: "Avec plus de 6 ans d'expérience, HTML a été une partie intégrante de mon parcours de codage.",
          css: "Depuis plus de dix ans, je façonne l'esthétique du web avec CSS.",
          js: "JavaScript est mon langage de prédilection pour le développement web interactif.",
          node: "Node.js est mon environnement de prédilection pour construire des applications côté serveur rapides et évolutives avec Express.js.",
          vue: "Explorant Vue.js depuis 2 ans, j'ai été émerveillé par sa simplicité et sa puissance.",
          react: "React est un bon ami, mais Vue.js est mon meilleur ami.",
          nuxt: "Nuxt.js est mon framework de prédilection pour construire des applications statiques et rendues côté serveur en utilisant Vue.js.",
          tailwind:
            "Tailwind CSS est mon framework CSS utilitaire préféré. Je l'utilise depuis plus de 4 ans maintenant.",
          bootstrap:
            "Si vous n'avez pas besoin d'un design ultra personnalisé, Bootstrap est un excellent choix pour le prototypage rapide. Je le maîtrise également.",
          sass: "Sass, c'est du CSS avec des superpouvoirs. Parfait pour la collaboration et la maintenabilité. Je l'utilise beaucoup aussi.",
          mongo:
            "MongoDB est ma base de données NoSQL de prédilection. Simple, flexible et évolutive.",
          firebase:
            "Firebase est ma plateforme préférée pour créer des applications web et mobiles. C'est facile à utiliser et riche en fonctionnalités.",
          git: "J'utilise Git pour le contrôle de version. C'est un excellent outil pour la collaboration et la gestion du code.",
          sql: "SQL est mon langage de prédilection pour les bases de données relationnelles. J'en ai une bonne maîtrise.",
          python:
            "Python, je le connais, je l'aime, je l'utilise. C'est un excellent langage pour le développement web.",
          c: "C# est mon langage de prédilection pour développer des applications Windows.",
          figma:
            "J'utilise Figma pour le design UI/UX. C'est un excellent outil pour le prototypage et la collaboration.",
        },
        projects: {
          p1: {
            title: "Site Web Technique",
            description:
              "Ezwin est un site web que j'ai créé avec mes amis à l'université, il présente un algorithme de compression d'images BMP. Le site est construit avec HTML, CSS et JavaScript/Vue. Il est hébergé sur Netlify.",
          },
          p2: {
            title: "Jeu d'Échecs Local",
            description:
              "Un jeu d'échecs développé avec Vue.js, simple et minimaliste. Pour l'instant, c'est un jeu multijoueur local, mais je travaille sur l'ajout d'une IA pour jouer contre, ainsi que sur une fonctionnalité multijoueur pour jouer en ligne avec des amis.",
          },
          p3: {
            title: "Pokemon TCG",
            description:
              "Un jeu de cartes de combat Pokémon basé sur la console, développé avec Java. Le jeu est simple, vous pouvez choisir un Pokémon et combattre contre l'ordinateur. Le jeu est développé avec Java et est hébergé sur GitHub.",
          },
          p4: {
            title: "API Studio Ghibli",
            description:
              "Une page de destination pour l'Amicale Core, le club des étudiants en informatique de mon université. La page de destination est construite avec HTML, CSS et JavaScript. Le site est hébergé sur Vercel.",
          },
          p5: {
            title: "Siteweb",
            description:
              "Une page de destination pour l'Amicale Core, le club des étudiants en informatique de mon université. La page de destination est construite avec HTML, CSS et JavaScript. Le site est hébergé sur Vercel.",
          },
          p6: {
            title: "Plateforme de stages",
            description:
              "Une application web qui permet aux étudiants de trouver des stages. L'application est développée avec Nuxt.js avec intégration de l'IA pour rédiger des lettres de motivation. les données des stages ont été soigné et traité par OpenAI en python.",
          },
        },
        collab: {
          title: "Collaborons ensemble",
          text: "Vous souhaitez créer un site web incroyable ou développer une application avec une touche de magie ! Je peux travailler avec une équipe de développeurs et de designers, ou tout seul.",
        },
      },
    },
  };
});
