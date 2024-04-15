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
  const techs = [
    {
      name: "HTML5",
      icon: "https://cdn.svgporn.com/logos/html-5.svg",
      description:
        "HTML is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "CSS3",
      icon: "https://cdn.svgporn.com/logos/css-3.svg",
      description:
        "CSS is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.svgporn.com/logos/javascript.svg",
      description:
        "JavaScript is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.svgporn.com/logos/vue.svg",
      description:
        "Vue.js is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "React",
      icon: "https://cdn.svgporn.com/logos/react.svg",
      description:
        "React is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "Nuxt.js",
      icon: "https://cdn.svgporn.com/logos/nuxt-icon.svg",
      description:
        "Nuxt.js is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
      description:
        "Tailwind CSS is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.svgporn.com/logos/bootstrap.svg",
      description:
        "Bootstrap is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "Sass",
      icon: "https://cdn.svgporn.com/logos/sass.svg",
      description:
        "Sass is one of my key strengths. I have been using it for over 10 years now.",
    },

    {
      name: "MongoDB",
      icon: "https://cdn.svgporn.com/logos/mongodb.svg",
      description:
        "MongoDB is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "Firebase",
      icon: "https://cdn.svgporn.com/logos/firebase.svg",
      description:
        "Firebase is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "Git",
      icon: "https://cdn.svgporn.com/logos/git-icon.svg",
      description:
        "Git is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "SQL",
      icon: "https://cdn.svgporn.com/logos/mysql-icon.svg",
      description:
        "GitHub is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "Python",
      icon: "https://cdn.svgporn.com/logos/python.svg",
      description:
        "Python is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "C#",
      icon: "https://cdn.svgporn.com/logos/c-sharp.svg",
      description:
        "C# is one of my key strengths. I have been using it for over 10 years now.",
    },
    {
      name: "Figma",
      icon: "https://cdn.svgporn.com/logos/figma.svg",
      description:
        "Figma is one of my key strengths. I have been using it for over 10 years now.",
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
