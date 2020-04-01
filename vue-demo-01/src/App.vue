<template>
  <div id="app">
    <div class="app-home">
      <home-header></home-header>
    </div>
    <div class="app-router-view">
      <router-view></router-view>
    </div>
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
  z-index:2;
}
.app-router-view{
  z-index: 1;
}
</style>
