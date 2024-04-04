<template>
  <div>
    <nav
      class="navigation"
      :class="isFixed ? 'fixed-nav' : ''">
      <div class="navigation-container">
        <img
          src="/Logo.svg"
          alt="logo "
          class="logo-img highlight highlight-full" />
        <button
          class="navigation-toggle"
          @click="toggleMenu">
          <div
            class="hamburger-line"
            :class="isMenuOpen ? 'animate' : ''"></div>
          <div
            class="hamburger-line"
            :class="isMenuOpen ? 'animate' : ''"></div>
          <div
            class="hamburger-line"
            :class="isMenuOpen ? 'animate' : ''"></div>
        </button>
        <ul
          class="navigation-list"
          :class="isMenuOpen ? 'show-menu appear' : ''">
          <a
            href="#hero"
            @click="toggleMenu"
            class="navigation-item">
            <p class="navigation-item-text">About</p></a
          >
          <a
            href="#portfolio"
            @click="toggleMenu"
            class="navigation-item">
            <p class="navigation-item-text">Portfolio</p></a
          >
          <a
            href="#contact"
            @click="toggleMenu"
            class="navigation-item">
            <p class="navigation-item-text">Contact</p></a
          >
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
  //   const route = useRoute();
  //   const isFixed = computed(() => {
  //     return (
  //       route.path.includes("/boules-maximales/") ||
  //       route.path.includes("/reconstruction/") ||
  //       route.path.includes("/carte-distance/")
  //     );
  //   });
  //   watch(
  //     () => isFixed.value,
  //     (newValue) => {
  //       isFixed.value = newValue;
  //     }
  //   );
  const isMenuOpen = ref(false);
  function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
  }
</script>

<style lang="scss">
  .navigation {
    background-color: $secondary-color;
    border-radius: 500rem;
    margin: 2.4rem auto;
    max-width: 140rem;
    &-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 auto;
      padding: 1.2rem 3.6rem;
      // max-width: fit-content;
    }
    &-item {
      text-transform: uppercase;
      text-decoration: none;
      font-weight: 600;
      letter-spacing: 0.1rem;
      font-size: 1.6rem;
      padding: 0.8rem 0;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;
      color: $primary-color;

      &-text {
        transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
      }
      &:hover {
        .navigation-item-icon {
          transition: all cubic-bezier(0.39, 0.575, 0.565, 1) 0.3s;
          transform: scale(1.4);
        }
      }
      &:after {
        background: none repeat scroll 0 0 transparent;
        position: absolute;
        display: block;
        bottom: 0px; /* Adjust the value to position the underline */
        content: "";
        height: 2px;
        left: 0;
        border-radius: 1px;
        background-color: $accent-color;
        transition: width 0.3s ease 0s, left 0.3s ease 0s, height 0.1s ease 0s;
        width: 0;
      }
      &:hover:after {
        width: 100%;
        left: 0;
      }
      &:active:after {
        height: 2px;
        width: 100%;
      }
    }
  }
  /* LOGO */
  .logo-img {
    height: 3.2rem;
    margin-top: -0.6rem;
  }

  /* NAVBAR LIST */
  .navigation-list {
    padding: 0;
    list-style: none;
    display: flex;
    gap: 6rem;
    font-size: 1.8rem;
  }
  .navigation-toggle {
    display: none;
  }
  /* RESPONSIVE STYLES */
  @media (max-width: 768px) {
    .navigation {
      margin: 0 auto;
      border-radius: 0;
    }
    .navigation-container > ul {
      display: none;
    }
    .navigation-container {
      flex-direction: column;
      align-items: flex-start;
      position: relative;
    }
    .navigation-toggle {
      display: block;
      font-size: 4.6rem;
      color: $primary-color;
      cursor: pointer;
      margin-top: 1.2rem;
      position: absolute;
      top: -12%;
      right: 4%;
      border: none;
      background-color: transparent !important;
    }
    .navigation-list {
      position: absolute;
      background-color: $secondary-color;
      z-index: 5;
      top: 90%;
      left: 0;
      display: none;
      flex-direction: column;
      gap: 2rem;
      padding: 1rem 0;
      width: 100%;
      padding: 2.4rem;
      border-bottom: $accent-color 2px solid;
      &.show-menu {
        display: flex;
      }
    }
    .navigation-item {
      width: 100%;
      text-align: center;
    }
  }
  .fixed-nav {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  @media (max-width: 1440px) {
    .navigation {
      &-item {
        font-size: 1.5rem;
        gap: 0.8rem;
      }
      &-list {
        gap: 4rem;
      }
    }
  }
  @media (max-width: 1280px) {
    .navigation {
      &-item {
        font-size: 1.4rem;
        gap: 0.6rem;
      }
      &-list {
        gap: 4rem;
      }
    }
  }
  @media (max-width: 1024px) {
    .navigation {
      &-item {
        font-size: 1.3rem;
        gap: 0.4rem;
      }
      &-list {
        gap: 4rem;
      }
    }
  }
  @media (max-width: 768px) {
    .navigation {
      &-item {
        font-size: 1.2rem;
      }
    }
  }
  .hamburger-line {
    width: 35px;
    height: 5px;
    background-color: $primary-color;
    border-radius: 8px;
    margin: 6px 0;
    transition: all 0.4s ease-in;
  }

  /* Rotate first bar */
  .animate:first-child {
    transform: rotate(-45deg) translate(-8px, 5px);
  }

  /* Fade out the second bar */
  .animate:nth-child(2) {
    transform: translateX(100px);
  }

  /* Rotate last bar */
  .animate:nth-child(3) {
    transform: rotate(45deg) translate(-10px, -8px);
  }
</style>
