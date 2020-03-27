<template>
  <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide" :key="banner" v-for="banner in banners">
        <img :src="banner" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<script>
export default {
    props: ['banners'],
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
    this.mySwiper.slideTo(3, 1000, false);
  },
  created(){
      
  }
};
</script>

<style>
</style>