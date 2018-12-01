<template>
  <div v-bind:class="pageCssClass">
    <transition
      v-bind:enter-active-class="fadeInCssClass"
      v-bind:leave-active-class="fadeOutCssClass"
    >
      <div class="arrows-page__arrow" v-if="showArrow || paused">
        {{ upcaseArrow }}
      </div>
    </transition>

    <div class="arrows-page__menu">
      <div class="arrows-page__timer">
        {{ minuteTimer }}
      </div>

      <div class="arrows-page__menu-ctas">
        <div class="arrows-page__pause-cta">
          <Btn v-bind:text="this.paused ? 'Resume' : 'Pause'"
              v-bind:modifiers="['small', 'pink']"
              @click.native="pause" />
        </div>

        <div class="arrows-page__finish-cta" v-if="paused">
          <Btn text="Finish"
              v-bind:modifiers="['small', 'blue']"
              @click.native="finish" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router';
import Btn from '@/components/Btn.vue';

const ARROWS = ['Right', 'Down', 'Left', 'Up'];
let interval;
let timerInterval;
const randomArrow = () => ARROWS[Math.floor(Math.random() * ARROWS.length)];

export default {
  name: 'ArrowsPage',
  data() {
    return {
      arrow: randomArrow(),
      paused: false,
      showArrow: false,
      timer: 180,
    };
  },
  methods: {
    finish() {
      this.trackEvent('finished');
      router.push({ path: '/finished' });
    },
    pause() {
      this.paused = !this.paused;

      if (this.paused) {
        this.trackEvent('paused');

        clearInterval(interval);
        clearInterval(timerInterval);

        this.arrow = 'PAUSED';
      } else {
        this.trackEvent('unpaused');

        this.showArrow = false;

        interval = setInterval(() => {
          this.arrow = randomArrow();
          this.showArrow = true;

          setTimeout(() => {
            if (!this.paused) {
              this.showArrow = false;
            }
          }, 3500);
        }, 4000);

        timerInterval = setInterval(() => {
          this.timer -= 1;
        }, 1000);
      }
    },
  },
  computed: {
    minuteTimer() {
      const minutes = Math.floor(this.timer / 60);
      const seconds = this.timer - minutes * 60;
      const paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      return `${minutes}:${paddedSeconds}`;
    },
    upcaseArrow() {
      return this.arrow.toUpperCase();
    },
    fadeInCssClass() {
      const fadeInDirection = ((arrow) => {
        switch (arrow) {
          case 'Up':
            return 'Up';
          case 'Down':
            return 'Down';
          case 'Right':
            return 'Left';
          case 'Left':
            return 'Right';
        }
      })(this.arrow);

      return this.paused ? '' : `animated fadeIn${fadeInDirection}Big`;
    },
    fadeOutCssClass() {
      return this.paused ? '' : `animated fadeOut${this.arrow}Big`;
    },
    pageCssClass() {
      return this.paused ? 'arrows-page arrows-page--paused' : 'arrows-page';
    },
  },
  mounted() {
    this.showArrow = true;

    setTimeout(() => {
      this.showArrow = false;
    }, 3500);

    interval = setInterval(() => {
      this.arrow = randomArrow();
      this.showArrow = true;

      setTimeout(() => {
        if (!this.paused) {
          this.showArrow = false;
        }
      }, 3500);
    }, 4000);

    timerInterval = setInterval(() => {
      this.timer -= 1;
    }, 1000);
  },
  watch: {
    timer(value) {
      if (value === 0) {
        router.push({ path: '/finished' });
      }
    },
  },
  destroyed() {
    clearInterval(interval);
    clearInterval(timerInterval);
  },
  components: {
    Btn,
  },
};
</script>

<style lang="scss">
@import "../assets/css/global.scss";

.arrows-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  background-color: $blue;

  &--paused {
    background-color: $light-blue;
  }

  &__arrow {
    color: $white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 20vw;
    line-height: 20vw;
    text-align: center;
  }

  &__menu {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  &__timer {
    margin-top: 5px;
    margin-right: 16px;

    color: $white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  &__menu-ctas {
    display: flex;
    flex-direction: column;
  }

  &__finish-cta {
    margin-top: 16px;
  }
}
</style>
