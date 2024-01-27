<template>
  <NavigationBar />
  <section
    id="home"
    class="home--container">
    <div class="blobs">
      <img
        class="home--blob home--blob-1"
        src="/blob-1.webp"
        alt="a blob floating" />
      <img
        class="home--blob home--blob-2"
        src="/blob-2.webp"
        alt="a blob floating" />
      <img
        class="home--blob home--blob-3"
        src="/blob-3.webp"
        alt="a blob floating" />
    </div>

    <div class="home--container__text">
      <h1 class="heading-primary">
        Creative <span class="highlight">Web Designer</span><br />
        &<br />
        Expert Web Developer
      </h1>
      <h2 class="heading-light">Creativity is my signature</h2>
      <Button btnType="underline">View my work</Button>
    </div>
  </section>
  <section
    id="about"
    class="about--container">
    <div class="about--container__image">
      <div class="about--container__image--img">
        <img
          src="/about-img.webp"
          alt="about image" />
      </div>
    </div>
    <div class="about--container__text">
      <h2 class="heading-secondary"><span class="highlight">About</span></h2>
      <div class="about--container__text--tags">
        <Tag>Developer</Tag> <Tag color="#816">Designer</Tag>
      </div>

      <p class="text">
        My name is Nizar, a student in the <b>University of Strasbourg</b> and a
        passionate <span class="highlight">freelancer</span> bringing you
        programming and design from the future using modern technologies with
        full functionallity.
      </p>
    </div>
  </section>
  <section
    id="portfolio"
    class="portfolio--container">
    <div class="portfolio--container__text">
      <h2 class="heading-secondary">
        <span class="highlight">Portfolio</span>
      </h2>
      <h3 class="heading-light">Jump into my works</h3>
    </div>
    <VueperSlides
      :parallax="-1"
      fixed-height="64rem">
      <vueper-slide
        v-for="i in 3"
        title="EZWIN"
        content="The European languages are members of the same family. Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. 
"
        :key="i"
        :image="'/slide-' + i + '.webp'" />
    </VueperSlides>
  </section>
  <section
    id="collaboration"
    class="collaboration-container">
    <div class="cubes">
      <img
        class="cube cube-1"
        src="/cube-1.webp"
        alt="cube floating and rotating" />
      <img
        class="cube cube-2"
        src="/cube-2.webp"
        alt="cube floating and rotating" />
    </div>
    <div class="collaboration--text">
      <h2 class="heading-strong highlight">Collaboration.</h2>
      <p class="text-xl center-text">
        Want to create an amazing website with some magic !
      </p>
      <Button btnType="underline">Let's talk</Button>
    </div>
  </section>
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
  <footer class="footer">
    <div class="footer__logo">NIZAR SAIDI</div>
    <div class="footer__text">
      <p class="">
        © 2024 Nizar Saidi. All rights reserved. Made with ❤️ in Strasbourg,
        France.
      </p>
    </div>
  </footer>
</template>

<script setup>
  import { VueperSlides, VueperSlide } from "vueperslides";
  import "vueperslides/dist/vueperslides.css";
</script>

