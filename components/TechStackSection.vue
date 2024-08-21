<template>
  <div>
    <div class="section techstack-section">
      <h1 class="highlight">Tech stack</h1>
      <div class="techstack--grid">
        <div
          class="techstack--icon-container"
          v-for="(tech, i) in techs">
          <TechCard
            :name="tech.name"
            :description="tech.description"
            :icon="tech.icon"
            :id="i"
            :key="i" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const { t } = useI18n();

  const techs = [
    {
      name: "HTML5",
      icon: "https://cdn.svgporn.com/logos/html-5.svg",
      description: t("techDescriptions.html"),
    },
    {
      name: "CSS3",
      icon: "https://cdn.svgporn.com/logos/css-3.svg",
      description: t("techDescriptions.css"),
    },
    {
      name: "JavaScript",
      icon: "https://cdn.svgporn.com/logos/javascript.svg",
      description: t("techDescriptions.js"),
    },
    {
      name: "Node.js/Express.js",
      icon: "https://cdn.svgporn.com/logos/nodejs-icon.svg",
      description: t("techDescriptions.node"),
    },
    {
      name: "Vue.js",
      icon: "https://cdn.svgporn.com/logos/vue.svg",
      description: t("techDescriptions.vue"),
    },
    {
      name: "React",
      icon: "https://cdn.svgporn.com/logos/react.svg",
      description: t("techDescriptions.react"),
    },
    {
      name: "Nuxt.js",
      icon: "https://cdn.svgporn.com/logos/nuxt-icon.svg",
      description: t("techDescriptions.nuxt"),
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
      description: t("techDescriptions.tailwind"),
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.svgporn.com/logos/bootstrap.svg",
      description: t("techDescriptions.bootstrap"),
    },
    {
      name: "Sass",
      icon: "https://cdn.svgporn.com/logos/sass.svg",
      description: t("techDescriptions.sass"),
    },

    {
      name: "MongoDB",
      icon: "https://cdn.svgporn.com/logos/mongodb.svg",
      description: t("techDescriptions.mongo"),
    },
    {
      name: "Firebase",
      icon: "https://cdn.svgporn.com/logos/firebase.svg",
      description: t("techDescriptions.firebase"),
    },
    {
      name: "Git",
      icon: "https://cdn.svgporn.com/logos/git-icon.svg",
      description: t("techDescriptions.git"),
    },
    {
      name: "SQL",
      icon: "https://cdn.svgporn.com/logos/mysql-icon.svg",
      description: t("techDescriptions.sql"),
    },
    {
      name: "Python",
      icon: "https://cdn.svgporn.com/logos/python.svg",
      description: t("techDescriptions.python"),
    },
    {
      name: "C#",
      icon: "https://cdn.svgporn.com/logos/c-sharp.svg",
      description: t("techDescriptions.c"),
    },
    {
      name: "Figma",
      icon: "https://cdn.svgporn.com/logos/figma.svg",
      description: t("techDescriptions.figma"),
    },
  ];
</script>

<style lang="scss">
  .techstack-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 9.6rem;
  }
  .techstack--grid {
    display: grid;
    // 4 cards per row
    grid-template-columns: repeat(4, 1fr);
    gap: 4.8rem;
  }

  @media (max-width: 1000px) {
    .techstack--grid {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media (max-width: 768px) {
    .techstack--grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
  @media (max-width: 600px) {
    .techstack-section {
      align-items: center;
      gap: 4.8rem;
    }
  }
  @media (max-width: 380px) {
    .techstack--grid {
      grid-template-columns: repeat(1, 1fr);
    }
  }
</style>
