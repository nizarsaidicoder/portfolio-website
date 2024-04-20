<template>
  <div
    id="contact-section"
    class="section section--white contact--section">
    <div class="contact--container">
      <h1 class="contact--title highlight">Contact Me</h1>
      <div
        class="flex w-full justify-between items-center max-[600px]:flex-col max-[600px]:gap-12">
        <ContactForm />
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
                src="images/Instagram.svg"
                alt="instagram link"
            /></a>

            <a
              href="https://www.linkedin.com/in/nizar-saidi-5a6b71302/"
              target="_blank"
              ><NuxtImg
                quality="80"
                src="images/LinkedIn.svg"
                alt="LinkedIn link"
            /></a>
            <a
              href="https://github.com/nizarsaidicoder"
              target="_blank"
              ><NuxtImg
                quality="80"
                src="images/github.svg"
                alt="Dribbble link"
            /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .section.contact--section {
    margin-bottom: 0;
  }
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
  @media (min-width: 1660px) {
  }
  @media (max-width: 1280px) {
    .contact {
      &--container {
        gap: 3.2rem;
      }
      &--info {
        min-width: 40rem;
        padding: 5.4rem 2.4rem;
      }
    }
  }
  @media (max-width: 1024px) {
    .contact {
      &--info {
        min-width: 35rem;
        padding: 4.8rem 2.4rem;
      }
    }
  }
  @media (max-width: 768px) {
    .contact {
      &--info {
        min-width: 35rem;
        padding: 4rem 1rem;
        &__items {
          gap: 1.2rem;
        }
        &__item {
          font-size: 1.8rem;
        }
      }
    }
  }
  @media (max-width: 600px) {
    .contact {
      &--container {
        align-items: center;
      }
      &--container {
        flex-direction: column;
        gap: 3.2rem;
      }
    }
  }
  @media (max-width: 500px) {
  }
  .dark-mode .contact--info {
    background-color: $darkbody-color;
    color: $white-color;
  }
</style>
