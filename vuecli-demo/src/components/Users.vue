<template>
  <div class="users">
    <h1>Users.vue</h1>
    <ul>
      <li v-for="(user,index) in users" :key="index" @click="user.show=!user.show">
          <h2>我的名字：{{user.name}}</h2>
          <p v-if="user.show">我的微信号：{{user.wechat}}</p>
          </li>
    </ul>
  </div>
</template>

<script>
export default {
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
  }
};
</script>

<style scoped>
.user{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0
}
li{
    flex-grow: 1;
    flex-basis: 200px;
    text-align: center;
    padding: 30px;
    border:1px solid #222;
    margin: 10px;
    cursor: pointer;
}
h1 {
  color: aqua;
}
</style>