// 一.创建vue-router组件
<template>
  <div class="home">
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <h3>{{message}}</h3>
    <div>
      <router-link tag="button" to="/home/news">新闻</router-link>
      <router-link tag="button" to="/home/messages">消息</router-link>
      <keep-alive>
      <router-view />
      </keep-alive>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data() {
    return {
      message: "你好",
      path: "/home/news"
    };
  },
  // created() {
  //   this.$router.push("/home/news");
  // },
  //activated和deactivated函数只有在使用了keep-alive的时候才会生效
  activated() {
    this.$router.push(this.path);
  },
  beforeRouteLeave(to, from, next) {
    this.path = this.$route.path;
    console.log(this.path);
    next();
  }

  // mounted() {
  //   console.log('mounted')
  // },
  // updated() {
  //   console.log('updated')
  // },
};
</script>
