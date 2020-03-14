<template>
  <div>
    <div class="list-button-count">操作列表</div>

      <div class="list-button" v-show="isMenu">
        <div class="list-screen"></div>
        <div class="list-all">
          <div class="list-button">
            <div class="list-button-one">清空未完成</div>
            <div class="list-button-one">清空已完成</div>
            <div class="list-button-one">清空全部</div>
            <div class="list-cancel">取消</div>
          </div>
        </div>
      </div>
      
  </div>
</template>

<script>
export default {
  // props: {
  //    isMenu:Boolean
  // },
  data() {
    return {
      isMenu: true
    };
  }
};
</script>

<style>
.list-button-count {
  background-color: red;
  position: fixed;
  left: 15px;
  right: 15px;
  font-size: 20px;
  bottom: 5px;
  margin: 0;
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  box-shadow: #666666 10px 10px 10px;
  border-radius: 3px;
}
.list-screen {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.list-all {
  background-color: white;
  border-bottom: #666666 1px solid;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.list-button {
  width: 100%;
  font-size: 18px;
}
.list-button-one {
  height: 40px;
  border-bottom: 2px solid #f6f6f6;
  padding-top: 12px;
  cursor: pointer;
}
.list-cancel {
  height: 40px;
  cursor: pointer;
  width: 100%;
  border-top: #f6f6f6 8px solid;
  padding-top: 15px;
}
.list-cancel:hover {
  background-color: #f6f6f6;
}
.list-button-one:hover {
  background-color: #f6f6f6;
}
.itemitem-enter-active {
  animation: pushScreen 5s ;
}
.itemitem-leave-active{
  animation: pushScreen 5s reverse;
}
@keyframes pushScreen {
  0%{
    background-color:aqua ;
  }
  100%{
   background-color:yellow ;
  }
}



.bounce-enter-active {
  animation:bounceFrame 2.5s;
}
.bounce-leave-active {
  animation: bounceFrame 2.5s reverse;
}
@keyframes bounceFrame {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.5);
  }
  100% {
    transform: scale(1);
  }
}
</style>