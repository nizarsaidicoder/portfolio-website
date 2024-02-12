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
    <UCarousel
      :items="slides"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden"
      :autoplay="true"
      :key="item"
      :prev-button="{
        size: 'xl',
        icon: 'i-heroicons-arrow-left-20-solid',
        class: 'transform translate-x-1/2',
      }"
      :next-button="{
        size: 'xl',
        icon: 'i-heroicons-arrow-right-20-solid',
        class: 'transform -translate-x-1/2',
      }"
      arrows
      indicators>
      <template #default="{ item }">
        <div class="text-center carousel">
          <img
            :src="item.image"
            :alt="item.title"
            draggable="false" />
          <div class="portfolio-project-info">
            <div class="portfolio-project-info-title">{{ item.title }}</div>
            <div class="portfolio-project-info-description">
              {{ item.content }}
            </div>
          </div>
        </div>
      </template>
    </UCarousel>
  </section>
</template>

<script setup>
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
    }
  }
  .carousel {
    position: relative;
  }
  .portfolio-project-info {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    font-size: 1.8rem;
    background-image: linear-gradient(
      to top,
      #000000,
      #0000002e 90%,
      #00000000
    );
    padding: 6.4rem 4.8rem;
    text-align: left;
    &-title {
      font-size: 4.8rem;
      font-weight: 700;
    }
  }
</style>
