<template>
  <div id="todo-list">
    <div class="input-box">
      <p class="input-title">请输入备忘录</p>


      <div class="input-area">
        <input type="text" v-model="currentString"  @keydown.enter="clickAdd" placeholder="请输入待办事项" />
        <span class="input-submit" @click="clickAdd">+</span>
      </div>


      <div class="TodoList-item">
        <p class="TodoList-title">TODOLIST</p>
        <ul>
          <li v-for="(item,index) in todoList" :key="index">
            <div class="inline-div"><span @click="ListClick(true,index)" class="super-span"></span><span>{{item}}</span></div>
           
          </li>
        </ul>




        <div class="TodoList-item">
          <p class="TodoList-title">DONELIST</p>
          <ul>
            <li v-for="(item,index) in doneList" :key="index">
              <div class="inline-div" ><img src="../assets/Head/finish.svg" @click="ListClick(false,index)" alt=""><span>{{item}}</span></div>
             
            </li>
          </ul>
     
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoList: [],
      doneList: [],
      currentString: ""
    };
  },
  created() {
    this.todoList = JSON.parse(localStorage.getItem("todoList"));
    this.doneList = JSON.parse(localStorage.getItem("doneList"));
    if (this.todoList == null) {
      (this.todoList = []), (this.doneList = []);
    }
    console.log(this.todoList);
  },
  methods: {
    ListClick(status, index) {
      if (status) {
        this.doneList.push(this.todoList[index]);
        this.todoList.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
        localStorage.setItem("doneList", JSON.stringify(this.doneList));
      } else {
        this.todoList.push(this.doneList[index]);
        this.doneList.splice(index, 1);
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
        localStorage.setItem("doneList", JSON.stringify(this.doneList));
      }
    },
    clickAdd() {
      if (this.currentString == "") {
        alert("你忘记了输入哦！");
        return;
      } else {
        this.todoList.push(this.currentString);
        console.log("heee" + JSON.stringify(this.todoList));
        localStorage.setItem("todoList", JSON.stringify(this.todoList));
        localStorage.setItem("doneList", JSON.stringify(this.doneList));
        this.currentString = "";
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
.input-area{
    display: flex;
    flex-direction: row;
    color:red;
}
.input-area input{
    border: none;
    border-bottom: 1px solid black;
    height: 30px;
    width: 70%;
    margin-right: 20px;
}
.input-submit{
    border: 2px solid red;
    font-size: 40px;
    width:30px;
    height: 30px;
    text-align: center;
    font-weight: bolder;
    line-height: 30px;
    border-radius: 50%;
      cursor: pointer;
}

.TodoList-title{
    color: #888888;
}
.TodoList-item{
    color: #666666;
    font-size: 16px;
    font-weight: bolder;
}
.TodoList-item ul{
    border-bottom: 1px solid #777777;
    padding-bottom: 12px;
    list-style: none;
     margin: 0;
    padding: 0;
}
.TodoList-item li{
    margin: 0;
    padding: 0;
}
.TodoList-item img{
    width: 20px;
    height: 20px;
      cursor: pointer;
}
.inline-div{
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid #666666;
    position: relative;
}

.super-span{
    display: inline-table;
    width: 15px;
    height: 15px;
    border: 1px solid  black;
    border-radius: 50%;
    cursor: pointer;
}
</style>