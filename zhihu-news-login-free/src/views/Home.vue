<template>
  <div id="home">
    <headStatus></headStatus>
    <div class="head-spider-box">
      <spider :banners="imgArray"></spider>
    </div>
  </div>
</template>

<script>
import headStatus from "../components/HeadStatus";
import spider from "../components/spider";
export default {
  components: {
    headStatus,
    spider
  },
  data() {
    return {
      imgArray: [],
      newData: {}
    };
  },
  computed: {},
  created() {
    console.log("create");
    fetch("http://47.102.212.191:3000/")
      .then(res => res.json())
      .then(res => {
        this.newData = res;
        console.log(res);
        console.log(this.newData);
      });
  }
};
</script>

<style>
.head-spider-box {
  margin-top: 60px;
}
</style>