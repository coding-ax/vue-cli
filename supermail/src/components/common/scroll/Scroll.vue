<template>
  <!-- ref->如果绑定在确切组件上，拿到的就是组件对象
  如果是普通元素，那么就是普通元素对象-->
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
// 计算机中没有黑魔法
import BScroll from "better-scroll";
export default {
  props: {
    probeType: {
      type: Number,
      default: 0
    },
    pullUpLoad: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      scroll: null
    };
  },
  mounted() {
    //   1.创建BSroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad:this.pullUpLoad
    });
    //  2.设置监听
    this.scroll.on("scroll", position => {
      //将postion传出去
      this.$emit("scroll", position);
    });

    this.scroll.on("pullingUp", () => {
    //   console.log("上拉加载");
    this.$emit('pullingUp')
    });
  },
  methods: {
    //ES6 设置函数默认参数
    scrollTo(x, y, time = 300) {
      this.scroll.scrollTo(x, y, time);
    },
    finishPullUp(){
        this.scroll.finishPullUp();
    }
  }
};
</script>

<style scoped>
</style>