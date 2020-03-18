<template>
  <div id="choice-box">
    <div class="choice-box-item">
      <p class="choice-title">告别纠结</p>
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
        <div class="choice-small-begin" @click.prevent="playStart()">
          <img src="../assets/Head/wode-.svg" alt />
          <div class="choice-insert-title">点击开始</div>
            <div class="choice-screen" v-show="isPlaying" @click.stop=""></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//生成从minNum到maxNum的随机数
function randomNum(minNum, maxNum) {
  switch (arguments.length) {
    case 1:
      return parseInt(Math.random() * minNum + 1, 10);
      break;
    case 2:
      return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);
      break;
    default:
      return 0;
      break;
  }
}
export default {
  data() {
    return {
      awardArray: [
        {
          id: 1,
          name: "1",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 2,
          name: "2",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 3,
          name: "3",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 4,
          name: "4",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 5,
          name: "5",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 6,
          name: "6",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 7,
          name: "7",
          imgSrc: require("../assets/Head/orange.svg")
        },
        {
          id: 8,
          name: "8",
          imgSrc: require("../assets/Head/orange.svg")
        }
      ],
      isPlaying: false,
      currentIndex: 1,
      speed: 150,
      target: 0,
      cicleCount: 6
    };
  },
  methods: {
    playStart() {
      this.currentIndex = 1;
      this.speed = 150;
      this.target = parseInt(Math.random() * 8 + 1, 10);
      this.isPlaying=true;
      var awartCount = 1;
      console.log(this.target);
      //   var that=this;
      let promise = new Promise(resolve => {
        var time1 = setInterval(() => {
          this.currentIndex++;
          if (this.currentIndex == 9) {
            this.currentIndex = 1;
          }
          if (this.currentIndex == 1) {
            awartCount++;
          }
          if (awartCount >= 3) {
            this.speed += 100;
          }
          if (
            awartCount == this.cicleCount &&
            this.currentIndex == this.target
          ) {
            resolve(time1);
          }
        }, this.speed);
      }).then(time => {
        this.isPlaying=false;
        clearInterval(time);
        this.currentIndex = this.target;
        console.log(this.currentIndex);
      });
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
.choice-screen {
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 39px;
  display: block;
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
  position: absolute;
  left: 0%;
  right: 0%;
  bottom: 30%;
  top: 21%;
  margin: 0;
}
.choice-small-item1 {
  border: 1px solid #f6f6f6;
  position: absolute;
  left: 0;
  right: 66.7%;
  top: 0;
  bottom: 66.7%;
}
.choice-small-item2 {
  border: 1px solid #f6f6f6;
  position: absolute;
  left: 33.3%;
  right: 33.3%;
  top: 0;
  bottom: 66.7%;
}
.choice-small-item3 {
  border: 1px solid #f6f6f6;
  position: absolute;
  left: 66.7%;
  right: 0%;
  top: 0;
  bottom: 66.7%;
}
.choice-small-item4 {
  position: absolute;
  left: 66.7%;
  right: 0;
  top: 33.3%;
  bottom: 33.3%;
  border: 1px solid #f6f6f6;
}
.choice-small-item5 {
  border: 1px solid #f6f6f6;
  position: absolute;
  left: 66.7%;
  right: 0;
  top: 66.7%;
  bottom: 0;
}
.choice-small-item6 {
  position: absolute;
  left: 33.3%;
  right: 33.3%;
  top: 66.7%;
  bottom: 0;
  border: 1px solid #f6f6f6;
}
.choice-small-item7 {
  border: 1px solid #f6f6f6;
  position: absolute;
  left: 0%;
  right: 66.6%;
  top: 66.7%;
  bottom: 0;
}
.choice-small-item8 {
  border: 1px solid #f6f6f6;
  position: absolute;
  right: 66.6%;
  left: 0;
  top: 33.3%;
  bottom: 33.3%;
}
.choice-box-content img {
  width: 80px;
  height: 80px;
}

.choice-small-begin {
  border: 1px solid #f6f6f6;
  position: absolute;
  right: 33.3%;
  left: 33.3%;
  top: 33.3%;
  bottom: 33.3%;
}
.choice-small-begin img {
  width: 80px;
  height: 80px;
}
.choice-current-item {
  background-color: rgba(256, 0, 128, 0.3);
}
</style>