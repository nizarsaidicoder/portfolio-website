<template>
  <NavigationBar />
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
  definePageMeta({ colorMode: "light" });
</script>
<style lang="scss">
  .dark-mode body {
    background-color: $darkblack-color;
    color: $white-color;
  }
</style>
