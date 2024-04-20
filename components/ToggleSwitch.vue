<template>
  <div>
    <label
      class="switch"
      for="switch">
      <input
        name="switch"
        type="checkbox"
        @click="handleColorMode" />
      <span class="slider round">
        <Icon
          :name="isDark ? 'heroicons:moon' : 'heroicons:sun'"
          class="text-black-100 icon" />
      </span>
    </label>
  </div>
</template>

<script setup>
  const emit = defineEmits(["handle-color-mode"]);
  const props = defineProps({ colorMode: String });
  const mode = ref(props.colorMode);
  const isDark = ref(mode.value === "dark");
  const handleColorMode = () => {
    isDark.value = !isDark.value;
    emit("handle-color-mode");
  };
</script>

<style lang="scss">
  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 34px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }
  .hidden {
    opacity: 0;
  }
  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: $accent-color;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    & .icon {
      font-size: 2rem;
      position: absolute;
      top: 20%;
      left: 12%;
      z-index: 1000;
      transition: 0.3s;
    }
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: $darkaccent-color;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px $darkaccent-color;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
  input:checked + .slider .icon {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
  @media (min-width: 1660px) {
  }
  @media (max-width: 1280px) {
    .switch {
      width: 6rem;
      height: 3rem;
    }
    .slider {
      // height: 3rem;
      width: 6.5rem;
      &::before {
        height: 2.4rem;
        width: 2.4rem;
        left: 0.4rem;
        bottom: 0.3rem;
      }
    }
    .slider .icon {
      font-size: 1.8rem;
    }
  }
  @media (max-width: 1024px) {
  }
  @media (max-width: 768px) {
  }
  @media (max-width: 500px) {
  }
</style>
