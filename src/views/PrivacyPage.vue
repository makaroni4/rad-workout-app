<template>
  <div class="privacy-page">
    <div class="privacy-page__body">
      <div class="privacy-page__back-cta">
        <Btn text="Back"
             v-bind:modifiers="['small', 'pink']"
             @click.native="back" />
      </div>

      <h1>
        Privacy Policy
      </h1>

      <p>
        <!-- eslint-disable-next-line max-len -->
        https://makaroni4.github.io/rad-workout-app/ is maintained by Anatoli Makarevich. This website is hosted on servers operated by GitHub Inc. This document outlines the data handling practices for this website.
      </p>

      <h2>
        What personal data do you collect?
      </h2>

      <p>
        <!-- eslint-disable-next-line max-len -->
        For analytics purposes, anonymous and aggregated data may be collected, using Google Analytics. This data includes:

        <ul>
          <li>
            <!-- eslint-disable-next-line max-len -->
            <strong>Technical data:</strong> Your IP address, browser type, operating system type, hardware model (if available), location and locale (language and region), screen dimensions, browser dimensions, etc.
          </li>

          <li>
            <!-- eslint-disable-next-line max-len -->
            <strong>Navigational information:</strong> What pages you access on this website, how long you spend on each page;
          </li>

          <li>
            <!-- eslint-disable-next-line max-len -->
            <strong>Usage information:</strong> Analytics tied to your use of website features, such as when you start/finish the workout.
          </li>
        </ul>
      </p>

      <p>
        For more information on how Google Analytics uses this data see:

        <ul>
          <li>
            <a href="https://policies.google.com/technologies/partner-sites">
              https://policies.google.com/technologies/partner-sites
            </a>
          </li>

          <li>
            <a href="https://support.google.com/analytics/answer/6004245">
              https://support.google.com/analytics/answer/6004245
            </a>
          </li>
        </ul>
      </p>
    </div>
  </div>
</template>

<style lang="scss">
@import "../assets/css/global.scss";

.privacy-page {
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
    padding: 48px 16px;
  }

  &__body {
    @include container;
  }

  &__back-cta {
    position: absolute;
    top: 10px;
    left: 16px;
  }
}
</style>

<script>
import router from '@/router';
import Btn from '@/components/Btn.vue';

export default {
  name: 'PrivacyPage',
  data() {
    return {
    };
  },
  methods: {
    back() {
      router.push({ path: '/' });
    },
  },
  components: {
    Btn,
  },
};
</script>
