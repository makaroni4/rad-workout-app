<template>
  <span class="animated-number">
    {{ displayNumber }}
  </span>
</template>

<style lang="scss">
  .animated-number {
    display: inline-block;
  }
</style>

<script>
export default {
  name: "AnimatedNumber",
  props: {
    number: Number
  },
  data() {
  	return {
      displayNumber: 0,
      interval: false
    }
  },
  mounted: function() {
    const TOTAL_DURATION = 500;

    this.interval = window.setInterval(function() {
      if(this.displayNumber < this.number) {
        var change = (this.number - this.displayNumber) / 10;

        change = change >= 0 ? Math.ceil(change) : Math.floor(change);

        this.displayNumber = this.displayNumber + change;
      } else {
        clearInterval(this.interval);
      }
    }.bind(this), TOTAL_DURATION / this.number);
  }
}
</script>
