<template>
  <footer class="footer">
    <div class="footer__logo">NIZAR SAIDI</div>
    <UDivider />
    <div class="footer__text">
      <p>
        © 2024 Nizar Saidi. All rights reserved. Made with ❤️ in Strasbourg,
        France.
      </p>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss">
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
</style>
