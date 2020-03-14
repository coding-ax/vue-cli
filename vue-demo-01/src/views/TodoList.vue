<template>
  <div id="todo-list">
    <div class="input-box">
      <p class="input-title">请输入备忘录</p>

      <div class="input-area">
        <input type="text" v-model="currentString" @keydown.enter="clickAdd" placeholder="请输入待办事项" />
        <span class="input-submit" @click="clickAdd">+</span>
      </div>

      <div class="TodoList-item">
        <p class="TodoList-title">TODOLIST</p>
        <ul>
          <li v-for="(item,index) in todoList" :key="index">
            <div class="inline-div">
              <span @click="ListClick(true,index)" class="super-span"></span>
              <span>{{item}}</span>
            </div>
          </li>
        </ul>

        <div class="TodoList-item">
          <p class="TodoList-title">DONELIST</p>
          <ul>
            <li v-for="(item,index) in doneList" :key="index">
              <div class="inline-div">
                <img src="../assets/Head/finish.svg" @click="ListClick(false,index)" alt />
                <span>{{item}}</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="list-button-count" @click="showOperation">操作列表</div>
    <!-- <transition name="list-push"> -->
    <div class="list-button">
      <div class="list-screen" v-show="isMenu" @click="showOperation"></div>

      <transition name="list-push">
        <div class="list-all" v-show="isMenu">
          <div class="list-button">
            <div class="list-button-one" @click="deleteItem(1)">清空未完成</div>
            <div class="list-button-one" @click="deleteItem(2)">清空已完成</div>
            <div class="list-button-one" @click="deleteItem(3)">清空全部</div>
            <div class="list-cancel" @click="showOperation">取消</div>
          </div>
        </div>
      </transition>
    </div>

 
      <alertBox @alertans="alertAns" :isAlert="isAlert" :alertContent="alertContent" />
  </div>
</template>

<script>
import alertBox from "../components/smallItem/alertBox";
export default {
  components: {
    alertBox
  },
  data() {
    return {
      todoList: [],
      doneList: [],
      currentString: "",
      isMenu: false,
      isAlert: false,
      ansCheck: false,
      type: 0,
      alertContent: {
        title: "清空未完成",
        context: "是否确定清空当前的TODOLIST？"
      }
    };
  },

  created() {
    this.todoList = JSON.parse(localStorage.getItem("todoList"));
    this.doneList = JSON.parse(localStorage.getItem("doneList"));
    if (this.todoList == null) {
      (this.todoList = []), (this.doneList = []);
    }
  },
  methods: {
    ListClick(status, index) {
      if (status) {
        this.doneList.push(this.todoList[index]);
        this.todoList.splice(index, 1);
        this.setListDB();
      } else {
        this.todoList.push(this.doneList[index]);
        this.doneList.splice(index, 1);
        this.setListDB();
      }
    },
    clickAdd() {
      if (this.currentString == "") {
        alert("你忘记了输入哦！");
        return;
      } else {
        this.todoList.push(this.currentString);
        this.setListDB();
        this.currentString = "";
      }
    },
    showOperation() {
      this.isMenu = !this.isMenu;
    },
    deleteItem(type) {
      this.isAlert = true;
      this.type = type;
      switch (this.type) {
        case 1: {
          this.alertContent = {
            title: "操作未完成",
            context: "是否确定清空当前的TODOLIST？"
          };
          break;
        }
        case 2: {
          this.alertContent = {
            title: "操作未完成",
            context: "是否确定清空当前的DONELIST？"
          };
          break;
        }
        case 3: {
          this.alertContent = {
            title: "操作未完成",
            context: "是否确定清空全部内容？"
          };
          break;
        }
      }
    },
    setListDB() {
      localStorage.setItem("todoList", JSON.stringify(this.todoList));
      localStorage.setItem("doneList", JSON.stringify(this.doneList));
    },
    alertAns(ans) {
      this.isAlert = false;
      if (ans) {
        switch (this.type) {
          case 1: {
            this.todoList = [];
            break;
          }
          case 2: {
            this.doneList = [];
            break;
          }
          case 3: {
            this.doneList = [];
            this.todoList = [];
            break;
          }
        }
        this.setListDB();
        this.type = 0;
      }
    }
  }
};
</script>

<style>
#todo-list {
  margin-top: 45px;
  margin-left: 20px;
}
.input-title {
  text-align: center;
  color: red;
  font-size: 30px;
  font-weight: 500;
}
.input-area {
  display: flex;
  flex-direction: row;
  color: red;
}
.input-area input {
  border: none;
  border-bottom: 1px solid black;
  height: 30px;
  width: 70%;
  margin-right: 20px;
}
.input-submit {
  border: 2px solid red;
  font-size: 40px;
  width: 30px;
  height: 30px;
  text-align: center;
  font-weight: bolder;
  line-height: 23px;
  border-radius: 50%;
  cursor: pointer;
}

.TodoList-title {
  color: #888888;
}
.TodoList-item {
  color: #666666;
  font-size: 16px;
  font-weight: bolder;
}
.TodoList-item ul {
  border-bottom: 1px solid #777777;
  padding-bottom: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
}
.TodoList-item li {
  margin: 0;
  padding: 0;
}
.TodoList-item img {
  width: 20px;
  height: 20px;
  cursor: pointer;
}
.inline-div {
  display: flex;
  flex-direction: row;
  align-items: center;
  border-bottom: 1px solid #666666;
  position: relative;
}

.super-span {
  display: inline-table;
  width: 15px;
  height: 15px;
  border: 1px solid black;
  border-radius: 50%;
  cursor: pointer;
}

.list-button-count {
  background-color: red;
  position: fixed;
  left: 15px;
  right: 15px;
  font-size: 20px;
  bottom: 5px;
  margin: 0;
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: white;
  box-shadow: #666666 10px 10px 10px;
  border-radius: 3px;
}
.list-screen {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.list-all {
  background-color: white;
  border-bottom: #666666 1px solid;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.list-button {
  width: 100%;
  font-size: 18px;
}
.list-button-one {
  height: 40px;
  border-bottom: 2px solid #f6f6f6;
  padding-top: 12px;
  cursor: pointer;
}
.list-cancel {
  height: 40px;
  cursor: pointer;
  width: 100%;
  border-top: #f6f6f6 8px solid;
  padding-top: 15px;
}
.list-cancel:hover {
  background-color: #f6f6f6;
}
.list-button-one:hover {
  background-color: #f6f6f6;
}

.list-push-enter-active {
  animation: pushScreen 0.35s;
}
.list-push-leave-active {
  animation: pushScreen 0.2s reverse;
}
@keyframes pushScreen {
  0% {
    position: absolute;
    bottom: -40%;
  }
  100% {
    position: absolute;
    bottom: 0;
  }
}

</style>