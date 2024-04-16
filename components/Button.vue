<template>
  <button :class="computedClass">
    <slot></slot>
  </button>
</template>

<script setup>
  const props = defineProps({
    type: {
      type: String,
      default: "button",
    },
  });
  const computedClass = computed(() => {
    return `button button--${props.type}`;
  });
</script>

<style lang="scss">
  .button {
    padding: 1.4rem 2.8rem;
    border: 1px solid $black-color;
    border-radius: 3px;
    cursor: pointer;
    font-size: 2rem;
    font-weight: 500;
    transition: all 0.3s ease-in-out;
    &--primary {
      background-color: $accent-color;
      &:hover {
        background-color: darken($black-color, 10%);
        color: $white-color;
      }
    }
    &--secondary {
      background-color: $accent-color;
      color: $white-color;
      &:hover {
        background-color: darken($accent-color, 10%);
      }
    }
  }
  .dark-mode .button {
    &--primary {
      background-color: $darkaccent-color;
      color: $black-color;
      &:hover {
        background-color: lighten($accent-color, 80%);
        color: $black-color;
      }
    }
    &--secondary {
      background-color: $darkaccent-color;
      color: $black-color;
      &:hover {
        background-color: lighten($accent-color, 10%);
      }
    }
  }
  @media (max-width: 1440px) {
    .button {
      padding: 1.2rem 2.4rem;
      font-size: 2.4rem;
    }
  }
  @media (max-width: 1280px) {
    .button {
      padding: 1rem 2rem;
      font-size: 2rem;
    }
  }
  @media (max-width: 1024px) {
    .button {
      padding: 0.8rem 1.6rem;
      font-size: 1.8rem;
    }
  }
  @media (max-width: 768px) {
    .button {
      padding: 0.6rem 1.2rem;
      font-size: 1.6rem;
    }
  }
</style>
