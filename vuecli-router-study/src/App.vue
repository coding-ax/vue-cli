<template>
  <div id="app"> 
    <!-- 三.使用路由： -->
    <!-- router-view组件用于占位显示view组件 -->
    <router-view></router-view>
    <!-- 设置router-link组件，用to属性表示要更改的url路径 -->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
  </div>
</template>

<script>
export default {

};
</script>
<style>
</style>
