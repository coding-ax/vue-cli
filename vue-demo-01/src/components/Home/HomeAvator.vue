<template>
  <div id="home-avator" @click="routeChange" >
      <img src="../../assets/Head/head.png" alt="">
  </div>
</template>

<script>
export default {
    methods: {
        routeChange(){
            this.$router.push('/info');
        }
    }
}
</script>

<style>
#home-avator{
    display: flex;
    align-self: center;
    justify-content: center;
    margin: 20px;
    margin-top: 80px;
    cursor: pointer;
}
#home-avator img{
    border-radius: 50%;
    width: 180px;
    height: 180px;
    box-shadow: 10px 10px 10px #f6f6f6;
}
</style>