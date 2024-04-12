<template>
  <div class="navigation">
    <div class="navigation--logo">
      <img src="/Logo.svg" />
    </div>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-6 h-6 navigation--menu">
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M3.75 9h16.5m-16.5 6.75h16.5" />
    </svg>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 1.2rem 12rem;
    bor
    &--logo {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &--menu {
      width: 3.6rem;
      height: 3.6rem;
    }
  }
</style>
