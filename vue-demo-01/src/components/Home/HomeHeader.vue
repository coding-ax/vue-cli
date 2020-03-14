<template>
  <div id="home-header">
    <div class="home-header-box">
      <div class="home-header-item" @click="menuClick">
        <img src="../../assets/Head/xitong-.svg" alt />
      </div>
      <div class="home-header-item" @click="routeBack('/home')">
        <img src="../../assets/Head/shouye.svg" alt />
      </div>
      <div class="home-header-item" @click="aboutClick">
        <img src="../../assets/Head/fenxiang.svg" alt />
      </div>
    </div>
    <div class="home-header-about" v-show="leftStatus">
      <div class="home-header-about-item">
        design by AX
        <hr />别点了
        <hr />这儿没写东西
        <hr />
      </div>
    </div>
    <div @click="aboutClick" class="home-header-about-box" v-show="leftStatus"></div>
    <div @click.self="menuClick" :class="{'home-left-box':rightStatus}"></div>
    <transition name="home-left-box-item">
      <div v-show="rightStatus" class="home-left-box-item">
        <div class="home-left-box-item-title">我是你的贴心小管家</div>
        <div class="home-left-box-item-items" @click="routeBack('/home')">
          <img src="../../assets/Head/banana.svg" alt />
          <span>首页</span>
        </div>
        <div class="home-left-box-item-items" @click="routeBack('/info')">
          <img src="../../assets/Head/banana.svg" alt />
          <span>查看座右铭</span>
        </div>
        <div class="home-left-box-item-items" @click="routeBack('/todo')">
          <img src="../../assets/Head/banana.svg" alt />
          <span>备忘录</span>
        </div>
        <div class="home-left-box-item-items" @click="routeBack('/choice')">
          <img src="../../assets/Head/banana.svg" alt />
          <span>选择困难</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rightStatus: false,
      leftStatus: false
    };
  },
  methods: {
    menuClick() {
      this.rightStatus = !this.rightStatus;
    },
    aboutClick() {
      this.leftStatus = !this.leftStatus;
    },
    routeBack(path) {
      this.$router.replace(path);
    }
  }
};
</script>

<style>
.home-header-box {
  background-color: rgb(252, 1, 18);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 39px;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
}
.home-header-item {
  font-size: 20px;
  margin: 5px;
  color: white;
  cursor: pointer;
}
.home-header-item img {
  width: 30px;
  height: 30px;
}
.home-left-box {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}

.home-left-box-item-enter-active {
  animation: forwards showRightBox 0.3s;
}
.home-left-box-item-leave-active {
  animation: forwards showRightBox 0.2s reverse;
}

.home-header-about {
  position: fixed;
  top: 39px;
  right: 0px;
  display: flex;
  flex-direction: column;
  background: rgb(56, 56, 56);
}
.home-header-about-item {
  color: white;
}
.home-header-about-box {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.home-left-box-item {
  background: rgb(0, 0, 0);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 170px;
  display: flex;
  flex-direction: column;
  /* text-align: center; */
  /* align-self: center; */
  color: white;
  /* animation: showRightBox 0.3s forwards; */
}
.home-left-box-item-title {
  overflow: hidden;
  height: 20px;
  margin-top: 50px;
  margin-left: 10px;
}
.home-left-box-item-items {
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  margin: 5px;
  width: 100%;
  height: 30px;
  overflow: hidden;
  display: inline-block;
  margin-left: 22px;
}
.home-left-box-item-items img {
  width: 15px;
  height: 15px;
  margin-right: 3px;
}
@keyframes showRightBox {
  0% {
    width: 0px;
  }
  100% {
    width: 170px;
  }
}
</style>