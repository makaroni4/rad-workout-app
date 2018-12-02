<template>
  <a class="paypal-btn" href="https://www.paypal.me/makaroni4">
    <div class="paypal-btn__logo">
    </div>

    <div class="paypal-btn__copy">
      Donate 1$
    </div>
  </a>
</template>

<script>
export default {
  name: 'PaypalBtn',
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
@import "../assets/css/global.scss";

.paypal-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 300px;
  height: 80px;
  padding: 22px 16px;

  border-radius: 4px;

  background-color: $red;

  color: $white;
  text-decoration: none;
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  text-align: center;

  @include on_mobile {
    width: 100%;
    max-width: auto;
    min-width: auto;
  }

  &:hover {
    background-color: $darker-red;
  }

  &__logo {
    width: 33px;
    height: 33px;
    margin-right: 10px;

    background-image: url("../assets/paypal.svg");
  }
}
</style>
