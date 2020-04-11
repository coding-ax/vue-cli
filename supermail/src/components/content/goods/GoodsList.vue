<template>
  <div class="goods">
    <good-lists-item
      class="goods-item"
      v-for="(item,index) in goods"
      :key="index"
      :goodsItem="item"
    ></good-lists-item>
  </div>
</template>

<script>
import GoodListsItem from "./GoodsListItem";
export default {
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    GoodListsItem
  }
};
</script>

<style scoped>
.goods {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.goods-item {
  width: 49%;
}
</style>