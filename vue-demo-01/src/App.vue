<template>
  <div id="app">
  <home-header></home-header>
  <router-view></router-view>
  </div>
</template>

<script>
import Home from './views/Home';
import HomeHeader from "./components/Home/HomeHeader";
export default {
  components: {
    Home,
    HomeHeader
  }
}
</script>
<style>
body{
  margin: 0;
  padding: 0;
}
</style>
