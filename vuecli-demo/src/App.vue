<template>
  <div id="app">
    <!-- 调用组件 -->
    <Users />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
//1.局部调用组件
import Users from "./components/Users";


export default {
  name: 'App',
  //局部注册组件
  components:{//Vue.component
    Users
  }
}
</script>

<style>

</style>
