<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <h2>{{this.$store.state.count}}</h2>
    <button @click="$store.state.count++">+</button>
    <button @click="$store.state.count--">-</button>
    <hello-vuex></hello-vuex>
  </div>
</template>

<script>
import HelloVuex from './components/HelloVuex.vue'
export default {
  components:{
    HelloVuex
  },
  data() {
    return {
      message:'helloVueX'
    }
  },
  
}
</script>
<style>

</style>
