<template>
  <div class="tech-card">
    <div class="tech-card--icon">
      <img
        :src="icon"
        alt="Tech Icon" />
    </div>
    <div class="tech-card--text">
      <div class="font-bold">{{ name }}</div>
      <div class="horizontal-divider"></div>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup>
  const props = defineProps({
    name: String,
    icon: String,
    description: String,
    id: Number,
  });
</script>

<style lang="scss">
  .tech-card {
    display: flex;
    position: relative;
    flex-direction: column;
    align-items: center;
    max-width: 32rem;
    padding: 1.6rem;
    gap: 1.6rem;
    border: 2px solid $black-color;
    border-radius: 0.4rem;
    transition: all 0.2s ease-in-out;

    &--icon {
      display: flex;
      align-items: center;
      justify-content: center;

      & img {
        width: 8rem;
        height: 8rem;
      }
    }
    &--text {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.8rem;
      gap: 2rem;
      text-align: center;
    }
    &::before {
      content: "";
      background-color: $black-color;
      position: absolute;
      display: block;
      z-index: -1;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1%;
      border-radius: 0.4rem;
      transition: all 0.2s ease-in-out;
    }
    &:hover {
      transform: translateY(-0.4rem);
      box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.117);
      color: $white-color;
      &::before {
        height: 100%;
      }
      .horizontal-divider {
        background-image: radial-gradient(
          50% 50% at 50% 50%,
          $white-color 0%,
          transparent 100%
        );
      }
    }
  }

  .dark-mode {
    .tech-card {
      border-color: $white-color;
      color: $white-color;
      &::before {
        background-color: $white-color;
      }
      .horizontal-divider {
        background-image: radial-gradient(
          50% 50% at 50% 50%,
          $white-color 0%,
          transparent 100%
        );
      }
      &:hover {
        color: $darkblack-color;
        &::before {
          background-color: $white-color;
        }
        .horizontal-divider {
          background-image: radial-gradient(
            50% 50% at 50% 50%,
            $black-color 0%,
            transparent 100%
          );
        }
      }
    }
  }
  @media (min-width: 1660px) {
    .tech-card {
      max-width: 40rem;
    }
  }
  @media (max-width: 1280px) {
    .tech-card {
      max-width: 28rem;
    }
  }
</style>
