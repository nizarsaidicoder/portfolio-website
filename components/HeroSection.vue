<template>
  <div
    id="hero-section"
    class="section section--hero">
    <div class="hero--container">
      <!-- <NuxtImg
        v-if="colorMode.value === 'light'"
        src="/images/hero-img.png"
        alt="Hero image"
        class="hero--image" />
      <NuxtImg
        v-else
        src="/images/hero-img-dark.png"
        alt="Hero image"
        class="hero--image" /> -->
      <div class="hero--content">
        <div>
          <p class="hero--title">
            {{ $t("welcome") }},<span class="font-bold">{{ $t("nom") }}</span>
          </p>
          <h1 class="hero--description heading-primary">
            {{ $t("heroDesc") }}
            <span class="accent">Strasbourg</span>
          </h1>
        </div>
        <div class="buttons">
          <a href="#contact-section">
            <Button
              class="hero--button"
              type="primary"
              >{{ $t("heroContactButton") }}</Button
            ></a
          >
          <a href="#portfolio-section">
            <Button
              class="hero--button"
              type="secondary"
              >Portfolio</Button
            ></a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  const colorMode = ref(useColorMode());
</script>

<style lang="scss">
  .buttons {
    display: flex;
    gap: 2.4rem;
  }
  .hero {
    &--container {
      display: flex;
      align-items: center;
      gap: 14rem;
    }
    &--title {
      text-align: center;
      color: $white-color;
    }
    &--description {
      text-align: center;
      color: $white-color;
    }
    &--image {
      width: 50rem;
      height: 50rem;
    }
    &--content {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      align-items: center;
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
