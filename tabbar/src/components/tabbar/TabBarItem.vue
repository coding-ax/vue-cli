<template>
  <div class="tab-bar-item" @click="itemClick">
    <!-- <img src="../../assets/img/tabbar/message.png" alt="">
    <div>首页</div>-->
    <div v-if="!isActive">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeColor:{
     type:String,
     default:'pink'
    }
  },
  data() {
    return{

    }
  },
  computed: {
    isActive:{
    get:function(){
     return this.$route.path.indexOf(this.path)!=-1?true:false;
    },
    set:function(){
    
    }
    // return this.$route.path.indexOf(this.path)!=-1?true:false;
  },
  activeStyle:{
    get:function(){
      return this.isActive?{color:this.activeColor}:{}
    },
    set:function(){
      return{}
    }
  }
  },
  methods: {
    itemClick() {
      //   console.log('this.path='+this.path);
      this.isActive = true;
      this.$router.replace(this.path);
      //  console.log(this.$router);
    }
  }
}
</script>


<style>
.tab-bar-item {
  flex: 1;
  text-align: center;
  /*tabbar高度通常为49px*/
  height: 49px;
  font-size: 14px;
  cursor: pointer;
}
.tab-bar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

</style>