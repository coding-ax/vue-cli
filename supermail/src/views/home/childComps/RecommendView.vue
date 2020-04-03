<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" :key="index" class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
    props: {
        recommends:{
            type:Array,
            default:{}
        }
    }
}
</script>

<style>
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: #eee 10px solid;
}
.recommend-item{
    flex: 1;
}
.recommend-item img{
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
}
</style>