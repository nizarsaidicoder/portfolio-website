<template>
  <nav
    class="navigation"
    :class="{ scrolled: isScrolled }">
    <div class="navigation--logo">
      <img src="/images/Logo.svg" />
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
      <a
        href="#"
        class="navigation--item underline"
        >Home</a
      >
      <a
        href="#"
        class="navigation--item underline"
        >About</a
      >
      <a
        href="#"
        class="navigation--item underline"
        >Portfolio</a
      >
      <a
        href="#"
        class="navigation--item underline"
        >Blog</a
      >
      <a
        href="#"
        class="navigation--item underline"
        >Contact</a
      >
      <ul class="navigation--socials">
        <a
          href="#"
          class="navigation--social"
          >Github</a
        >
        <a
          href="#"
          class="navigation--social"
          >Dribbble</a
        >
        <a
          href="#"
          class="navigation--social"
          >Instagram</a
        >
        <a
          href="#"
          class="navigation--social"
          >LinkedIn</a
        >
      </ul>
    </ul>
    <Icon
      name="heroicons:x-mark-solid"
      class="navigation--menu navigation--menu__closer"
      @click="toggleMenu"></Icon>
    <!-- <UToggle
      on-icon="i-heroicons-check-20-solid"
      off-icon="i-heroicons-x-mark-20-solid"
      @click="$emit('toggle-color-mode')"
      :model-value="false" /> -->
  </nav>
</template>

<script setup>
  const props = defineProps({
    lightMode: Boolean,
  });
  const isOpen = ref(false);
  const toggleMenu = () => (isOpen.value = !isOpen.value);
  const isScrolled = ref(0);
  // emit the toggle color to the parent component
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
  watch(isScrolled, (value) => {
    console.log(value);
  });
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
    background-color: $darkblack-color;
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
</style>
