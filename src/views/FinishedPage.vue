<template>
  <div class="finished-page">
    <div class="finished-page__container">
      <div class="finished-page__body">
        <div class="row">
          <div class="col-xs-12">
            <div class="finished-page__header">
              <!-- eslint-disable-next-line max-len -->
              You’ve just completed <span class="finished-page__workouts-count" v-if="workoutsCount"><AnimatedNumber :number="workoutsCount"></AnimatedNumber>th</span> RAD workout! 👏
            </div>

            <div class="finished-page__description">
              <p>
                Message from the creator:
              </p>

              <p>
                <!-- eslint-disable-next-line max-len -->
                Hi 👋 My name is Anatoli, I’m a software engineer from Berlin. If you liked the workout – reward me with 1$, share feedback, request features or new apps. Have a great, RAD day!
              </p>
            </div>

            <div class="finished-page__ctas">
              <div class="finished-page__donate-cta finished-page__cta">
                <PaypalBtn />
              </div>

              <ShareBtn text="Share on Facebook"
                        extraCssClass="finished-page__cta"
                        network="facebook"
                        url="https://makaroni4.github.io/rad-workout-app/#/" />

              <ShareBtn text="Share on Twitter"
                        extraCssClass="finished-page__cta"
                        network="twitter"
                        url="https://makaroni4.github.io/rad-workout-app/#/" />
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
import ShareBtn from '@/components/ShareBtn.vue';

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
    ShareBtn,
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

  &__ctas {
    display: flex;
    align-items: center;
    margin-top: 60px;

    @include on_mobile {
      margin-top: 30px;
      flex-direction: column;
    }
  }

  &__donate-cta {
    @include on_mobile {
      width: 100%;
    }
  }

  &__cta {
    & + & {
      margin-left: 16px;

      @include on_mobile {
        width: 100%;
        margin-left: 0;
        margin-top: 16px;
      }
    }
  }

  &__workouts-count {
    display: inline-block;
  }
}
</style>
