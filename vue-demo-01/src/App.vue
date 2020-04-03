<template>
  <div id="app">
    <home-header class="app-home"></home-header>
    <router-view class="app-router-view"></router-view>
  </div>
</template>

<script>
import HomeHeader from "./components/Home/HomeHeader";
export default {
  components: {
    HomeHeader
  }
};
</script>
<style>
body {
  margin: 0;
  padding: 0;
  font-family: 微软雅黑;
}
.app-home {
  z-index: 1;
}
.app-router-view {
  z-index:2;
}
</style>
