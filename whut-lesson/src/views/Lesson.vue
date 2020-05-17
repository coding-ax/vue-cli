<template>
  <div id="box">
    <div class="week-box-large">
      <week-box></week-box>
      <lesson-date v-if="lesson" :lesson="lesson" :changeFlag="changeFlag" @changeOver="changeOver"></lesson-date>
    </div>
  </div>
</template>

<script>
import weekBox from "../components/WeekBox";
import lessonDate from "../components/LessonDate";
import {getLesson} from "../network/home";
export default {
  components: {
    weekBox,
    lessonDate
  },
  data() {
    return {
      result: null,
      date: null,
      lesson: null,
      changeFlag: false
    };
  },
  computed: {
    isFresh() {
      return this.$store.state.refresh;
    }
  },
  watch: {
    isFresh(val) {
      if (val) {
        console.log("heee");
        this.refresh();
      }
      this.$store.commit("upRefresh", false);
    }
  },
  created() {
    this.$store.state.un = JSON.parse(window.localStorage.getItem("un"));
    this.$store.state.pwd = JSON.parse(window.localStorage.getItem("pwd"));
    console.log(this.$store.state.un);
    if (this.$store.state.un == null) {
      alert(`请前往'我的'绑定正确密码与学号`);
    } else {
      let multidata = JSON.parse(window.localStorage.getItem("multidata"));
      console.log("multidata"+multidata)
      if (multidata == null) {
        this.refresh();
      }
      else{
        console.log("hhh")
        // this.date=multidata.date;
        this.lesson=multidata.data;
        this.changeFlag=true;
      }
    }
  },
  methods: {
    refresh() {
      console.log("fetching");
      // fetch(
      //   `http://47.102.197.109:8888/api/course?un=${this.$store.state.un}&pwd=${this.$store.state.pwd}`
      // )
      // fetch("http://120.78.224.81:8888/api/lesson?username=0121810880322&password=ykh20001229").then(res=>res.json()).then(res=>{
      //   console.log(res);
      // })
      console.log(this.$store.state.un,this.$store.state.pwd)
        getLesson(this.$store.state.un,this.$store.state.pwd)
        .then(res => {
          console.log("fetched");
          console.log(res);
          // this.date = res.data.date;
          this.lesson = res.data.data;
          this.changeFlag = true;
          console.log("lesson:", this.lesson);
          window.localStorage.setItem('multidata',JSON.stringify(res.data));
        }).catch(res=>{
           alert("密码错误");
        })
    },
    changeOver() {
      this.changeFlag = false;
      console.log("change is over");
    }
  }
};
</script>

<style>
.week-box-large {
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  padding: 3px;
}
</style>