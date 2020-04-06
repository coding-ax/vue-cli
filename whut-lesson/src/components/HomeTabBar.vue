<template>
 
    <div class="home-tab-bar">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>

      <tab-bar>
        <tab-bar-item path="/home">
          <img slot="item-icon" src="../assets/img/tabbar/home.svg" />
          <img slot="item-icon-active" src="../assets/img/tabbar/home_active.svg" alt />
          <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path="/user">
          <img slot="item-icon" src="../assets/img/tabbar/profile.svg" />
          <img slot="item-icon-active" src="../assets/img/tabbar/profile_active.svg" alt />
          <div slot="item-text">我的</div>
        </tab-bar-item>
      </tab-bar>
    </div>
</template>

<script>
import TabBar from "./tabbar/TabBar";
import TabBarItem from "./tabbar/TabBarItem";
import BScroll from "better-scroll";
export default {
  components: {
    TabBar,
    TabBarItem
  },
  data () {
    return {
    scroll:null  
    }
  },
 
};
</script>

<style>

</style>