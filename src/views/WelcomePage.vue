<template>
  <div class="welcome-page">
    <div class="welcome-page__logo-container">
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <div class="welcome-page__logo">
            RAD workout
          </div>
        </div>
      </div>
    </div>

    <div class="welcome-page__body">
      <div class="row">
        <div class="col-xs-12">
          <h1 class="welcome-page__header">
            Try out 3 minute Reactive Arrow Drill workout
          </h1>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <div class="welcome-page__description">
            <p>
              RAD is a fun agility drill you can do at home. Follow directions on the screen and do excercies like UP – jump/squat up/jumping jack, DOWN – push up/squat, LEFT/RIGHT – jump to the side and touch the floor. Most important: improvise & have fun!
            </p>

            <p>
              It’s free and <a href="https://github.com/makaroni4/rad-workout-app">open source</a>.
            </p>
          </div>

          <div class="welcome-page__cta">
            <div class="welcome-page__btn">
              <Btn text="Start Workout" @click.native="startWorkout" />
            </div>

            <div class="welcome-page__workouts-count" v-if="workoutsCount">
              <strong>
                <AnimatedNumber :number="workoutsCount"></AnimatedNumber>
              </strong> workouts so far
            </div>
          </div>
        </div>

        <div class="col-xs-12 col-sm-6 col-full-width">
          <div class="welcome-page__demo-gif">
            <iframe src="https://giphy.com/embed/dCACGk7Td4nk4jdTCY" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
          </div>

          <div class="welcome-page__video-reference">
            RAD workout app was inspired by <a href="https://youtu.be/7eyNh8_MGF4?t=537" target="_blank">this Youtube video</a>.
          </div>
        </div>
      </div>
    </div>

    <div class="welcome-page__footer">
      <ul class="welcome-page__footer-links">
        <li>
          Made by <a href="https://makaroni4.com" target="_blank">@makaroni4</a>
        </li>
      </ul>

      <ul class="welcome-page__footer-links">
        <li>
          <router-link to="/privacy">
            <a href="#">Privacy policy</a>
          </router-link>
        </li>
      </ul>
    </div>

    <Octocat />
    <CookieConsent />
  </div>
</template>

<script>
import router from '@/router';
import Btn from '@/components/Btn.vue';
import AnimatedNumber from '@/components/AnimatedNumber.vue';
import Octocat from '@/components/Octocat.vue';
import CookieConsent from '@/components/CookieConsent.vue';

export default {
  name: 'WelcomePage',
  methods: {
    startWorkout() {
      if (!this.$cookies.isKey('rad_app_consent')) {
        this.$cookies.set('rad_app_consent', true, '1y');
      }

      this.addWorkout();
      router.push({ path: '/countdown' });
    },
  },
  components: {
    Btn,
    AnimatedNumber,
    Octocat,
    CookieConsent,
  },
  created() {
    const that = this;
    this.workoutsCountRef.child('counter').on('value', (ss) => {
      that.workoutsCount = ss.val();
    });
  },
};
</script>

<style lang="scss">
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
  flex-direction: column;
  overflow-x: hidden;

  background-color: $blue;

  @include on_mobile {
    position: relative;
    padding: 20px 0;
  }

  &__body {
    @include container;
  }

  &__logo-container {
    @include container;

    position: absolute;
    top: 20px;
    left: 50%;
    margin-left: -30rem;

    @include on_mobile {
      width: 100%;
      position: relative;
      top: auto;
      left: auto;
      margin-left: 0;
    }
  }

  &__logo {
    color: $white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    line-height: 18px;
    font-size: 18px;
  }

  &__header {
    color: $white;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    line-height: 44px;
    font-size: 36px;

    @include on_mobile {
      margin-top: 20px;
    }
  }

  &__description {
    margin-top: 60px;

    color: $white;
    font-family: "Open Sans", sans-serif;;
    line-height: 27px;
    font-size: 16px;

    @include on_mobile {
      margin-top: 40px;
    }
  }

  &__demo-gif {
    margin-top: 60px;
    width: 100%;
    padding-bottom: 56%; // responsive embed from Giphy
    position:relative;
    overflow: hidden;

    border-radius: 4px;

    @include on_mobile {
      margin-top: 50px;
    }
  }

  &__cta {
    display: inline-block;
    margin-top: 50px;
    position: relative;
    padding-bottom: 24px;

    @include on_mobile {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 30px;
    }
  }

  &__workouts-count {
    margin-top: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;

    color: $white;
    font-family: "Open Sans", sans-serif;;
    line-height: 18px;
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

  &__footer {
    @include container;

    position: absolute;
    bottom: 20px;
    left: 50%;
    margin-left: -30rem;
    padding: 0 0.5rem;
    display: flex;
    justify-content: space-between;

    color: $white;
    font-family: "Open Sans", sans-serif;;
    font-size: 12px;
    line-height: 16px;

    @include on_mobile {
      position: relative;
      bottom: auto;
      left: auto;
      margin-left: 0;
      margin-top: 50px;
      padding: 0 1rem;
    }
  }

  &__footer-links {
    display: inline-block;
  }
}
</style>
