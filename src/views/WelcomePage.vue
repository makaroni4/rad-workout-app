<template>
  <div class="welcome-page">
    <div class="welcome-page__body">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="welcome-page__header">
            RAD – 5min Reactive Arrow Drill workout
          </h1>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <div class="welcome-page__description">
            <p>
              RAD is a fun agility drill you can do at home. Every couple of seconds you’ll see a new direction on the screen and perform a certain excercies: TOP – jump/squat up/jumping jack, BOTTOM – push up/squat, LEFT/RIGHT – jump to the side and touch the floor.
            </p>

            <p>
              It’s free and open source.
            </p>
          </div>

          <div class="welcome-page__cta">
            <div class="welcome-page__btn">
              <Btn text="Start Workout" @click.native="startWorkout" />
            </div>

            <div class="welcome-page__workouts-count" v-if="workoutsCount">
              <strong>{{ workoutsCount }}</strong> workouts so far
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6">
          <div class="welcome-page__demo">
            <div class="welcome-page__demo-gif">
            </div>

            <div class="welcome-page__video-reference">
              RAD workout app was inspired by <a href="https://youtu.be/7eyNh8_MGF4?t=537" target="_blank">this Youtube video</a>.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "@/router.js";
import Btn from '@/components/Btn';

export default {
  name: "WelcomePage",
  methods: {
    startWorkout: function() {
      this.addWorkout();
      router.push({ path: "/countdown" });
    }
  },
  components: {
    Btn
  },
  created() {
    let that = this;
    this.workoutsCountRef.child("counter").on("value", function(ss) {
      that.workoutsCount = ss.val();
    });
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans|Poppins:600');
@import "../assets/css/reset.css";
@import "../assets/css/grid.scss";
@import "../assets/css/variables.scss";
@import "../assets/css/global.scss";

.welcome-page {
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

  &__demo-gif {
    margin-top: 60px;
    width: 566px;
    height: 300px;

    background-image: url('../assets/intro_video.jpg')
  }

  &__cta {
    display: inline-block;
    margin-top: 60px;
  }

  &__workouts-count {
    margin-top: 4px;

    color: $white;
    font-family: "Open Sans", sans-serif;;
    line-height: 27px;
    font-size: 16px;
    text-align: center;

    strong {
      font-weight: bold;
    }
  }

  &__video-reference {
    margin-top: 4px;

    color: $white;
    font-family: "Open Sans", sans-serif;;
    font-size: 12px;
    line-height: 16px;
  }
}
</style>
