<template>
  <div id="app">
    <!-- 三.使用路由： -->
    <!-- router-view组件用于占位显示view组件 -->
    <h2>我是APP</h2>
    <!-- 设置router-link组件，用to属性表示要更改的url路径 -->
    <!-- 可以用tag标签将router-link渲染成其他标签 -->
    <!--  添加replace指定不可通过返回 -->
    <!-- 添加active-class -->
    <!-- <router-link active-class="active" to="/home" tag="button" replace>首页</router-link>
    <router-link active-class="active" to="/about" tag="button" replace>关于</router-link>-->
    <!-- <router-link  to="/home" tag="button" replace>首页</router-link>
    <router-link  to="/about" tag="button" replace>关于</router-link>-->
    <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name:'App',
  methods: {
    homeClick() {
      //通过代码修改路由：请使用vue-router，不要绕过去使用history,当调用Vue.use(VueRouter)之后，就可以使用$router对象了(必须使用$)
      //push=>history.pushState
      //replace=>history.replace
      // this.$router.push('/home');
      this.$router.replace('/home');
      // console.log("dsd")
    },
    aboutClick() {
      // this.$router.push('/about');
      this.$router.replace('/about');
      // console.log("dasdsa") 
    }
  }
};
</script>
<style>
.active {
  color: red;
}
</style>
