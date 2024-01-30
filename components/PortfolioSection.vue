<template>
  <section
    id="portfolio"
    class="portfolio--container">
    <div class="portfolio--container__text">
      <h2 class="heading-secondary">
        <span class="highlight">Portfolio</span>
      </h2>
      <h3 class="heading-light">Jump into my works</h3>
    </div>
    <VueperSlides
      :parallax="-1"
      fixed-height="64rem">
      <vueper-slide
        v-for="slide in slides"
        :title="slide.title"
        :content="slide.content"
        :key="slide.id"
        :image="slide.image" />
    </VueperSlides>
  </section>
</template>

<script setup>
  import { VueperSlides, VueperSlide } from "vueperslides";
  import "vueperslides/dist/vueperslides.css";
  const slides = [
    {
      id: 0,
      title: "Web Design",
      image: "/slide-1.webp",
      content:
        "A collection of designs that I made for my clients, I use Figma to design my websites and I'm very good at it.",
    },
    {
      id: 1,
      title: "Jeux de soc et thés",
      image: "/slide-2.webp",
      content:
        "A school project that showcase a website that sells board games and tea, it have a convivial design and a good UX.",
    },
    {
      id: 2,
      title: "EZWIN",
      image: "/slide-3.webp",
      content:
        "A school project that explains an algorithm that compresses images (bmp) using SEDT, the website was made by me and two other friends, minimalistic and well done.",
    },
  ];
</script>

<style lang="scss">
  .vueperslide {
    position: relative;
    height: 100%;
    &__content-wrapper {
      position: absolute;
      z-index: 2;
      top: 10%;
      left: 8%;
      display: flex;
      color: $secondary-color;
      text-align: left;
    }
    &__title {
      font-size: 4.8rem;
      font-weight: 700;
      margin-bottom: 1.6rem;
    }
    &__content {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 1.6;
      margin-bottom: 3.2rem;
      max-width: 50%;
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.1)
      );
      top: 0;
      left: 0;
    }
  }
  .vueperslide__content-wrapper:not(
      .vueperslide__content-wrapper--outside-top
    ):not(.vueperslide__content-wrapper--outside-bottom) {
    align-items: flex-start;
    text-align: left;
  }

  .portfolio {
    &--container {
      margin: 12.8rem auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.2rem;
      &__text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.2rem;
      }
      & .vueperslides {
        width: 100%;
        height: 100%;
        & .vueperslides__container {
          width: 100%;
          height: 100%;
          & .vueperslides__slide {
            width: 100%;
            height: 100%;
            & img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
</style>
