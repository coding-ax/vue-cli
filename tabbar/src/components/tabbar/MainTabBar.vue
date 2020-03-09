<template>
  <div>
      <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" >
        <img slot="item-icon" src="../../assets/img/tabbar/serach.png"  />
        <img slot="item-icon-active" src="../../assets/img/tabbar/search.svg" alt="">
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/list"  >
        <img slot="item-icon" src="../../assets/img/tabbar/List.png"  />
         <img slot="item-icon-active" src="../../assets/img/tabbar/List.svg" alt="">
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/buycar"  >
        <img slot="item-icon" src="../../assets/img/tabbar/buycar.png"  />
         <img slot="item-icon-active" src="../../assets/img/tabbar/buycar.svg" alt="">
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/user" >
        <img slot="item-icon" src="../../assets/img/tabbar/user.png" />
         <img slot="item-icon-active" src="../../assets/img/tabbar/user.svg" alt="">
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./TabBar";
import TabBarItem from "./TabBarItem";
export default {
    components:{
        TabBar,
        TabBarItem
    }
}
</script>

<style>

</style>