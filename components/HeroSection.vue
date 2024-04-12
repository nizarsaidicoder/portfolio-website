<template>
  <div
    id="hero-section"
    class="section section--hero">
    <div class="hero--container">
      <img
        src="/hero-img.jpg"
        alt="Hero image"
        class="hero--image" />
      <div class="hero--content">
        <div>
          <p class="hero--title">
            Hello,<span style="font-weight: 700"> I'm Nizar.</span>
          </p>
          <h1 class="hero--description">
            Web Developer & Web Designer Based in
            <span class="accent-color70">Strasbourg</span>
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
      gap: 20rem;
    }
    &--image {
      width: 60rem;
      height: 60rem;
    }
    &--content {
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
      align-items: flex-start;
    }
  }
</style>
