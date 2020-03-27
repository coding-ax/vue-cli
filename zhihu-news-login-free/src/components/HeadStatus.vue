<template>
  <div id="head">
    <div class="header-box">
      <div class="head-date">
        <div class="small-span-date">{{dateDate}}</div>
        <div class="small-span-month" @click="showStatus=!showStatus">{{dateMonth}}</div>
      </div>

      <div class="head-sayhello">{{timeString}}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dateDate: "27",
      dateMonth: "三月",
      timeString: "早上好！"
    };
  },
  created() {
    let date = new Date().getMonth() + 1;
    let time = new Date().getDate();
    let hour = new Date().getHours();
    switch (hour) {
      case hour < 11 && hour >= 4:
        this.timeString = "早上好！";
      case hour < 14 && hour >= 11:
        this.timeString = "中午好！";
      case hour < 18 && hour >= 14:
        this.timeString = "晚上好！";
      case hour < 4 && hour >=18 :
        this.timeString = "凌晨";
    }
    setTimeout(() => {
      this.timeString = "知乎日报（高仿）";
    }, 8000);
  }
};
</script>

<style>
#head {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  height: 50px;
}
.header-box {
  display: flex;
  flex-direction: row;
  width: 100%;
  padding: 5px;
}
.head-date {
  width: 10%;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  border-right: 2px solid #f6f6f6;
  font-weight: bolder;
}
.small-span-date {
  font-size: 20px;
}
.small-span-month {
  font-size: 11px;
}
.head-sayhello {
  font-size: 30px;
  margin-left: 15px;
}
.head-sayhello-enter-active,
.head-sayhello-leave-active {
  transition: opacity 5s;
}
.head-sayhello-enter,
.head-sayhello-leave-to {
  opacity: 0;
}
</style>