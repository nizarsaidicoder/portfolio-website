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
      title: "Technical Website",
      image: "project1.jpg",
      link: "https://ezwin.netlify.app",
      description:
        "Ezwin is a website i created with my friends in university, the website showcases an algorithm for compressing bmp images. The website is built with HTML, CSS, and JavaScript/Vue. The website is hosted on netlify.",
    },
    {
      title: "Local Chess Game",
      image: "project2.png",
      link: "https://checkers-vue.vercel.app",
      description:
        "A chess game built with Vue.js, the game is simple, minimalistic. For the moment it is a local multiplayer game, but i am working on adding an AI to play against. and also a multiplayer feature to play with friends online.",
    },
    {
      title: "Pokemon TCG",
      image: "project3.jpg",
      link: "https://github.com/nizarsaidicoder/Pokemon-TCG",
      description:
        "A console based pokemon fighting card game built with Java. The game is simple, you can choose a pokemon and fight against the computer. The game is built with Java and is hosted on github.",
    },
    {
      title: "Studio Ghibli API",
      image: "project4.png",
      link: "https://ghibli-api-a772f592c04e.herokuapp.com/",
      description:
        "The API provides informations about all the Studio Ghibli movies and the characters in the movies. The API is hosted on heroku. The API is built with Node.js, Express.js and MongoDB along with web scraping with Python.",
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
