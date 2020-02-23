<template>
  <div id="app">
    <!-- 调用组件 -->
    <!--属性传值：值有两种情况：1.传值 2.传引用-->
 
  </div>
</template>

<script>

//1.局部调用组件
import FormHelper from "./components/FormHelper";

export default {
  name: "App",
  //局部注册组件
components: {
    //Vue.component
  FormHelper
  },
  data() {
    return {
      title:'我是h2'
    };
  },
  

  methods: {
  
  },
};
</script>
//注释
<style scoped>
p{
  background-color: lightcoral
}
</style>
