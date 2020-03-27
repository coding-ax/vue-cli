<template>
  <div id="Item">
    <div class="box">
      <a :href="item.url">
        <div class="title">{{item.title}}</div>
        <div class="author">{{item.hint}}</div>
      </a>
    </div>
    <div class="img-place">
      <a :href="item.url">
        <img :src="item.images[0]" alt />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      item: []
    };
  }
};
</script>

<style>
#Item {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
}
.img-place img {
  width: 60px;
  height: 60px;
  margin-right: 18px;
}
a {
  text-decoration: none;
  color: #333;
}
a::after {
  color: #888888;
}
.box {
  font-weight: bolder;
}
.author {
  font-size: 12px;
  color: #888888;
  margin-top: 5px;
}
</style>