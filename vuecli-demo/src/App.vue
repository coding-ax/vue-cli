<template>
  <div id="app">
    <!-- 调用组件 -->
    <Header></Header>
    <Users :users="users" />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
//1.局部调用组件
import Header from "./components/Header";
import Users from "./components/Users";
import Footer from "./components/Footer";

export default {
  name: "App",
  //局部注册组件
  data() {
    return {
       users: [
        { name: "AX1", wechat: "123456", show: false },
        { name: "AX2", wechat: "123456", show: false },
        { name: "AX3", wechat: "123456", show: false },
        { name: "AX4", wechat: "123456", show: false },
        { name: "AX5", wechat: "123456", show: false },
        { name: "AX6", wechat: "123456", show: false },
        { name: "AX7", wechat: "123456", show: false },
        { name: "AX8", wechat: "123456", show: false },
        { name: "AX9", wechat: "123456", show: false }
      ]
    };
  },

  components: {
    //Vue.component
    Users,
    Header,
    Footer
  }
};
</script>
//注释
<style scoped>
h1 {
  color: purple;
}
</style>
