<template>
  <div class="week-date">
    <div class="week-list" 
    v-for="(item,index) in date"
     :key="index"
     :class="{today:index+1==today}"
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
  props: {
    date: {
      type: Array,
      default: []
    }
  },
  data() {
    return {
      week: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      today: 0
    };
  },
  created() {
    this.today = new Date().getDay();
  }
};
</script>

<style>
.week-date {
  display: flex;
  flex-direction: row;
  margin:0 10px 0;
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
.today{
    background-color:#4dc3dd;
    color: #fff;
}
</style>