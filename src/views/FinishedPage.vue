<template>
  <div class="finished-page">
    <div class="finished-page__body">
      <div class="row">
        <div class="col-xs-12">
          <div class="finished-page__header">
            You’ve just completed <span class="finished-page__workouts-count" v-if="workoutsCount"><AnimatedNumber :number="workoutsCount"></AnimatedNumber>th</span> RAD workout! 👏
          </div>

          <div class="finished-page__description">
            <p>
              Message from the creator:
            </p>

            <p>
              Hi 👋 My name is Anatoli, I’m a software engineer who likes to workout and build workout apps. If you like RAD workout – reward me with 1EUR, share feedback, request features or new apps. Have a great, RAD day!
            </p>
          </div>

          <div class="finished-page__donate-cta">
            <PaypalBtn />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router.js";
import PaypalBtn from "@/components/PaypalBtn";
import AnimatedNumber from "@/components/AnimatedNumber";

let interval;

export default {
  name: "FinishedPage",
  data() {
    return {
    };
  },
  mounted() {
    interval = setInterval(() => {
      this.currentNumber -= 1;
    }, 1000);
  },
  created() {
    let that = this;
    this.workoutsCountRef.child("counter").on("value", function(ss) {
      that.workoutsCount = ss.val();
    });
  },
  components: {
    PaypalBtn,
    AnimatedNumber
  }
};
</script>

<style lang="scss">
@import "../assets/css/global.scss";

.finished-page {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $blue;

  &__body {
    width: 1000px;
  }

  &__header {
    color: $white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    line-height: 44px;
    font-size: 36px;
  }

  &__description {
    margin-top: 60px;

    color: $white;
    font-family: "Open Sans", sans-serif;;
    line-height: 27px;
    font-size: 16px;
  }

  &__donate-cta {
    margin-top: 60px;
    max-width: 200px;
  }

  &__workouts-count {
    display: inline-block;
  }
}
</style>
