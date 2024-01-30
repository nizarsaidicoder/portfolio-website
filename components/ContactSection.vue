<template>
  <section
    id="contact"
    class="contact-container">
    <div class="contact--text">
      <h2 class="heading-light">
        <span class="highlight">Unlock </span> Your Digital Vision with Me!
      </h2>
      <p class="text">
        I'm passionate web developer on a mission to turn your creative website
        dreams into a digital reality. From crafting individual masterpieces to
        collaborating with developers, designers, and artists, I bring
        dedication and innovation to every project.
      </p>
      <p class="text">
        Your unique vision deserves a tailored approach, and that's exactly what
        I offer. Whether it's a sleek and efficient solo project or a dynamic
        collaboration, I'm committed to making your digital dreams come true.
      </p>
    </div>
    <div class="contact--info">
      <div class="contact--cards">
        <div class="contact--card contact--card--1"></div>
        <div class="contact--card contact--card--2"></div>
        <div class="contact--card contact--card--3"></div>
      </div>
      <h2 class="heading-light">Contact.</h2>
      <div class="contact--info__items">
        <div class="contact--info__item">Strasbourg, France</div>
        <div class="contact--info__item">+33 7 44 76 16 23</div>
        <div class="contact--info__item">nizar.saidi.coder@gmail.com</div>
      </div>
      <div class="contact--info__socials">
        <img
          src="/Instagram.svg"
          alt="instagram link" />
        <img
          src="/LinkedIn.svg"
          alt="LinkedIn link" />
        <img
          src="/Twitter.svg"
          alt="Twitter link" />
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss">
  .contact {
    &-container {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 140rem;
      margin: 6.4rem auto;
      gap: 8rem;
      position: relative;
      height: 100vh;
    }
    &--text {
      max-width: 50%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 3.2rem;
    }
    &--info {
      position: relative;
      width: fit-content;
      background-color: $secondary-color;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      color: $primary-color;
      gap: 3.2rem;
      padding: 0 3.2rem 6.4rem 3.2rem;
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
          width: 4.6rem;
          height: 4.6rem;
        }
      }
    }
    &--cards {
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
      background-color: red;
      width: 100%;
      height: 100%;
    }
    &--card {
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: -1;
      &--1 {
        background-image: linear-gradient(to right bottom, #5621b8, #216ac1);
        animation: rotate 8s infinite;
      }
      &--2 {
        background-image: linear-gradient(to right bottom, #223873, #5921b9);
        animation: rotate 9s infinite;
      }
      &--3 {
        background-image: linear-gradient(to left bottom, #9badde, #491d94);
        animation: rotate 10s infinite;
      }
    }
  }
  .highlight {
    position: relative;
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 6%;
      width: 92%;
      height: 60%;
      background-color: $accent-color;
      z-index: -1;
    }
  }
</style>
