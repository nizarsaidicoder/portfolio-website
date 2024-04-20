<template>
  <div
    id="hero-section"
    class="section section--hero">
    <div class="hero--container">
      <img
        src="/images/hero-img.jpg"
        alt="Hero image"
        class="hero--image" />
      <div class="hero--content">
        <div>
          <p class="hero--title">
            {{ $t("welcome") }},<span class="font-bold"> I'm Nizar.</span>
          </p>
          <h1 class="hero--description heading-primary">
            Web Developer & Web Designer Based in
            <span class="text-blue-400">Strasbourg</span>
          </h1>
        </div>
        <Button
          class="hero--button"
          type="primary"
          >Contact me</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .hero {
    &--container {
      display: flex;
      align-items: center;
      gap: 14rem;
    }
    &--image {
      width: 50rem;
      height: 50rem;
    }
    &--content {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      align-items: flex-start;
    }
  }

  @media (max-width: 1440px) {
    .hero {
      &--container {
        gap: 10rem;
      }
      &--image {
        width: 45rem;
        height: 45rem;
      }
    }
  }
  @media (max-width: 1280px) {
    .hero {
      &--container {
        gap: 8rem;
      }
      &--image {
        width: 40rem;
        height: 40rem;
      }
    }
  }
  @media (max-width: 1024px) {
    .hero {
      &--container {
        gap: 6rem;
      }
      &--image {
        width: 35rem;
        height: 35rem;
      }
    }
  }
  @media (max-width: 768px) {
    .hero {
      &--container {
        flex-direction: column;
        gap: 4rem;
      }
      &--image {
        display: none;
      }
      &--content {
        align-items: center;
        text-align: center;
        max-width: 60rem;
      }
    }
  }
  @media (max-width: 500px) {
  }
</style>
