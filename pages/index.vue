<template>
  <NavigationBar
    @toggle-color-mode="toggleColorMode"
    :color-mode="colorMode" />
  <HeroSection />
  <AboutSection />
  <TechStackSection />
  <PortfolioSection />
  <CollaborationSection />
  <ContactSection />
  <Footer />
</template>

<script setup>
  const colorMode = useColorMode();
  const toggleColorMode = () => {
    colorMode.value = colorMode.value === "light" ? "dark" : "light";
  };
  definePageMeta({ colorMode: "light" });
</script>
<style lang="scss">
  .dark-mode body {
    background-color: $darkblack-color;
    color: $white-color;
  }
</style>
