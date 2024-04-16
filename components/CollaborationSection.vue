<template>
  <div
    id="collaboration-section"
    class="section collaboration--section">
    <div class="collaboration--container">
      <div class="collaboration--content">
        <h1 class="collaboration--title highlight">Let's collaborate</h1>
        <p class="collaboration--description">
          Want to create an amazing website with some magic ! I can work with a
          team of developers and designers, or all alone
        </p>
        <Button type="primary"> Contact me </Button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .collaboration {
    &--container {
      display: flex;
      align-items: center;
      gap: 20rem;
      width: 100%;
    }
    &--content {
      display: flex;
      flex-direction: column;
      gap: 4.8rem;
      align-items: center;
      width: 100%;
    }
    &--description {
      font-size: 4rem;
      text-align: center;
      font-weight: 400;
    }
  }
  .dark-mode .collaboration {
    &--description {
      color: $white-color;
    }
  }
  @media (min-width: 1660px) {
  }
  @media (max-width: 1280px) {
    .collaboration {
      &--description {
        font-size: 3.2rem;
      }
    }
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
    .collaboration {
      &--description {
        font-size: 2.8rem;
      }
    }
  }
  @media (max-width: 500px) {
    .collaboration {
      &--description {
        font-size: 2.4rem;
      }
    }
  }
</style>
