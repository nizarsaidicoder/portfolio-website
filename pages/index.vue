<template>
  <NavigationBar />
  <HeroSection />
  <AboutSection />
  <TechStackSection />
</template>

<script setup>
  const colorMode = useColorMode();
  definePageMeta({ colorMode: "light" });

  // export default {
  //   mounted() {
  //     // Accessing elements using querySelectorAll
  //     const elements = document.querySelectorAll("#__nuxt");
  //     elements.forEach((element) => {
  //       recursivelyChangeColor(element, "#fff5e2", "#0f0f0f");
  //     });
  //   },
  // };

  // function recursivelyChangeColor(element, oldColor, newColor) {
  //   if (
  //     window.getComputedStyle(element).backgroundColor == "rgb(255, 245, 226)"
  //   ) {
  //     element.style.backgroundColor = newColor;
  //   }
  //   // Check if the element has the old color
  //   // if (element.style.backgroundColor === oldColor) {
  //   //   // Change the color to the new color
  //   //   element.style.backgroundColor = newColor;
  //   // }
  //   // Recursively check the child elements
  //   const children = element.children;
  //   for (let i = 0; i < children.length; i++) {
  //     recursivelyChangeColor(children[i], oldColor, newColor);
  //   }
  // }
</script>
<style lang="scss">
  .dark-mode body {
    background-color: $darkblack-color;
    color: $white-color;
  }
</style>
