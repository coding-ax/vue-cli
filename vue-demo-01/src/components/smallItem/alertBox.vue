<template>
  <div id="alertBox" v-if="isAlert">
    <div class="alert-title">{{alertContent.title}}</div>
    <div class="alert-context">{{alertContent.context}}</div>
    <div class="check-ans">
      <div class="box-yes" @click="clickAns(true)">确定</div>
      <div class="box-no" @click="clickAns(false)">取消</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isAlert: Boolean,
    alertContent: Object
  },
  methods: {
    clickAns(ans) {
      if(ans){
        this.$emit('alertans',true);
      }else{
        this.$emit('alertans',false);
      }
    }
  }
};
</script>

<style>
#alertBox {
  position: fixed;
  left: 10%;
  right: 10%;
  top: 35%;
  bottom: 45%;
  background-color: white;
  border-radius: 5px;
  display: flex column;
  align-items: center;
  text-align: center;
}
.alert-title {
  color: red;
  font-weight: bolder;
  font-size: 20px;
  margin-bottom: 15px;
}
.alert-context {
  color: #666666;
}
.check-ans {
  margin-top: 30px;
  display: flex;
  flex-direction: row;
  text-align: center;
  line-height: 40px;
}
.box-yes {
  color: chartreuse;
  width: 50%;
  border-top: 1px #f6f6f6 solid;
  border-right: 1px #f6f6f6 solid;
}
.box-no {
  width: 50%;
  border-top: 1px #f6f6f6 solid;
  border-left: 1px #f6f6f6 solid;
}
</style>