<style lang="scss">
  .vueperslide {
    position: relative;
    height: 100%;
    &__content-wrapper {
      position: absolute;
      z-index: 2;
      top: 10%;
      left: 8%;
      display: flex;
      color: $secondary-color;
      text-align: left;
    }
    &__title {
      font-size: 4.8rem;
      font-weight: 700;
      margin-bottom: 1.6rem;
    }
    &__content {
      font-size: 1.8rem;
      font-weight: 500;
      line-height: 1.6;
      margin-bottom: 3.2rem;
      max-width: 50%;
    }
    &::after {
      content: "";
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
      background-image: linear-gradient(
        to top,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0.1)
      );
      top: 0;
      left: 0;
    }
  }
  .vueperslide__content-wrapper:not(
      .vueperslide__content-wrapper--outside-top
    ):not(.vueperslide__content-wrapper--outside-bottom) {
    align-items: flex-start;
    text-align: left;
  }
  .home {
    &--container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 3.2rem auto;
      height: fit-content;
      max-width: 140rem;
      height: 100vh;
      &__text {
        animation: moveInLeft 1s ease-out;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        gap: 3.2rem;
      }
    }
    &--blob {
      position: absolute;
      width: 30%;
      top: 0;
      left: 0;
      &-1 {
        top: -10%;
        left: 0%;
        animation: bounce 8s infinite;
      }
      &-2 {
        top: 0%;
        left: 70%;
        animation: rotate-360 8s infinite;
      }
      &-3 {
        top: 8%;
        left: 30%;
        animation: bounce 8s infinite;
      }
    }
  }
  @keyframes moveRandomly {
    0% {
      transform: translate(0, 0);
    }
    25% {
      transform: translate(10%, -10%);
    }
    50% {
      transform: translate(-10%, 10%);
    }
    75% {
      transform: translate(-10%, -10%);
    }
    100% {
      transform: translate(10%, 10%);
    }
  }
  .about {
    &--container {
      display: flex;
      justify-content: center;
      align-items: center;
      max-width: 140rem;
      margin: 12.8rem auto;
      gap: 4.8rem;
      &__image {
        position: relative;
        width: 100%;
        &::after {
          content: "";
          position: absolute;
          top: -33%;
          right: -36%;
          width: 100%;
          height: 100%;
          background-image: url("/blob-img-1.webp");
          background-size: contain;
          background-repeat: no-repeat;
          z-index: -1;
          animation: move-x 10s infinite;
        }
        &::before {
          content: "";
          position: absolute;
          top: 30%;
          right: 10%;
          width: 100%;
          height: 100%;
          background-image: url("/blob-img-1.webp");
          background-size: contain;
          background-repeat: no-repeat;
          z-index: -1;
          animation: rotate 10s infinite;
        }
      }
      &__image--img {
        background-image: linear-gradient(to right bottom, #8449e7, #216ac1);
        border-radius: 200px;
        padding-top: 16rem;
        width: 80%;
        height: 100%;
        overflow: hidden;
        & img {
          margin-bottom: -2rem;
          height: 100%;
          width: 100%;
        }
      }
      &__text {
        display: flex;
        flex-direction: column;
        max-width: 55%;
        gap: 3.2rem;
        &--tags {
          display: flex;
          gap: 1.6rem;
        }
      }
    }
  }
  .portfolio {
    &--container {
      margin: 12.8rem auto;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.2rem;
      &__text {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.2rem;
      }
      & .vueperslides {
        width: 100%;
        height: 100%;
        & .vueperslides__container {
          width: 100%;
          height: 100%;
          & .vueperslides__slide {
            width: 100%;
            height: 100%;
            & img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
          }
        }
      }
    }
  }
  .collaboration {
    &-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin: 6.4rem auto;
      gap: 3.2rem;
      position: relative;
      height: 100vh;
    }
    &--text {
      max-width: 120rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 3.2rem;
    }
  }
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
  .footer {
    display: flex;
    flex-direction: column;
    // justify-content: center;
    // align-items: center;
    &__logo {
      font-size: 3.2rem;
      display: block;
      font-weight: 300;
      margin-left: 1rem;
      border-bottom: $secondary-color 2px solid;
    }
    &__text {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-size: 1.8rem;
      align-self: flex-end;
      margin: 1rem 0;
    }
  }
  .blobs {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // z-index: -1;
  }
  .cubes {
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    // z-index: -1;
  }
  .cube {
    position: absolute;
    width: 50%;

    top: 0;
    left: 0;
    z-index: -2;
    animation: rotate 8s infinite;
    &-1 {
      top: -10%;
      left: 60%;
    }
    &-2 {
      top: -10%;
      left: -10%;
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
  @keyframes moveInLeft {
    0% {
      opacity: 0;
      transform: translateX(-10rem);
    }
    80% {
      transform: translateX(1rem);
    }
    100% {
      opacity: 1;
      transform: translate(0);
    }
  }
  @keyframes bounce {
    0% {
      transform: translateY(20rem);
    }
    50% {
      transform: translateY(0rem);
    }
    100% {
      transform: translateY(20rem);
    }
  }
  @keyframes move-x {
    0% {
      transform: translateX(-10rem);
    }
    50% {
      transform: translateX(0rem);
    }
    100% {
      transform: translateX(-10rem);
    }
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(30deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes rotate-360 {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(360deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
</style>
