<template>
  <section
    id="collaboration"
    class="collaboration-container">
    <div class="cubes">
      <NuxtImg
        quality="70"
        loading="lazy"
        class="cube cube-1"
        src="/cube-1.webp"
        alt="cube floating and rotating" />
      <NuxtImg
        quality="70"
        loading="lazy"
        class="cube cube-2"
        src="/cube-2.webp"
        alt="cube floating and rotating" />
    </div>
    <div class="collaboration--text">
      <h2 class="heading-strong highlight">Collaboration.</h2>
      <p class="text-xl center-text">
        Want to create an amazing website with some magic !
      </p>
      <a href="#contact"><Button btnType="underline">Let's talk</Button></a>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
  .collaboration {
    &-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 6.4rem auto;
      gap: 3.2rem;
      position: relative;
      height: 100vh;
    }
    &--text {
      max-width: 120rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.2rem;
    }
  }
  .cubes {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // z-index: -1;
  }
  .cube {
    position: absolute;
    width: 50%;

    top: 0;
    left: 0;
    z-index: -2;
    animation: rotate 8s infinite;
    &-1 {
      top: -10%;
      left: 60%;
    }
    &-2 {
      top: -10%;
      left: -10%;
    }
  }
  .highlight {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 6%;
      width: 92%;
      height: 60%;
      background-color: $accent-color;
      z-index: -1;
    }
  }
</style>
