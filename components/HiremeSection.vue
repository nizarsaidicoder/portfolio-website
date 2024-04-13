<template>
  <section
    id="contact"
    class="section contact-container">
    <div class="contact--text">
      <h1 class="highlight">Hire me.</h1>
      <p>
        I’m available to build any website you dream of . I can work by myself
        and i’m open to the possibility of cooperation with developers,
        designers and artists.
      </p>

      <a
        href="https://wa.me/744761623?text=I'm%20interested%20in%20your%20car%20for%20sale"
        target="_blank"
        ><Button
          type="primary"
          class="flex items-center gap-4"
          ><Icon
            name="ion:logo-whatsapp"
            class="text-6xl" />Chat In Whatsapp</Button
        ></a
      >
    </div>
    <div class="contact--info">
      <h2>Contacts</h2>
      <div class="contact--info__items">
        <div class="contact--info__item">Strasbourg, France</div>
        <div class="contact--info__item">+33 7 44 76 16 23</div>
        <div class="contact--info__item">nizar.saidi.coder@gmail.com</div>
      </div>
      <div class="contact--info__socials">
        <a
          href="https://www.instagram.com/nizar_liebert/"
          target="_blank"
          ><NuxtImg
            quality="80"
            src="/Instagram.svg"
            alt="instagram link"
        /></a>
        <NuxtImg
          quality="80"
          src="/LinkedIn.svg"
          alt="LinkedIn link" />
        <a
          href="https://github.com/nizarsaidicoder"
          target="_blank"
          ><NuxtImg
            quality="80"
            src="/github.svg"
            alt="Dribbble link"
        /></a>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
  .contact {
    &-container {
      display: flex;
      align-items: center;
      gap: 8rem;
      position: relative;
      justify-content: space-between;
    }
    &--text {
      max-width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3.2rem;
    }
    &--info {
      background-color: $black-color;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $primary-color;
      gap: 3.2rem;
      min-width: 45rem;
      padding: 6.4rem 3.2rem;
      &__items {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 1.6rem;
      }
      &__item {
        font-size: 2.2rem;
        font-weight: 400;
        color: $primary-color;
      }
      &__socials {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3.2rem;
        & img {
          fill: red !important;
          width: 4.6rem;
          height: 4.6rem;
        }
      }
    }
  }
</style>
