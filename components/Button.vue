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
</style>
