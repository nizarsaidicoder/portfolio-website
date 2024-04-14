<template>
  <div
    id="contact-section"
    class="section section--white contact--section">
    <div class="contact--container">
      <h1 class="contact--title highlight">Contact Me</h1>
      <div class="flex w-full justify-between items-center">
        <ContactForm />
        <img
          class="contact--icon"
          src="/images/send-icon.svg"
          alt="Send Icon" />
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .contact {
    &--container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 4.8rem;
    }
    &--icon {
      width: 100%;
      max-width: 35rem;
    }
  }
</style>
