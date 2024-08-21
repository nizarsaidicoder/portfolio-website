<template>
  <div class="project--container">
    <NuxtImg
      quality="80"
      class="project--image"
      :src="'images/' + props.image"
      alt="Project 1" />
    <div class="project--info">
      <h2 class="project--title highlight">{{ props.title }}</h2>
      <p class="project--description">
        {{ props.description }}
      </p>
      <a
        :href="props.link"
        class="project--button"
        target="_blank">
        <Button type="primary">{{ $t("viewProject") }}</Button></a
      >
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    title: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
    link: {
      type: String,
    },
  });
</script>

<style lang="scss">
  .project {
    &--container {
      display: flex;
      gap: 4.8rem;
      justify-content: space-between;
      align-items: center;
      &:nth-child(even) {
        flex-direction: row-reverse;
        .project--image {
          box-shadow: 1.2rem 1.2rem 1.2rem #1111111f;
        }
      }
    }

    &--image {
      max-width: 60rem;
      box-shadow: -1.2rem 1.2rem 1.2rem #11111159;
    }
    &--info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4.8rem;
      max-width: 52rem;
    }
  }
  .project--title.highlight::after {
    bottom: -50%;
  }
  .dark-mode .project--info {
    h2 {
      color: $white-color;
    }
  }
  .dark-mode .project--container {
    .project--image {
      box-shadow: -1.2rem 1.2rem #ffffff;
    }
    &:nth-child(even) {
      .project--image {
        box-shadow: 1.2rem 1.2rem #ffffff;
      }
    }
  }
  @media (min-width: 1660px) {
    .project--container {
      gap: 6.4rem;
    }
    .project--image {
      max-width: 70rem;
    }
    .project--info {
      max-width: 60rem;
    }
  }
  @media (max-width: 1280px) {
    .project--container {
      align-items: flex-start;
      gap: 4.8rem;
    }
    .project--image {
      max-width: 45rem;
    }
    .project--description {
      font-size: 1.8rem;
    }
    .project--info {
      max-width: 44rem;
    }
  }
  @media (max-width: 1024px) {
    .project--container {
      flex-direction: column;
      gap: 4.8rem;
      &:nth-child(even) {
        flex-direction: column;
        .project--image {
          box-shadow: -1.2rem 1.2rem $accent-color;
        }
      }
    }
    .project--image {
      max-width: 80%;
    }
    .project--description {
      font-size: 2.2rem;
    }
    .project--title.highlight::after {
      bottom: -30%;
    }
    .project--info {
      max-width: 80%;
      gap: 3.2rem;
    }
    .project--button {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 768px) {
    .project--container {
      gap: 3.2rem;
    }
    .project--info {
      gap: 3.2rem;
    }
  }
  @media (max-width: 500px) {
    .project--title.highlight::after {
      bottom: 0%;
      height: 1.4rem;
    }
    .project--container {
      align-items: center;
      text-align: center;
      gap: 2.4rem;
    }
    .project--info {
      align-items: center;
      gap: 2.4rem;
    }
  }
</style>
