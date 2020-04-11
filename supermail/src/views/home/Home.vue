<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <!-- 可以通过ref访问组件内部的属性 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control class="tab-control" :titles="titles" @tabClick="tabClick"></tab-control>
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 组件无法监听点击单纯的click事件，需要使用click.native 当我们需要对组件进行原生事件监听的时候，必须加上.native属性修饰符-->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
//components:
import NavBar from "../../components/common/navbar/NavBar";
import TabControl from "../../components/common/tabControl/TabControl";
import Scroll from "../../components/common/scroll/Scroll";

import GoodsList from "../../components/content/goods/GoodsList";
import BackTop from "../../components/content/backTop/BackTop";

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
    GoodsList,
    Scroll,
    BackTop
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
      },
      currentType: "pop",
      isShowBackTop: false
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].List;
    }
  },
  created() {
    //使用引入的网络请求函数
    this.getHomeMultidata();
    //2.请求商品数据
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    /**网络请求相关方法 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        // console.log(res);
        this.banners = res.data.data.banner.list;
        this.recommends = res.data.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      // console.log(this.goods[type].page);
      const page = this.goods[type].page + 1;
      // console.log(page);
      getHomeGoods(type, page).then(res => {
        // console.log(res);
        this.goods[type].List.push(...res.data.data.list);
        this.goods[type].page++;

        this.$refs.scroll.finishPullUp();
      });
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0);
    },

    contentScroll(position) {
      this.isShowBackTop = -position.y > 1000 ? true : false;
    },

    loadMore() {
      console.log("上拉加载");
      this.getHomeGoods(this.currentType);
    }
  }
};
</script>

<style scoped>
#home {
  padding-top: 44px;
  height: 100vh; /* viewport height */
  position: relative;
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
/* .content{
  height: calc(100% - 93px);
  overflow: hidden;
  margin-top: 44px;
} */
/*calc() 需要使用空格隔开操作数 */
/**方法2：使用定位 */
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  overflow: hidden;
}
</style>
