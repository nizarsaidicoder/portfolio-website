<template>
  <div class="navigation">
    <div class="navigation--logo">
      <img src="/Logo.svg" />
    </div>
    <Icon
      name="heroicons:bars-3-bottom-right-16-solid"
      class="navigation--menu navigation--menu__opener"
      @click="toggleMenu"></Icon>
  </div>
  <div
    class="navigation--popup"
    :class="isOpen ? '' : ' closed'">
    <ul class="navigation--items">
      <a class="navigation--item underline">Home</a>
      <a class="navigation--item underline">About</a>
      <a class="navigation--item underline">Portfolio</a>
      <a class="navigation--item underline">Blog</a>
      <a class="navigation--item underline">Contact</a>
      <ul class="navigation--socials">
        <a class="navigation--social">Github</a>
        <a class="navigation--social">Dribbble</a>
        <a class="navigation--social">Instagram</a>
        <a class="navigation--social">LinkedIn</a>
      </ul>
    </ul>
    <Icon
      name="heroicons:x-mark-solid"
      class="navigation--menu navigation--menu__closer"
      @click="toggleMenu"></Icon>
  </div>
</template>

<script setup>
  const isOpen = ref(false);
  const toggleMenu = () => (isOpen.value = !isOpen.value);
</script>

<style lang="scss">
  .navigation {
    display: flex;
    position: sticky;
    width: calc(100% - 24rem);
    align-items: center;
    justify-content: space-between;
    margin: 1.2rem 12rem;
    border-bottom: $black-color 2px solid;
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
      list-style: none;
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
