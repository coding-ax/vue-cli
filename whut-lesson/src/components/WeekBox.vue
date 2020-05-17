<template>
  <div class="week-date">
    <div
      class="week-list"
      v-for="(item,index) in date"
      :key="index"
      :class="{today:index==today}"
    >
      <span>{{week[index]}}</span>
      <div>
        <span>{{item}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      week: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      date: [],
      today: -1
    };
  },
  created() {
    let Nowdate = new Date();
    let tcount = Nowdate.getDay();
    if (tcount == 0) {
      tcount = 6;
    }
    this.today=tcount
    let WeekFirstDay = new Date(Nowdate.getTime() - tcount * 86400000);

    for (let i = 0; i < 7; i++) {
      let currentTime = new Date(WeekFirstDay.getTime()+i*86400000);
      let M = Number(currentTime.getMonth()) + 1;
      let item = M + "月" + currentTime.getDate() + "日"
      console.log(M + "月" + currentTime.getDate() + "日");
      this.date.push(item);
    }

    // this.today=new Date().getDay()
    // console.log(this.today)
    // for(let i =0;i<7;i++){
    //   let currentTime = new Date()
    //   this.date.push(new Date())
    // }
    // console.log("date",this.date)
  }
};
</script>

<style>
.week-date {
  display: flex;
  flex-direction: row;
  margin: 0 10px 0;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 18px;
}
.week-list {
  width: 13%;
  font-size: 10px;
  margin: 1px;
  border-radius: 3px;
}
.today {
  background-color: #4dc3dd;
  color: #fff;
}
</style>