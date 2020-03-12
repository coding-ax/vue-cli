<template>
  <div id="home-header">
    <div class="home-header-box">
      <div class="home-header-item" @click="menuClick">菜单</div>
      <div class="home-header-item">首页</div>
      <div class="home-header-item" @click="aboutClick">关于</div>
    </div>
    <div class="home-header-about" v-show="leftStatus">
      <div class="home-header-about-item">
        design by AX
        <hr />
      </div>
    </div>
    <div @click.self="menuClick" :class="{'home-left-box':rightStatus}"></div>
    <transition name="home-left-box-item">
      <div v-show="rightStatus" class="home-left-box-item">
          <div class="home-left-box-item-title">
              我是你的贴身小管家
          </div>
          <div  class="home-left-box-item-items">
          
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
      leftStatus:false
    };
  },
  methods: {
    menuClick() {
      this.rightStatus = !this.rightStatus;
    },
    aboutClick(){
        this.leftStatus=!this.leftStatus;
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
.home-left-box {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 100%;
}
.home-left-box-item {
  background: rgb(44, 59, 65);
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 170px;
  /* animation: showRightBox 0.3s forwards; */
}

.home-left-box-item-enter-active {
  animation: forwards showRightBox 0.3s;
}
.home-left-box-item-leave-active {
  animation: forwards showRightBox 0.3s reverse;
}

.home-header-about {
  position: fixed;
  top: 39px;
  right: 0px;
  display: flex;
  flex-direction: column;
  background: rgb(56, 56,56);
}
.home-header-about-item{
    color: white;
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