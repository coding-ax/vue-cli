<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control class="tab-control" :titles="titles"></tab-control>
    <goods-list :goods="goods['pop'].List"></goods-list>
  </div>
</template>

<script>
//components:
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/common/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList";

import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";
//functions:
import { getHomeMultidata, getHomeGoods } from "../../network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList
  },
  data() {
    return {
      // result:null
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: {
          page: 0,
          List: []
        },
        new: {
          page: 0,
          List: []
        },
        sell: {
          page: 0,
          List: []
        }
      }
    };
  },
  created() {
    //使用引入的网络请求函数
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      console.log(this.goods[type].page);
      const page = this.goods[type].page + 1;
      console.log(page);
      getHomeGoods(type, page).then(res => {
        console.log(res);
        this.goods[type].List.push(...res.data.data.list);
        this.goods[type].page++;
      });
    }
  }
};
</script>

<style>
#home {
  padding-top: 44px;
}
.home-nav {
  /* background-color:#ff8198; */
  background-color: var(--color-tint);
  color: white;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 1;
}
.tab-control {
  position: sticky;
  top: 44px;
}
</style>
