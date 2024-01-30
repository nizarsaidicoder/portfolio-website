<template>
  <button
    :type="btnType"
    :class="'btn ' + 'btn-' + btnType">
    <slot></slot>
    <span class="arrow"> &rarr; </span>
    <span></span><span></span><span></span><span></span>
  </button>
</template>

<script>
  export default {
    name: "Button",
    props: {
      btnType: {
        type: String,
        default: "primary",
      },
    },
  };
</script>

<style lang="scss">
  .btn {
    padding: 1.2rem 2.4rem;
    border-radius: 4px;
    font-size: 1.8rem;
    font-weight: 500;
    position: relative;
    cursor: pointer;
    transition: all 0.2s ease-in;
    padding-right: 4rem;
    &:hover {
      .arrow {
        opacity: 1;
      }
    }

    &-primary {
      background-color: $secondary-color;
      color: $accent-color;
      &::after {
        content: "";
        display: block;
        position: absolute;
        top: 0;
        left: 0;

        height: 100%;
        width: 0%;
        background-image: linear-gradient(90deg, #9153ad, #9713a3);
        border-radius: 4px;
        z-index: -1;
        transition: all 0.2s ease-in;
      }
      &:hover::after {
        width: 100%;
      }
      &:hover {
        background-color: transparent;
        border: $accent-color 2px solid;
      }
    }

    &-secondary {
      box-shadow: inset 0 0 20px rgba(255, 255, 255, 0);
      outline: 1px solid;
      background-color: transparent;
      color: $secondary-color;
      outline-color: rgba(255, 255, 255, 0.988);
      outline-offset: 0px;
      transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

      &:hover {
        border: 1px solid;
        box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
          0 0 20px rgba(255, 255, 255, 0.2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388;
      }
      &:active {
        box-shadow: inset 0 0 4px rgba(255, 255, 255, 0.5),
          0 0 4px rgba(255, 255, 255, 0.2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 2px;
        text-shadow: 1px 1px 2px #427388;
      }
    }
    &-underline {
      background-color: transparent;
      color: $secondary-color;
      border: none;
      border-radius: 0;
      padding-right: 3.6rem !important;
      &::after {
        content: "";
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;

        height: 2px;
        width: 100%;
        background-color: $secondary-color;
        z-index: -1;
        transition: all 0.2s ease-in;
      }
      &:hover::after {
        height: 100%;
      }
      &:hover {
        color: $primary-color;
      }
    }
  }
  .arrow {
    position: absolute;
    opacity: 0;
    margin-left: 0.8rem;
    transition: all 0.2s ease-in;
  }
  .btn-secondary .arrow {
    opacity: 1;
  }

  @media (max-width: 1280px) {
    .btn {
      font-size: 1.7rem;
      padding: 0.8rem 2rem;
    }
  }
  @media (max-width: 1024px) {
    .btn {
      font-size: 1.7rem;
    }
  }
  @media (max-width: 512px) {
    .btn {
      font-size: 1.7rem;
    }
  }
</style>
