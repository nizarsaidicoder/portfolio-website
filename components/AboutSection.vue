<template>
  <section
    id="about"
    class="about--container">
    <div class="about--container__image">
      <div class="about--container__image--img">
        <NuxtImg
          src="/about-img.webp"
          alt="about image" />
      </div>
    </div>
    <div class="about--container__text">
      <h2 class="heading-secondary"><span class="highlight">About</span></h2>
      <div class="about--container__text--tags">
        <Tag>Developer</Tag> <Tag color="#816">Designer</Tag>
      </div>

      <p class="text">
        My name is Nizar, a student in the <b>University of Strasbourg</b> and a
        passionate <span class="highlight">freelancer</span> bringing you
        programming and design from the future using modern technologies with
        full functionallity.
      </p>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
  .about {
    &--container {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 140rem;
      margin: 12.8rem auto;
      gap: 4.8rem;
      &__image {
        position: relative;
        width: 100%;
        &::after {
          content: "";
          position: absolute;
          top: -33%;
          right: -36%;
          width: 100%;
          height: 100%;
          background-image: url("/blob-img-1.webp");
          background-size: contain;
          background-repeat: no-repeat;
          z-index: -1;
          animation: move-x 10s infinite;
        }
        &::before {
          content: "";
          position: absolute;
          top: 30%;
          right: 10%;
          width: 100%;
          height: 100%;
          background-image: url("/blob-img-1.webp");
          background-size: contain;
          background-repeat: no-repeat;
          z-index: -1;
          animation: rotate 10s infinite;
        }
      }
      &__image--img {
        background-image: linear-gradient(to right bottom, #8449e7, #216ac1);
        border-radius: 200px;
        padding-top: 16rem;
        width: 80%;
        height: 100%;
        overflow: hidden;
        & img {
          margin-bottom: -2rem;
          height: 100%;
          width: 100%;
        }
      }
      &__text {
        display: flex;
        flex-direction: column;
        max-width: 55%;
        gap: 3.2rem;
        &--tags {
          display: flex;
          gap: 1.6rem;
        }
      }
    }
  }
</style>
