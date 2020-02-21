<template>
  <!--Html标签-->
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{wechat}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<script>
//js逻辑
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "AX",
      wechat: "123456789"
    };
  },
  methods: {
    greeting() {
      return `大家好，我叫${this.msg},我的微信是：${this.wechat}`;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*样式 */
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
