<template>
  <div class="countdown-page">
    <div class="countdown-page__body">
      <div class="countdown-page__number">
        {{ currentNumber }}
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';

let interval;

export default {
  name: 'CountdownPage',
  data() {
    return {
      currentNumber: 3,
    };
  },
  mounted() {
    interval = setInterval(() => {
      this.currentNumber -= 1;
    }, 800);
  },
  watch: {
    currentNumber(value) {
      if (value === 0) {
        this.currentNumber = 3;
        clearInterval(interval);

        router.push({ path: '/arrows' });
      }
    },
  },
  destroyed() {
    clearInterval(interval);
  },
};
</script>

<style lang="scss">
@import "../assets/css/global.scss";

.countdown-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $blue;

  &__number {
    color: $white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 20vw;
    line-height: 20vw;
    text-align: center;
  }
}
</style>
