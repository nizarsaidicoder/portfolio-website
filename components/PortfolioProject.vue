<template>
  <div class="project--container">
    <img
      class="project--image"
      :src="'images/' + props.image"
      alt="Project 1" />
    <div class="project--info">
      <h2 class="project--title highlight">{{ props.title }}</h2>
      <p>
        {{ props.description }}
      </p>
      <a
        :href="props.link"
        target="_blank">
        <Button type="primary">View Project</Button></a
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
          box-shadow: 1.2rem 1.2rem $accent-color;
        }
      }
    }

    &--image {
      max-width: 60rem;
      box-shadow: -1.2rem 1.2rem $accent-color;
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
      box-shadow: -1.2rem 1.2rem $darkaccent-color;
    }
    &:nth-child(even) {
      .project--image {
        box-shadow: 1.2rem 1.2rem $darkaccent-color;
      }
    }
  }
</style>
