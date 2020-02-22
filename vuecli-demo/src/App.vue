<template>
  <div id="app">
    <!-- 调用组件 -->
    <Header></Header>
    <Users />
    <Footer />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//1.局部调用组件
import Header from "./components/Header";
import Users from "./components/Users";
import Footer from './components/Footer';

export default {
  name: 'App',
  //局部注册组件
  components:{//Vue.component
    Users,
    Header,
    Footer
  }
}
</script>
//注释
<style scoped>
h1{
  color: purple;
}
</style>
