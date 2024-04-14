<template>
  <div>
    <div class="section techstack-section">
      <h1 class="highlight">Tech stack</h1>
      <div class="techstack--grid">
        <div
          class="techstack--icon"
          v-for="i in 12">
          <div class="flex flex-col items-center justify-center gap-8">
            <img
              :src="`images/tech-${i}.svg`"
              alt="Tech Stack" />
            Tech name
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
  .techstack-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 9.6rem;
  }
  .techstack--grid {
    display: flex;
    flex-wrap: wrap;
  }
  .techstack--icon {
    display: flex;
    justify-content: center;
    gap: 1.2rem;
    align-items: center;
    width: 18rem;
    height: 18rem;
    border: 1px solid $black-color;
  }
</style>
