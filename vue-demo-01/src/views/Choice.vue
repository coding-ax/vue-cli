<template>
  <div id="choice-box">
    <div class="choice-box-item">
      <p class="choice-title">告别你的所有纠结</p>
      <p class="choice-title-two">请点击</p>
      <div class="choice-box-content">
        <div
          v-for="item in awardArray"
          :key="item.id"
          :class="['choice-small-item'+item.id,{'choice-current-item':currentIndex==item.id}]"
        >
          <img :src="item.imgSrc" alt />
          <div class="choice-insert-title">{{item.name}}</div>
        </div>
        <div class="choice-small-begin" @click="playStart()">
          <img src="../assets/Head/wode-.svg" alt />
          <div class="choice-insert-title">点击开始</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      awardArray: [
        {
          id: 1,
          name: "我有没有",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 2,
          name: "少年啊",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 3,
          name: "壮志",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 4,
          name: "十大",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 5,
          name: "十大啊",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 6,
          name: "瓦达",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 7,
          name: "特点",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 8,
          name: "尔特",
          imgSrc: require("../assets/Head/orange.svg")
        }
      ],
      currentIndex: 1
    };
  },
  methods: {
    playStart() {
      console.log(this);

      console.log(this);
      setInterval(() => {
        this.currentIndex++;
        if (this.currentIndex == 9) {
          this.currentIndex = 1;
        }
        console.log(this.currentIndex);
      }, 500);
    }
  }
};
</script>

<style>
#choice-box {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.choice-title {
  color: red;
  font-size: 24px;
  margin-bottom: 2px;
}
.choice-title-two {
  color: #f6f6f6;
}
.choice-box-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0;
}
.choice-small-item1 {
  width: 32.8%;
  position: relative;
  border: 1px solid #f6f6f6;
}
.choice-small-item2 {
  width: 32.8%;
  border: 1px solid #f6f6f6;
}
.choice-small-item3 {
  border: 0.1px solid #f6f6f6;
  width: 32.8%;
}
.choice-small-item4 {
  border: 1px solid #f6f6f6;
  width: 32.8%;
  position: relative;
  left: 300px;
}
.choice-small-item5 {
  width: 32.8%;
  position: relative;
  border: 1px solid #f6f6f6;
  left: 150px;
  top: 107px;
}
.choice-small-item6 {
  width: 32.8%;
  position: relative;
  border: 1px solid #f6f6f6;
  left: -150px;
  top: 106px;
}
.choice-small-item7 {
  width: 32.8%;
  position: relative;
  border: 1px solid #f6f6f6;
}
.choice-small-item8 {
  width: 32.8%;
  position: relative;
  border: 1px solid #f6f6f6;
  left: -150px;
  top: -106px;
}
.choice-small-item1 img {
  width: 80px;
  height: 80px;
}
.choice-small-item2 img {
  width: 80px;
  height: 80px;
}
.choice-small-item3 img {
  width: 80px;
  height: 80px;
}
.choice-small-item4 img {
  width: 80px;
  height: 80px;
}
.choice-small-item5 img {
  width: 80px;
  height: 80px;
}
.choice-small-item6 img {
  width: 80px;
  height: 80px;
}
.choice-small-item7 img {
  width: 80px;
  height: 80px;
}
.choice-small-item8 img {
  width: 80px;
  height: 80px;
}
.choice-small-begin {
  width: 32.8%;
  position: relative;
  border: 1px solid #f6f6f6;
  top: -107px;
  left: -150px;
}
.choice-small-begin img {
  width: 80px;
  height: 80px;
}
.choice-current-item {
  background-color: rgba(256, 0, 128, 0.3);
}
</style>