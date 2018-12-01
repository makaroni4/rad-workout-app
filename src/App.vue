<template>
  <div id="app" class="app">
    <div class="app__body">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import "assets/css/global.scss";

.app {
  width: 100%;
  height: 100%;

  background-color: $blue;
}
</style>

<script>
export default {
  name: 'App',
};
</script>
