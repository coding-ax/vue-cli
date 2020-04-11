<template>
  <div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <tab-bar>
      <tab-bar-item path="/home">
        <img slot="item-icon" src="../../../assets/img/tabbar/home.svg" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/home_active.svg" alt />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/cart">
        <img slot="item-icon" src="../../../assets/img/tabbar/category.svg" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/category_active.svg" alt />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/category">
        <img slot="item-icon" src="../../../assets/img/tabbar/cart.svg" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/cart_active.svg" alt />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <img slot="item-icon" src="../../../assets/img/tabbar/profile.svg" />
        <img slot="item-icon-active" src="../../../assets/img/tabbar/profile_active.svg" alt />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "../../common/tabbar/TabBar";
import TabBarItem from "../../common/tabbar/TabBarItem";
export default {
  components: {
    TabBar,
    TabBarItem
  }
};
</script>

<style>
</style>