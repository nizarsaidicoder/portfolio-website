<template>
  <nav
    class="navigation"
    :class="{ scrolled: isScrolled }">
    <div class="navigation--logo">
      <NuxtImg
        quality="90"
        v-if="color.value == 'light'"
        src="/images/Logo.svg"
        alt="logo" />
      <NuxtImg
        quality="90"
        v-else
        src="/images/Logo-dark.svg"
        alt="logo" />
    </div>
    <Icon
      name="heroicons:bars-3-bottom-right-16-solid"
      class="navigation--menu navigation--menu__opener"
      @click="toggleMenu"></Icon>
  </nav>
  <nav
    class="navigation--popup"
    :class="isOpen ? '' : ' closed'">
    <ul class="navigation--items">
      <li>
        <a
          href="#hero-section"
          class="navigation--item underline"
          >Home</a
        >
      </li>
      <li>
        <a
          href="#about-section"
          class="navigation--item underline"
          >About</a
        >
      </li>
      <li>
        <a
          href="#portfolio-section"
          class="navigation--item underline"
          >Portfolio</a
        >
      </li>
      <!-- <a
        href="#"
        class="navigation--item underline"
        >Blog</a
      > -->
      <li>
        <a
          href="#contact-section"
          class="navigation--item underline"
          >Contact</a
        >
      </li>
      <ul class="navigation--socials">
        <li>
          <a
            href="https://www.github.com/nizarsaidicoder"
            target="_blank"
            class="navigation--social"
            >Github</a
          >
        </li>
        <!-- <a
          href="#"
          class="navigation--social"
          >Dribbble</a
        > -->
        <li>
          <a
            href="https://www.instagram.com/nizar_liebert/"
            target="_blank"
            class="navigation--social"
            >Instagram</a
          >
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/nizar-saidi-5a6b71302/"
            target="_blank"
            class="navigation--social"
            >LinkedIn</a
          >
        </li>
      </ul>
      <div class="flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <span class="mode">Color Mode</span>
          <ToggleSwitch
            @handle-color-mode="toggleColorMode"
            class="py-16"></ToggleSwitch>
        </div>
      </div>
    </ul>
    <Icon
      name="heroicons:x-mark-solid"
      class="navigation--menu navigation--menu__closer"
      @click="toggleMenu"></Icon>
  </nav>
</template>

<script setup>
  const emit = defineEmits(["toggle-color-mode"]);
  const isOpen = ref(false);
  const toggleMenu = () => (isOpen.value = !isOpen.value);
  const isScrolled = ref(0);
  const color = ref(useColorMode());
  const toggleColorMode = () => {
    emit("toggle-color-mode");
  };
  const handleScroll = () => {
    if (window.scrollY > 300) {
      isScrolled.value = true;
    } else {
      isScrolled.value = false;
    }
  };
  onMounted(() => {
    window.addEventListener("scroll", handleScroll);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("scroll", handleScroll);
  });
</script>

<style lang="scss">
  .scrolled {
    background-color: $white-color !important;
    width: 100% !important;
    margin: 0 !important;
    padding: 0.6rem 9.6rem !important;
  }
  .dark-mode .scrolled {
    background-color: $darkblack-color !important;
  }
  .navigation {
    display: flex;
    position: sticky;
    top: 0;
    background-color: $primary-color;
    z-index: 1000;
    padding: 0;
    width: calc(100% - 24rem);
    align-items: center;
    justify-content: space-between;
    margin: 1.2rem 12rem;
    border-bottom: $black-color 2px solid;
    transition: all 0.3s;
    &--logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &--menu {
      width: 3.6rem;
      height: 3.6rem;
      cursor: pointer;
      &__closer {
        margin-top: 3rem;
        width: 4.8rem;
        height: 4.8rem;
      }
    }
    &--popup {
      position: fixed;
      z-index: 100000;
      display: flex;
      justify-content: space-between;
      padding: 0 12rem;
      top: 0;
      right: 0;
      width: 70vw;
      height: 100vh;
      background-color: $darkblack-color;
      color: $white-color;
      animation: slide-in 0.3s forwards;
    }
    &--items {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 4.8rem;
    }
    &--item {
      font-size: 6.4rem;
      font-weight: 700;
      line-height: 120%;
      letter-spacing: 1.28px;
      text-transform: uppercase;
      cursor: pointer;
    }
    &--socials {
      display: flex;
      gap: 6.4rem;
    }
    &--social {
      font-size: 1.6rem;
      font-weight: 400;
      letter-spacing: 0.96px;
      cursor: pointer;
      list-style: none;
    }
  }
  .dark-mode .navigation {
    background-color: $darkbody-color;
    border-bottom: $white-color 2px solid;
    &--item {
      color: $white-color;
    }
    &--social {
      color: $white-color;
    }
  }
  .hidden {
    display: none;
  }
  .closed {
    animation: slide-out 0.3s forwards;
  }
  @keyframes slide-in {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0);
    }
  }

  @keyframes slide-out {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(100%);
    }
  }
  @media (min-width: 1660px) {
  }
  @media (max-width: 1280px) {
    .navigation {
      width: calc(100% - 12rem);
      margin: 1.2rem 6rem;
      &--popup {
        padding: 0 6rem;
      }
      &--logo {
        img {
          height: 7rem;
        }
      }
      &--menu {
        width: 4rem;
        height: 4rem;
        &__closer {
          margin-right: 3rem;
          width: 4rem;
          height: 4rem;
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .navigation {
      &--popup {
        // padding: 0 3rem;
      }
      &--logo {
        img {
          height: 6rem;
        }
      }
      &--menu {
        width: 2.4rem;
        height: 2.4rem;
        &__closer {
          width: 3.2rem;
          height: 3.2rem;
        }
      }
      &--items {
        margin-bottom: 20rem;
      }
      &--item {
        font-size: 5.6rem;
      }
    }
  }
  @media (max-width: 768px) {
    .navigation {
      &--popup {
        // padding: 0 1.6rem;
      }
      &--item {
        font-size: 4.8rem;
      }
      &--social {
        font-size: 1.2rem;
      }
      &--logo {
        img {
          height: 5rem;
        }
      }
    }
    .mode {
      font-size: 1.6rem;
    }
  }
  @media (max-width: 500px) {
    .navigation {
      &--popup {
        flex-direction: column-reverse;
        justify-content: space-between;
      }
      &--menu {
        &__closer {
          align-self: flex-end;
        }
      }
      &--item {
        font-size: 3rem;
      }
      &--social {
        font-size: 1rem;
      }
      &--items {
        margin-bottom: 48rem;
      }
      &--socials {
        gap: 3.2rem;
      }
      &--logo {
        img {
          height: 4rem;
        }
      }
    }
    .mode {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 300px) {
    .navigation--socials {
      gap: 2.4rem;
    }
  }
</style>
