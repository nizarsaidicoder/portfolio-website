<template>
  <section
    id="hero"
    class="hero--container">
    <div class="blobs">
      <NuxtImg
        quality="80"
        loading="lazy"
        class="hero--blob hero--blob-1"
        src="/blob-1.webp"
        alt="a blob floating" />
      <NuxtImg
        quality="80"
        loading="lazy"
        class="hero--blob hero--blob-2"
        src="/blob-2.webp"
        alt="a blob floating" />
      <NuxtImg
        quality="80"
        loading="lazy"
        class="hero--blob hero--blob-3"
        src="/blob-3.webp"
        alt="a blob floating" />
    </div>

    <div class="hero--container__text">
      <h1 class="heading-primary">
        Creative <span class="highlight">Web Designer</span><br />
        &<br />
        Expert Web Developer
      </h1>
      <h2 class="heading-light">Creativity is my signature</h2>
      <a href="#portfolio"><Button btnType="underline">View my work</Button></a>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
  .hero {
    &--container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 3.2rem auto;
      height: fit-content;
      max-width: 140rem;
      height: 100vh;
      &__text {
        animation: moveInLeft 1s ease-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 3.2rem;
      }
    }
    &--blob {
      position: absolute;
      width: 30%;
      top: 0;
      left: 0;
      &-1 {
        top: -10%;
        left: 0%;
        animation: bounce 8s infinite;
      }
      &-2 {
        top: 0%;
        left: 70%;
        animation: rotate-360 8s infinite;
      }
      &-3 {
        top: 8%;
        left: 30%;
        animation: bounce 8s infinite;
      }
    }
  }
  .blobs {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // z-index: -1;
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
