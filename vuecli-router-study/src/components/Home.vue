// 一.创建vue-router组件
<template>
  <div class="home">
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <keep-alive>
      <div>
      <router-link tag="button" to="/home/news">新闻</router-link>
      <router-link tag="button" to="/home/messages">消息</router-link>
      <router-view></router-view>
      </div>
    </keep-alive>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home"
};
</script>
