<template>
  <div
    class="modal-lang"
    v-if="isVisibile">
    <div class="modal-lang--container">
      <h2 class="modal-lang--title">Choose your language</h2>
      <div class="modal-lang--buttons">
        <Button
          type="primary"
          @click="handleLanguageChange('en')"
          >English</Button
        >
        <Button
          type="primary"
          @click="handleLanguageChange('fr')"
          >French</Button
        >
      </div>
    </div>
  </div>
</template>

<script setup>
  import Button from "./Button.vue";
  const { locale, setLocale } = useI18n();
  const isVisibile = ref(false);
  const handleLanguageChange = (lang) => {
    isVisibile.value = false;
    // change the locale but don't redirect
    setLocale(lang);
    // save the language in the local storage
    localStorage.setItem("lang", lang);
  };
  onMounted(() => {
    // check if the language is saved in the local storage
    const lang = localStorage.getItem("lang");
    if (lang) {
      setLocale(lang);
      isVisibile.value = false;
    } else {
      isVisibile.value = true;
    }
  });
</script>

<style lang="scss" scoped>
  .modal-lang {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    &--container {
      background-color: $white-color;
      padding: 4.8rem;
      border-radius: 1rem;
      box-shadow: 0 0 1.2rem #1111111f;
      display: flex;
      flex-direction: column;
      gap: 2.4rem;
    }
    &--title {
      font-size: 3.2rem;
      font-weight: 500;
    }
    &--buttons {
      display: flex;
      gap: 2.4rem;
    }
  }
</style>
