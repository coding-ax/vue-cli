<template>
  <div id="head">

    <home-avator></home-avator>
    <hr class="home-hr"/>
    <home-item></home-item>
  </div>
</template>

<script>

import HomeAvator from "../components/Home/HomeAvator";
import HomeItem from "../components/Home/HomeItem";
export default {
  components: {
    HomeAvator,
    HomeItem
  }
};
</script>

<style>
.home-hr {
  color: #f6f6f6;
  border: solid 1px;
}
#head{
    color: rgb(252, 1, 18);
}
</style>