<template>
  <div id="login">
    <div class="login-box">
      <div class="box-item">
        <div class="input-item">
          <span>学号：</span>
          <input v-model="un" type="text" />
        </div>

        <div class="input-item">
          <span>密码：</span>
          <input v-model="pwd" type="password" />
        </div>

        <div class="input-item">
          <button @click="submit">确认</button>
          <button @click="reset">重置</button>
        </div>
      </div>
    </div>
    <div class="shouldKnow">
      <pre>
       1.前往'我的'输入正确密码与学号
       2.输入后点击右上角刷新
      （没有动画效果，请耐心等待)
       3.请每周主动更新一次（右上角）
      </pre>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      un: "",
      pwd: ""
    };
  },
  methods: {
    submit() {
      window.localStorage.setItem("un", JSON.stringify(this.un));
      window.localStorage.setItem("pwd", JSON.stringify(this.pwd));
      this.$store.state.un = this.un;
      this.$store.state.pwd = this.pwd;
      console.log(this.un, this.pwd);
      alert("已保存")
    },
    reset() {
      this.un = "";
      this.pwd = "";
      this.$store.commit("reset", this.un, this.pwd);
      console.log(this.un, this.pwd);
      window.localStorage.setItem("un", JSON.stringify(this.un));
      window.localStorage.setItem("pwd", JSON.stringify(this.pwd));
    }
  },
  created() {
    this.un = JSON.parse(window.localStorage.getItem("un"));
    this.pwd = JSON.parse(window.localStorage.getItem("pwd"));
  }
};
</script>

<style>
#login {
  width: 100%;
  background: url("../assets/img/backgroundss.jpg");
  height: 100vh;
  color: #fff;
}
.login-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  padding-top: 50%;
}
.input-item {
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
}
.input-item input {
  border: #888888 solid 2px;
  border-radius: 5px;
  width: 60%;
}
.input-item button {
  margin: 15px;
  color: red;
  background-color: #fff;
  border-radius: 5px;
  font-size: 15px;
  width: 80px;
  height: 30px;
  font-family: 宋体;
  font-weight: bolder;
}
</style>