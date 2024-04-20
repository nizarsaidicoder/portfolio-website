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
        "With over 6 years of experience, HTML has been an integral part of my coding journey.",
    },
    {
      name: "CSS3",
      icon: "https://cdn.svgporn.com/logos/css-3.svg",
      description:
        "For over a decade, I've been shaping web aesthetics with CSS.",
    },
    {
      name: "JavaScript",
      icon: "https://cdn.svgporn.com/logos/javascript.svg",
      description:
        "JavaScript is my go-to language for interactive web development.",
    },
    {
      name: "Vue.js",
      icon: "https://cdn.svgporn.com/logos/vue.svg",
      description:
        "Venturing into Vue.js for 2 years, I've marveled at its simplicity and power.",
    },
    {
      name: "React",
      icon: "https://cdn.svgporn.com/logos/react.svg",
      description:
        "React is a good friend of mine, but Vue.js is my best friend.",
    },
    {
      name: "Nuxt.js",
      icon: "https://cdn.svgporn.com/logos/nuxt-icon.svg",
      description:
        "Nuxt.js is my go-to framework for building static and server-rendered applications using Vue.js.",
    },
    {
      name: "Tailwind CSS",
      icon: "https://cdn.svgporn.com/logos/tailwindcss-icon.svg",
      description:
        "Tailwind CSS is my favorite utility-first CSS framework. I've been using it for over 4 years now.",
    },
    {
      name: "Bootstrap",
      icon: "https://cdn.svgporn.com/logos/bootstrap.svg",
      description:
        "If you don't need an ultra-customized design, Bootstrap is a great choice for rapid prototyping. I'm good at it too.",
    },
    {
      name: "Sass",
      icon: "https://cdn.svgporn.com/logos/sass.svg",
      description:
        "Sass is CSS with superpowers. Perfect for collaboration and maintainability. I use it a lot too.",
    },

    {
      name: "MongoDB",
      icon: "https://cdn.svgporn.com/logos/mongodb.svg",
      description:
        "MongoDB is my go-to database for NoSQL. Simple, flexible, and scalable.",
    },
    {
      name: "Firebase",
      icon: "https://cdn.svgporn.com/logos/firebase.svg",
      description:
        "Firebase is my go-to platform for building web and mobile applications. It's easy to use and has a lot of features.",
    },
    {
      name: "Git",
      icon: "https://cdn.svgporn.com/logos/git-icon.svg",
      description:
        "I use Git for version control. It's a great tool for collaboration and code management.",
    },
    {
      name: "SQL",
      icon: "https://cdn.svgporn.com/logos/mysql-icon.svg",
      description:
        "SQL is my go-to language for relational databases. I've got a good grasp of it.",
    },
    {
      name: "Python",
      icon: "https://cdn.svgporn.com/logos/python.svg",
      description:
        "Python, I know it, I love it, I use it. It's a great language for web development.",
    },
    {
      name: "C#",
      icon: "https://cdn.svgporn.com/logos/c-sharp.svg",
      description: "C# is my go-to language for building Windows applications.",
    },
    {
      name: "Figma",
      icon: "https://cdn.svgporn.com/logos/figma.svg",
      description:
        "fI use Figma for UI/UX design. It's a great tool for prototyping and collaboration.",
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
