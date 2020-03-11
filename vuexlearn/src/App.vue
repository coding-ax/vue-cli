<template>
  <div id="app">
    <h2>我是APP组件</h2>
    <h2>{{$store.state.count}}</h2>
    <button @click="acUpdate">全局异步按钮</button>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button>
    <button @click="addNum(5)">+5</button>
    <button @click="addNum(10)">+10</button>
    <h2>我是APP组件</h2>
    <h2>{{$store.getters.powerCount}}</h2>
    <h2>{{$store.getters.moreAgeStudent(25)}}</h2>
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
  methods: {
   addition(){
     //普通的提交风格：
     this.$store.commit('increment')
   },
   subtraction(){
     //特殊的提交:
    this.$store.commit('decrement')
   },
   addNum(count){
     //payload:携带的参数（如果要传值不是一个，则可以用对象传）
    this.$store.commit({
      type:'incrementNum',
      count
    })
   },
   acUpdate(){
     //通过dispatch方法进行异步提交actions dispatch派遣,
     
     this.$store.dispatch('acIncrementNum','我是payload').then(response=>{
       console.log('已经成功')
     })
   }
  },
  computed: {
   
  }
}
</script>
<style>

</style>
