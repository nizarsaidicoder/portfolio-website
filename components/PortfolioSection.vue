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
  const projects = ref([
    {
      title: "Project 1",
      image: "project1.jpg",
      link: "https://ezwin.netlify.app",
      description:
        "Ezwin is a website i created with my friends in university, the website showcases an algorithm for compressing bmp images. The website is built with HTML, CSS, and JavaScript/Vue. The website is hosted on netlify.",
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
