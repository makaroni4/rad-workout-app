<template>
  <a href="#" v-bind:class="cssClass">
    {{ text }}
  </a>
</template>

<script>
export default {
  name: 'Btn',
  props: [
    'text',
    'modifiers',
    'extraCssClass',
  ],
  data() {
    return {
    };
  },
  computed: {
    cssClass() {
      return `btn ${(this.modifiers || []).map(m => `btn--${m}`).join(' ')} ${this.extraCssClass || ""}`;
    },
  },
};
</script>

<style lang="scss">
@import "../assets/css/global.scss";

.btn {
  display: inline-block;
  min-width: 220px;
  height: 80px;
  padding: 22px 16px;

  border-radius: 2px;

  background-color: $red;

  color: $white;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;

  &:hover {
    background-color: $darker-red;
  }

  &--pink {
    background-color: $pink;

    &:hover {
      background-color: $darker-pink;
    }
  }

  &--blue {
    background-color: $lightest-blue;

    &:hover {
      background-color: $lighter-blue;
    }
  }

  &--medium {
    min-width: 120px;
    height: auto;
    padding: 8px 16px;

    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 24px;
    text-align: center;
  }

  &--small {
    min-width: 80px;
    height: auto;
    padding: 2px 8px;

    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-align: center;
  }

  &--facebook {
    background-color: $fb-blue;

    &:hover {
      opacity: 0.9;
      background-color: $fb-blue;
    }
  }

  &--twitter {
    background-color: $tw-blue;

    &:hover {
      opacity: 0.9;
      background-color: $tw-blue;
    }
  }

  &--empty {
    padding: 1px 7px;

    border: 1px solid $lightest-blue;

    background-color: transparent;

    color: $lightest-blue;

    &:hover {
      border-color: $lighter-blue;

      background-color: transparent;

      color: $lighter-blue;
    }
  }
}
</style>
