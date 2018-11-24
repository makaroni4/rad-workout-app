<template>
  <a class="paypal-btn" href="https://www.paypal.me/makaroni4">
    Donate
  </a>
</template>

<script>
export default {
  name: "PaypalBtn",
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">
@import "../assets/css/global.scss";

.paypal-btn {
  display: inline-block;
  min-width: 220px;
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
}
</style>
