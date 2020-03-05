<template>
  <div id="app">
    <!-- 三.使用路由： -->
    <!-- router-view组件用于占位显示view组件 -->
    <h2>我是APP</h2>
    <!-- 设置router-link组件，用to属性表示要更改的url路径 -->
    <!-- 可以用tag标签将router-link渲染成其他标签 -->
    <!--  添加replace指定不可通过返回 -->
    <!-- 添加active-class -->
    <!-- 路由懒加载 -->
    <!-- <router-link active-class="active" to="/home" tag="button" replace>首页</router-link>
    <router-link active-class="active" to="/about" tag="button" replace>关于</router-link>-->
    <!-- <router-link  to="/home" tag="button" replace>首页</router-link>
    <router-link  to="/about" tag="button" replace>关于</router-link>-->
    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button>-->
    <!-- URL格式：协议头（https/http） ://加主机名(ip地址/域名) :加端口（使用默认80，则省略）/ 加path(资源路径）？查询内容#片段ID-->
    <!-- URL:scheme:// host:port/path?quert#fragment-->
      <div>
        <router-link to="/home" tag="button">首页</router-link>
        <router-link to="/about" tag="button">关于</router-link>
        <router-link :to="'/user/'+userId" tag="button">用户</router-link>
        <!-- <router-link :to="{path:'/profile',query:{name:'AX',age:18}}" tag='button'>档案</router-link> -->
        <button @click="profileClick">点我</button>
        <router-view></router-view>
        
      </div>
    
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId: "张三"
    };
  },
  methods: {
    // homeClick() {
    //   //通过代码修改路由：请使用vue-router，不要绕过去使用history,当调用Vue.use(VueRouter)之后，就可以使用$router对象了(必须使用$)
    //   //push=>history.pushState
    //   //replace=>history.replace
    //   // this.$router.push('/home');
    //   this.$router.replace('/home');
    //   // console.log("dsd")
    // },
    profileClick(){
      this.$router.push({
        path:'/profile',
        query:{
          name:'AX',
          age:18
        }
      });
      // console.log(this.$router);
      
    },
    // aboutClick() {
    //   // this.$router.push('/about');
    //   this.$router.replace('/about');
    //   // console.log("dasdsa")
    // }
  }
};
</script>
<style>
.active {
  color: red;
}
</style>
