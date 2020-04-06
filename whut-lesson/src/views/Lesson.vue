<template>
  <div id="box">
    <div class="week-box-large">
      <week-box :date="date"></week-box>
      <lesson-date v-if="lesson" :lesson="lesson" :changeFlag="changeFlag" @changeOver="changeOver"></lesson-date>
    </div>
  </div>
</template>

<script>
import weekBox from "../components/WeekBox";
import lessonDate from "../components/LessonDate";
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
      alert(`1.前往'我的'输入正确密码与学号`);
      alert(`2.输入后点击右上角刷新（没有动画效果，请耐心等待）
     3.感谢陈杰哥哥提供接口
     4.请每周主动更新一次（右上角）`)
    } else {
      let multidata = JSON.parse(window.localStorage.getItem("multidata"));
      console.log("multidata"+multidata)
      if (multidata == null) {
        this.refresh();
      }
      else{
        console.log("hhh")
        this.date=multidata.date;
        this.lesson=multidata.clas;
        this.changeFlag=true;
      }
    }
  },
  methods: {
    refresh() {
      console.log("fetching");
      fetch(
        `http://47.102.197.109:8888/api/course?un=${this.$store.state.un}&pwd=${this.$store.state.pwd}`
      )
        .then(res => res.json())
        .then(res => {
          console.log("fetched");
          console.log(res);
          if (res.date.length == 0) {
            alert("密码错误");
          }
          this.date = res.date;
          this.lesson = res.clas;
          this.changeFlag = true;
          console.log("lesson:", this.lesson);
          window.localStorage.setItem('multidata',JSON.stringify(res));
        });
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
/**0121810880322	ykh20001229
 */
/** 0121810870217 AX.xgp000908 */
</style>