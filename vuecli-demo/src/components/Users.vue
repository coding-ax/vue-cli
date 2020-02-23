<template>
  <div class="users">
    <ul>
      <li v-for="(user,index) in users" :key="index" @click="user.show=!user.show">
        <h2>我的名字：{{user.name}}</h2>
        <p v-if="user.show">我的微信号：{{user.wechat}}</p>
      </li>
    </ul>
    <!-- 传递引用(对一个进行操作，将会影响到其他) -->
    <button @click="deleteUser">delete user</button>
  </div>
</template>

<script>
export default {
  props: {
    users: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      // users:users
    };
  },
  methods: {
    deleteUser() {
      this.users.pop();
    }
  }
};
</script>

<style scoped>
.user {
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  padding: 0 20px;
  box-sizing: border-box;
}
ul {
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding: 0;
}
li {
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #222;
  margin: 10px;
  cursor: pointer;
}
h1 {
  color: aqua;
}
</style>