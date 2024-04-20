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
  @media (min-width: 1660px) {
  }
  @media (max-width: 1280px) {
    footer {
      padding: 2rem 8rem;
      display: flex;
    }
    .name {
      font-size: 3.6rem;
    }
    .copyright {
      font-size: 1.6rem;
    }
    .end {
      font-size: 3.6rem;
    }
  }
  @media (max-width: 1024px) {
    footer {
      padding: 2rem 4rem;
      display: flex;
      gap: 2rem;
    }
    .name {
      font-size: 3rem;
    }
    .end {
      font-size: 3rem;
    }
    .copyright {
      font-size: 1.4rem;
    }
  }
  @media (max-width: 768px) {
    footer {
      padding: 2rem 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
    .name {
      font-size: 2.4rem;
    }
    .end {
      font-size: 2.4rem;
    }
    .copyright {
      font-size: 1.2rem;
    }
  }
  @media (max-width: 500px) {
    footer {
      padding: 2rem 1rem;
      display: flex;
      gap: 2rem;
    }
    .name {
      font-size: 2rem;
    }
    .end {
      font-size: 2rem;
    }
    .copyright {
      font-size: 1rem;
    }
  }
  .dark-mode footer {
    background-color: $darkblack-color;
    color: $white-color;
  }
</style>
