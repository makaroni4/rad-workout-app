<template>
  <div v-bind:class="pageCssClass">
    <div class="arrows-page__body">
      <transition
        name="custom-classes-transition"
        v-bind:enter-active-class="fadeInCssClass"
        v-bind:leave-active-class="fadeOutCssClass"
      >
        <p class="arrows-page__arrow" v-if="showArrow || paused">
          {{ upcaseArrow }}
        </p>
      </transition>
    </div>

    <div class="arrows-page__menu">
      <div class="arrows-page__timer">
        {{ minuteTimer }}
      </div>

      <div class="arrows-page__menu-ctas">
        <div class="arrows-page__finish-cta" v-if="paused">
          <Btn text="Finish"
              v-bind:modifiers="['small', 'pink']"
              @click.native="finish" />
        </div>

        <div class="arrows-page__pause-cta">
          <Btn v-bind:text="this.paused ? 'Resume' : 'Pause'"
              v-bind:modifiers="['small', 'pink']"
              @click.native="pause" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router.js";
import Btn from "@/components/Btn";

const ARROWS = ["Right", "Down", "Left", "Up"];
let interval;
let timerInterval;
let randomArrow = () => {
  return ARROWS[Math.floor(Math.random() * ARROWS.length)];
}

export default {
  name: "ArrowsPage",
  data() {
    return {
      arrow: randomArrow(),
      paused: false,
      showArrow: false,
      timer: 300
    };
  },
  methods: {
    finish() {
      router.push({ path: "/finished" });
    },
    pause() {
      this.paused = !this.paused;

      if(this.paused) {
        clearInterval(interval);
        clearInterval(timerInterval);

        this.arrow = "PAUSED";
      } else {
        this.showArrow = false;

        interval = setInterval(() => {
          this.arrow = randomArrow();
          this.showArrow = true;

          setTimeout(() => {
            if(!this.paused) {
              this.showArrow = false;
            }
          }, 3500);
        }, 4000);

        timerInterval = setInterval(() => {
          this.timer -= 1;
        }, 1000);
      }
    }
  },
  computed: {
    minuteTimer: function() {
      let minutes = Math.floor(this.timer / 60);
      let seconds = this.timer - minutes * 60;
      let paddedSeconds = seconds < 10 ? `0${seconds}` : seconds;

      return `${minutes}:${paddedSeconds}`;
    },
    upcaseArrow: function() {
      return this.arrow.toUpperCase();
    },
    fadeInCssClass: function() {
      let fadeInDirection = ((arrow) => {
        switch (arrow) {
          case "Up":
            return "Up";
          case "Down":
            return "Down";
          case "Right":
            return "Left";
          case "Left":
            return "Right";
        }
      })(this.arrow);

      return this.paused ? "" : `animated fadeIn${fadeInDirection}Big`;
    },
    fadeOutCssClass: function() {
      return this.paused ? "" : `animated fadeOut${this.arrow}Big`;
    },
    pageCssClass: function() {
      return this.paused ? "arrows-page arrows-page--paused" : "arrows-page";
    }
  },
  mounted() {
    this.showArrow = true;

    setTimeout(() => this.showArrow = false, 3500);

    interval = setInterval(() => {
      this.arrow = randomArrow();
      this.showArrow = true;

      setTimeout(() => {
        if(!this.paused) {
          this.showArrow = false;
        }
      }, 3500);
    }, 4000);

    timerInterval = setInterval(() => {
      this.timer -= 1;
    }, 1000);
  },
  watch: {
    timer: function(value) {
      if(value === 0) {
        router.push({ path: "/finished" })
      }
    }
  },
  destroyed() {
    clearInterval(interval);
    clearInterval(timerInterval);
  },
  components: {
    Btn
  }
};
</script>

<style lang="scss">
@import "../assets/css/global.scss";
@import "../assets/css/animate.scss";

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
    font-size: 45vh;
    line-height: 45vh;
    text-align: center;
  }

  &__menu {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__timer {
    color: $white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
  }

  &__menu-ctas {
    display: flex;
    margin-left: 16px;
  }

  &__finish-cta {
    margin-right: 16px;
  }
}
</style>
