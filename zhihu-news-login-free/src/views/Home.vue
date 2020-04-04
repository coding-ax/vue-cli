<template>
  <div id="home">
    <div class="head">
      <headStatus></headStatus>
    </div>

    <div class="head-spider-box">
      <spider :banners="banners"></spider>
    </div>
    <div class="head-item-box">
      <div class="head-item" v-for="story in stories" :key="story.id">
        <head-item :item="story"></head-item>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

import headStatus from "../components/HeadStatus";
import spider from "../components/spider";
import headItem from "../components/headItem";
export default {
  components: {
    headStatus,
    spider,
    headItem
  },
  data() {
    return {
      banners: [],
      topStories: [],
      stories: [],
      storiesArray: []
    };
  },
  computed: {},
  created() {
    axios.get("http://47.102.212.191:3000/").then(res => {
      // this.newData=res.data;
      // console.log(res.data.data);
      this.topStories = res.data.data.top_stories;
      // console.log(this.topStories);
      this.stories = res.data.data.stories;
      // console.log(this.stories);
      this.banners.push(...this.topStories);
      this.storiesArray.push(...this.topStories);
      console.log(this.banners);
    });
  },
  methods: {
    fetchData() {
      axios.get("http://47.102.212.191:3000/").then(res => {
        // this.newData=res.data;
        console.log(res.data.data);
        this.topStories = res.data.data.top_stories;
        console.log(this.topStories);
        this.stories = res.data.data.stories;
        console.log(this.stories);
        for (let i = 0; i < this.topStories.length; i++) {
          this.banners.push(this.topStories[i].image);
        }
      });
    }
  }
};
</script>

<style>
.head-spider-box {
  margin-top: 60px;
}
.head {
  z-index: 9999;
}
#home {
  display: flex;
  flex-direction: column;
}

</style>