<template>
  <NavigationBar @toggle-color-mode="toggleColorMode" />
  <HeroSection />
  <AboutSection />
  <TechStackSection />
  <PortfolioSection />
  <CollaborationSection />
  <ContactSection />
  <HiremeSection />
  <Footer />
</template>

<script setup>
  const colorMode = useColorMode();
  const toggleColorMode = () => {
    colorMode.value = colorMode.value === "light" ? "dark" : "light";
  };
  definePageMeta({ colorMode: "dark" });
</script>
<style lang="scss">
  .dark-mode body {
    background-color: $darkblack-color;
    color: $white-color;
  }
</style>
