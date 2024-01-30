<template>
  <div
    class="tag"
    :style="'box-shadow: 0.6rem 0.8rem 0rem 0rem ' + color">
    <slot></slot>
  </div>
</template>

<script setup>
  const props = defineProps({
    color: {
      type: String,
      default: "accent",
    },
  });
</script>

<style lang="scss">
  .tag {
    display: inline-block;
    padding: 0.6rem 2.4rem;

    background-color: $secondary-color;
    border-radius: 4px;
    color: $primary-color;
    font-size: 2.4rem;
    box-shadow: 0.6rem 0.8rem 0rem 0rem $accent-color;
  }
</style>
