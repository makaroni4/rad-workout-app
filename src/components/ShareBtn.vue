<template>
  <div v-bind:class="cssClass" v-on:click="openPopup">
    <Btn v-bind:text="text"
         v-bind:modifiers="modifiers.concat(['medium', network])" />
  </div>
</template>

<style lang="scss">

</style>

<script>
import Btn from '@/components/Btn.vue';

const networkShareUrl = {
  facebook: 'https://www.facebook.com/sharer/sharer.php?u=',
  twitter: 'https://twitter.com/intent/tweet?&url=',
};

export default {
  name: 'ShareBtn',
  props: [
    'text',
    'extraCssClass',
    'network',
    'url',
    'modifiers',
  ],
  data() {
    return {
    };
  },
  methods: {
    openPopup() {
      this.trackEvent(`${this.network}_share`);

      window.open(
        this.sharingUrl,
        this.network,
        'width=500,height=300,resizable,scrollbars=no,status=1',
      );
    },
  },
  computed: {
    cssClass() {
      return `share-btn ${this.extraCssClass || ''}`;
    },
    sharingUrl() {
      return networkShareUrl[this.network] + this.url;
    },
  },
  components: {
    Btn,
  },
};
</script>
