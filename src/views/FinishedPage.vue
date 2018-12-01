<template>
  <div class="finished-page">
    <div class="finished-page__container">
      <div class="finished-page__body">
        <div class="row">
          <div class="col-xs-12">
            <div class="finished-page__header">
              Hurrah, you’ve just completed <span class="finished-page__workouts-count" v-if="workoutsCount"><AnimatedNumber :number="workoutsCount"></AnimatedNumber>th</span> RAD workout! 👏
            </div>

            <div class="finished-page__description">
              <p>
                Message from the creator:
              </p>

              <p>
                Hi 👋 My name is Anatoli, I’m a software engineer from Berlin. If you like the workout – reward me with 0.99$, share feedback, request features or new apps. Have a great, RAD day!
              </p>
            </div>

            <div class="finished-page__donate-cta">
              <PaypalBtn />
            </div>
          </div>
        </div>
      </div>
    </div>

    <Octocat />
  </div>
</template>

<script>
import PaypalBtn from '@/components/PaypalBtn.vue';
import AnimatedNumber from '@/components/AnimatedNumber.vue';
import Octocat from '@/components/Octocat.vue';

export default {
  name: 'FinishedPage',
  data() {
    return {
    };
  },
  created() {
    const that = this;
    this.workoutsCountRef.child('counter').on('value', (ss) => {
      that.workoutsCount = ss.val();
    });
  },
  components: {
    PaypalBtn,
    AnimatedNumber,
    Octocat,
  },
};
</script>

<style lang="scss">
@import "../assets/css/global.scss";

.finished-page {
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: $blue;

  &__container {
    padding: 100px 0 20px;

    background-color: $blue;

    @include on_mobile {
      padding: 20px 0;
    }
  }

  &__body {
    @include container;
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

    @include on_mobile {
      margin-top: 30px;
    }
  }

  &__donate-cta {
    margin-top: 60px;
    max-width: 200px;

    @include on_mobile {
      margin-top: 30px;
      max-width: 100%;
    }
  }

  &__workouts-count {
    display: inline-block;
  }
}
</style>
