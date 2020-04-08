<template>
  <div>
    <el-pagination background layout="prev, pager, next" :total="10"></el-pagination>
    <van-action-sheet v-model="show" :actions="actions" @select="onSelect"  description="操作列表" />
    <div @click="onSelect">
      click
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import { ActionSheet,Toast } from "vant";
Vue.use(ActionSheet);
export default {
  data() {
    return {
      show: false,
      actions: [
        { name: "操作1" },
        { name: "操作2" },
        { name: "操作3", subname: "滴滴滴" }
      ]
    };
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = true;
      Toast(item.name);
    }
  }
};
</script>

<style>
</style>