<template>
  <div class="spider">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="banner.id" v-for="banner in banners">
          <img :src="banner.image" />
          <div class="swiper-box">
            <div class="swiper-title">{{banner.title}}</div>
            <div class="author-name">{{banner.hint}}</div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>
 
<script>
export default {
  props: ["banners"],
  data() {
    return {
      //   banners: [],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination"
        }
      }
    };
  },
  mounted() {
    // console.log("Current Swiper instance object", this.mySwiper);
    let i = 1;
    this.mySwiper.slideTo(0, 1000, true);
    setInterval(() => {
      if (i == this.banners.length) i = 0;
      this.mySwiper.slideTo(i++, 1000, true);
    }, 3000);
  },
  created() {},
  methods: {
    replaceWay(path) {
      console.log("dd");
      console.log(path);
      window.location = path;
    }
  }
};
</script>

<style>
img {
  width: 100%;
}

.swiper-wrapper {
  margin: 0;
  padding: 0;
}
.swiper-box {
  position: relative;
  bottom: 90px;
  margin-left: 20px;
}
.swiper-title {
  color: white;
  font-size: 20px;
  margin-bottom: 4px;
  font-weight: bolder;
  flex-wrap: wrap;
}
.author-name {
  color: #e6e6e68e;
  font-size: 12px;
}
.swiper-pagination {
  position: relative;
  top:0px;
}
</style>