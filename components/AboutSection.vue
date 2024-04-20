<template>
  <div id="about-section">
    <div class="section section--white about-container">
      <h1 class="about-title highlight">About me</h1>
      <div class="about-content">
        <div class="about-text">
          <p class="about-description">
            I'm a web developer and designer studying computer science at the
            <span class="highlight"> University of Strasbourg </span>.
          </p>
          <p class="about-description">
            Passionate about crafting impactful digital experiences, I
            specialize in
            <span class="highlight">blending creativity</span> with cutting-edge
            technology to create sleek websites and intuitive interfaces.
          </p>
          <p class="about-description">
            <span class="highlight"> Outside of my studies </span>, I'm
            dedicated to honing my craft through independent coding projects and
            design explorations.
          </p>
          <a
            href="/CV.pdf"
            download="Nizar_Saidi_CV.pdf"
            ><Button
              type="primary"
              class="mt-8 about-button"
              >Download CV</Button
            ></a
          >
        </div>
        <img
          v-if="colorMode.value === 'light'"
          src="/images/about-img.png"
          alt="About image"
          class="about-image" />
        <img
          v-else
          src="/images/about-img-dark.jpg"
          alt="About image"
          class="about-image" />
      </div>
    </div>
  </div>
</template>

<script setup>
  const colorMode = ref(useColorMode());
</script>

<style lang="scss">
  .about {
    &-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.2rem;
    }
    &-content {
      display: flex;
      gap: 2.4rem;
      justify-content: space-between;
      align-items: center;
      width: 100%;
    }
    &-text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 1.6rem;
      max-width: 52rem;
    }
    &-description {
      color: #666;
    }
    &-image {
      max-width: 40rem;
    }
  }
  .dark-mode {
    .about {
      &-description {
        color: $white-color;
      }
    }
  }
  @media (min-width: 1800px) {
    .about {
      &-content {
        gap: 0rem;
      }
      &-text {
        max-width: 50%;
        font-size: 2.4rem;
      }
      &-image {
        max-width: 40%;
      }
    }
  }
  @media (max-width: 1280px) {
    .about {
      &-description {
        max-width: 45rem;
        font-size: 1.8rem;
      }
      &-image {
        max-width: 35rem;
      }
    }
  }
  @media (max-width: 1024px) {
    .about {
      &-description {
        max-width: 40rem;
        font-size: 1.6rem;
      }
      &-image {
        max-width: 30rem;
      }
    }
  }
  @media (max-width: 768px) {
    .about {
      &-description {
        max-width: 35rem;
        font-size: 1.4rem;
      }
      &-image {
        max-width: 25rem;
        margin-bottom: 4rem;
      }
    }
  }
  @media (max-width: 600px) {
    .about {
      &-container {
        align-items: center;
        gap: 2rem;
      }
      &-content {
        align-items: flex-start;
        gap: 2rem;
      }
      &-description {
        font-size: 1.2rem;
        max-width: 30rem;
      }
      &-image {
        max-width: 20rem;
        margin-top: 2rem;
      }
      &-button {
        margin-top: 0.4rem !important;
        align-self: flex-start;
      }
    }
  }
  @media (max-width: 480px) {
    .about {
      &-content {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
      &-text {
        align-items: center;
        text-align: center;
      }
      &-description {
        text-align: center;
        max-width: 42rem;
      }
      &-image {
        display: none;
      }
    }
  }
</style>
