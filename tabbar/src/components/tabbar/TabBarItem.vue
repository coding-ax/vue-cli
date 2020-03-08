<template>
<div id="tab-bar-item-ID">
<div class="tab-bar-item">
       <!-- <img src="../../assets/img/tabbar/message.png" alt="">
       <div>首页</div> -->
       <slot name="item-icon"></slot>
       <slot name="item-text"></slot>
</div>
</div>   
</template>

<script>
export default {
    name:"TabBarItem"
}
</script>

<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /*tabbar高度通常为49px*/
  height: 49px;
  font-size: 14px;

}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
} 
</style>