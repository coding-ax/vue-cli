<template>
  <div id="avator-info">
    <transition name="head-down">
       
    <div class="head-down" >
      <home-avator></home-avator>
    </div>
    </transition>
     <transition name="head-up">
    <div class="head-up" v-show="isLogin">
       <p><span>盼望你能见到心里的月亮</span></p>
        <p><span>与岁月共白首</span></p>
    </div>
     </transition>
  </div>
</template>

<script>
import HomeAvator from "../components/Home/HomeAvator";
export default {
    data () {
        return {
            isLogin:false
        }
    },
  components: {
    HomeAvator
  },
  methods: {
      clickHere(){
          this.isLogin=!this.isLogin;
      }
  },
 created () {
     setTimeout(() => {
         this.isLogin=true;
     }, 200);
 }
};
</script>

<style>
#avator-info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}
.head-up{
opacity:1;
  position: relative;
  top: 50px;
}
.head-up-enter-active, .head-up-leave-active {
  transition: all 3s;
}
.head-up-enter, .head-up-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  position: relative;
  top: 300px;
}
</style>