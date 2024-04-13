<template>
  <footer>
    <div class="">
      <div class="name">NIZAR SAIDI</div>
      <div class="copyright">&copy; 2024 All rights are reserved</div>
    </div>
    <div class="end">"Thanks for Scrolling!"</div>
  </footer>
</template>

<script setup></script>

<style lang="scss">
  footer {
    padding: 2rem 16rem;
    display: flex;
    align-items: center;
    gap: 14rem;
    background-color: $white-color;
    color: $black-color;
  }
  .name {
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 118%; /* 56.64px */
    letter-spacing: -0.48px;
    text-transform: uppercase;
  }
  .end {
    font-size: 48px;
    font-weight: 300;
    line-height: 118%; /* 56.64px */
    letter-spacing: -0.48px;
    text-transform: uppercase;
  }
  .dark-mode footer {
    background-color: $black-color;
    color: $white-color;
  }
</style>
