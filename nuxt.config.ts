// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Nizar Saidi",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/images/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.gstatic.com" },
        //         <link rel="preconnect" href="https://fonts.googleapis.com">
        // <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        // <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet">
        {
          href: "https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&display=swap",
          rel: "stylesheet",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap",
          rel: "stylesheet",
        },
      ],
      meta: [
        { name: "author", content: "Nizar Saidi" },
        { name: "description", content: "Nizar Saidi's portfolio website" },
        {
          name: "keywords",
          content:
            "Nizar Saidi, Portfolio, Web Developer, Frontend Developer, Fullstack Developer, Vue.js, Nuxt.js, TailwindCSS, JavaScript, TypeScript, HTML, CSS, SCSS, SASS, Webpack, Vite, Git, Github, Gitlab, Bitbucket, Docker, Kubernetes, CI/CD, DevOps, Agile, Scrum, Kanban, Jira, Confluence, Trello, Slack, Discord, Zoom, Google Meet, Microsoft Teams, Web Development, Software Development, Software Engineering, Computer Science, Computer Engineering, Information Technology, IT, Computer, Laptop, Smartphone, Tablet, Desktop, Mobile, Responsive, Design, Development, Programming, Coding, Debugging, Testing, Automation, Documentation, Maintenance, Support, Training, Teaching, Learning, Sharing, Collaboration, Communication, Creativity, Innovation, Problem Solving, Critical Thinking, Analytical Thinking, Logical Thinking, Strategic Thinking, Systematic Thinking, Holistic Thinking, Ethical Thinking, Sustainable Thinking, Global Thinking, Human Thinking, Social Thinking, Environmental Thinking, Economic Thinking, Political Thinking, Cultural Thinking, Spiritual Thinking, Personal Thinking, Professional Thinking, Organizational Thinking, Community Thinking, National Thinking, International Thinking, Universal Thinking, Future Thinking, Present Thinking, Past",
        },
        { name: "robots", content: "index, follow" },
        { name: "googlebot", content: "index, follow" },
        { name: "bingbot", content: "index, follow" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "black" },
      ],
    },
  },
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/main.scss" as *;',
        },
      },
    },
  },
  modules: ["@nuxt/image", "nuxt-icon", "@nuxtjs/color-mode", "@nuxtjs/i18n"],
  i18n: {
    locales: ["en", "fr"],
    defaultLocale: "fr",
    compilation: {
      strictMessage: false,
    },
  },
});
