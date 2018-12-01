<template>
  <transition enter-active-class="animated fadeInRightBig"
              leave-active-class="animated fadeOutRightBig">
    <div class="cookie-consent" v-if="showConsent">
      <div class="cookie-consent__body">
        <div class="cookie-consent__header">
          This website uses cookies
        </div>

        <div class="cookie-consent__description">
          <!-- eslint-disable-next-line vue/max-len -->
          Cookies are used to check how many people visit this page and make workouts. You consent to cookies if you continue to use this website.
        </div>

        <div class="cookie-consent__ctas">
          <Btn text="Accept"
              v-bind:modifiers="['small', 'blue']"
              extraClass="cookie-consent__cta"
              @click.native="accept" />

          <Btn text="Decline"
              v-bind:modifiers="['small', 'blue', 'empty']"
              extraCssClass="cookie-consent__cta"
              @click.native="decline" />
        </div>
      </div>
    </div>
  </transition>
</template>

<style lang="scss">
@import "../assets/css/global.scss";

.cookie-consent {
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 400px;
  padding: 8px 16px;

  border-radius: 2px;

  background-color: $white;

  @include on_mobile {
    position: fixed;
    width: 100%;
    bottom: 0;
    right: 0;
    left: 0;

    border-radius: 0;
  }

  &__header {
    color: $black;
    font-family: "Open Sans", sans-serif;;
    font-weight: 800;
    font-size: 16px;
    line-height: 27px;
  }

  &__description {
    margin-top: 8px;

    color: $black;
    font-family: "Open Sans", sans-serif;;
    font-size: 14px;
    line-height: 20px;
  }

  &__ctas {
    margin-top: 16px;
  }

  &__cta {
    margin-left: 8px;
  }
}
</style>

<script>
import Btn from '@/components/Btn.vue';

export default {
  name: 'CookieConsent',
  data() {
    return {
      showConsent: false,
    };
  },
  mounted() {
    const that = this;
    setTimeout(() => {
      that.showConsent = !this.$cookies.isKey('rad_app_consent');
    }, 2000);
  },
  methods: {
    accept() {
      this.$cookies.set('rad_app_consent', true, '1y');
      this.showConsent = false;
    },
    decline() {
      this.$cookies.set('rad_app_consent', false, '1y');
      this.showConsent = false;
    },
  },
  components: {
    Btn,
  },
};
</script>
