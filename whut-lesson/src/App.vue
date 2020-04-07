<template>
  <div id="app">
    <nav-bar>
      <span slot="center">课表</span>
      <i :class="{rotate:isClick}" class="icon-refresh" slot="right" @click="refresh"></i>
    </nav-bar>
    <home-tab-bar></home-tab-bar>
  </div>
</template>
<script>
import NavBar from "./components/navbar/NavBar";
import HomeTabBar from "./components/HomeTabBar";

//vant
export default {
  components: {
    NavBar,
    HomeTabBar
  },
  data() {
    return {
      isClick: false
    };
  },
  methods: {
    refresh() {
      this.isClick = true;
      this.$store.commit("upRefresh", true);
      // alert("已点击，请马上关闭窗口耐心等待");
      setTimeout(() => {
        this.isClick = false;
      }, 5000);
    }
  },
  mounted() {}
  /**
   * TODOS:
   * 1.preview界面 √
   * 2.lenth判断（长短轴） √
   * 3.接口数据切换保存（vuex） √
   * 4.刷新按钮 √
   * 5.loading动画,自己不写（没找到好的组件就算了) 算了
   * 6.localstroage使用 √
   * 7.better-scroll全覆盖 长度问题 失败
   *
   */
};
</script>
<style>
@import "./assets/css/base.css";
@keyframes turnZ {
  0% {
    transform: rotateZ(0deg);
  }

  100% {
    transform: rotateZ(360deg);
  }
}
i {
  display: inline-block;
  height: 1em;
  width: 1em;
  font-size: 20px;
  box-sizing: border-box;
  text-indent: -9999px;
  vertical-align: middle;
  position: relative;
  
}
.rotate {
  animation-name: turnZ;
  animation-duration: 3s;
  animation-iteration-count: infinite;
}
i::before,
i::after {
  content: "";
  box-sizing: inherit;
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.icon-refresh::before {
  width: 0.9em;
  height: 0.9em;
  border: 2px solid;
  border-right-color: transparent;
  border-radius: 50%;
}
.icon-refresh::after {
  border: 0.2em solid;
  border-left-color: transparent;
  border-top-color: transparent;
  left: 75%;
  top: 20%;
}
</style>
