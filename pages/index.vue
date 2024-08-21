<template>
  <SpeedInsights />
  <NavigationBar @toggle-color-mode="toggleColorMode" />
  <HeroSection />
  <AboutSection />
  <TechStackSection />
  <PortfolioSection />
  <CollaborationSection />
  <ContactSection />
  <Footer />
  <Modal />
</template>

<script setup>
  import { SpeedInsights } from "@vercel/speed-insights/vue";

  const colorMode = useColorMode();
  const toggleColorMode = () => {
    colorMode.value = colorMode.value === "light" ? "dark" : "light";
  };
  definePageMeta({ colorMode: "light" });
</script>
<style lang="scss">
  .dark-mode body {
    background-color: $darkbody-color;
    color: $white-color;
  }
</style>
