<template>
  <div class="goods-list-item">
    <img class="big-img" :src="goodsItem.show.img" alt />
    <div>
      <p>{{goodsItem.title}}</p>
      <span class="price">￥{{goodsItem.price}}</span>
        <img class="small-collect" src="../../../assets\img\common\collect.svg" alt />
        <span class="collect">{{goodsItem.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    goodsItem: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>
<style scoped>
.goods-list-item {
  text-align: center;
}
.small-collect {
  width: 15px;
  height: 15px;
  padding-top: 2px;
}
.goods-list-item p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  font-size: 13px;
}
.big-img {
  width: 90%;
  border-radius: 5px;
 
}
.price {
  color: var(--color-high-text);
   margin-right: 5px;
}
.collect {
  font-size: 13px;
  line-height: 13px;
  
}

</style>