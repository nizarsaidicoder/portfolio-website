<template>
  <div
    id="portfolio-section"
    class="section section--white portfolio--section">
    <h1 class="portfolio--title highlight">Portfolio</h1>
    <div class="portfolio--projects">
      <PortfolioProject
        v-for="project in projects"
        :key="project.title"
        :title="project.title"
        :image="project.image"
        :link="project.link"
        :description="project.description" />
    </div>
  </div>
</template>

<script setup>
  const { t } = useI18n();
  const projects = ref([
    {
      title: t("projects.p1.title"),
      image: "project1.jpg",
      link: "https://ezwin.netlify.app",
      description: t("projects.p1.description"),
    },
    {
      title: t("projects.p2.title"),
      image: "project2.png",
      link: "https://checkers-vue.vercel.app",
      description: t("projects.p2.description"),
    },
    {
      title: t("projects.p3.title"),
      image: "project3.jpg",
      link: "https://github.com/nizarsaidicoder/Pokemon-TCG",
      description: t("projects.p3.description"),
    },
    {
      title: t("projects.p4.title"),
      image: "project4.png",
      link: "https://ghibli-api-a772f592c04e.herokuapp.com/",
      description: t("projects.p4.description"),
    },
    {
      title: t("projects.p5.title"),
      image: "project5.png",
      link: "https://amicale-core.vercel.app/",
      description: t("projects.p5.description"),
    },
  ]);
</script>

<style lang="scss">
  .portfolio {
    &--section {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 9.6rem;
    }
    &--projects {
      display: flex;
      flex-direction: column;
      gap: 9.6rem;
      width: 100%;
    }
  }
  .dark-mode .portfolio--section {
    h1 {
      color: $white-color;
    }
  }
  @media (min-width: 1660px) {
  }
  @media (max-width: 1280px) {
  }
  @media (max-width: 1024px) {
    .portfolio {
      &--section {
        gap: 4.8rem;
      }
    }
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
  }
</style>
<!-- 0600242763 -->
<!-- 0718773654 -->
