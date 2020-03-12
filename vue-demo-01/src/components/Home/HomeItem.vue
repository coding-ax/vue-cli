<template>
  <div id="home-item">
    <div class="three-item">
      <div class="home-item-item">
        <img src="../../assets/Head/biaodan.svg" @click="routerChange('/todo')" alt />
        <span>备忘录</span>
      </div>
      <div class="home-item-item">
        <img src="../../assets/Head/biaodan.svg" alt />
        <span>备忘录</span>
      </div>
      <div class="home-item-item">
        <img src="../../assets/Head/biaodan.svg" alt />
        <span>备忘录</span>
      </div>
    </div>
    <div class="three-item">
      <div class="home-item-item">
        <img src="../../assets/Head/biaodan.svg" alt />
        <span>备忘录</span>
      </div>
      <div class="home-item-item">
        <img src="../../assets/Head/biaodan.svg" alt />
        <span>备忘录</span>
      </div>
      <div class="home-item-item">
        <img src="../../assets/Head/biaodan.svg" alt />
        <span>备忘录</span>
      </div>
    </div>
    <div class="three-item">
      <div class="home-item-item">
        <img src="../../assets/Head/biaodan.svg" alt />
        <span>备忘录</span>
      </div>
      <div class="home-item-item">
        <img src="../../assets/Head/biaodan.svg" alt />
        <span>备忘录</span>
      </div>
      <div class="home-item-item">
        <img src="../../assets/Head/biaodan.svg" alt />
        <span>备忘录</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    routerChange(path){
      this.$router.replace(path);
    }
  }
};
</script>

<style>
#home-item {
  
}
.three-item{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-bottom: 1px #f6f6f6 solid;
  padding: 10px;
}
.home-item-item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 33%;
  font-weight: bolder;
  font-size: 15px;
  cursor: pointer;
}
.home-item-item img {
  width: 80px;
  height: 80px;
}
</style>