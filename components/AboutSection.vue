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
        </div>
        <img
          src="/images/about-img.png"
          alt="About image"
          class="about-image" />
      </div>
      <a
        href="/CV.pdf"
        download="Nizar_Saidi_CV.pdf"
        ><Button
          type="primary"
          class="mt-8"
          >Download CV</Button
        ></a
      >
    </div>
  </div>
</template>

<script setup></script>

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
</style>
