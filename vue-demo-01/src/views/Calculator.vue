<template>
  <div class="calculator">
    <div class="screen">
      <div class="calculator-screen">{{currentShowString}}</div>
      <div class="calculator-screen-small">{{previewAns}}</div>
    </div>

    <div class="calculator-button">
      <div class="button-number" @click="reset()">C</div>
      <div class="button-number" @click="addSign('%')">mod</div>
      <div class="button-number" @click="deleteOne()">del</div>
      <div class="button-number" @click="addSign('/')">÷</div>
      <div class="button-number" @click="addString(7)">7</div>
      <div class="button-number" @click="addString(8)">8</div>
      <div class="button-number" @click="addString(9)">9</div>
      <div class="button-number" @click="addSign('*')">x</div>
      <div class="button-number" @click="addString(4)">4</div>
      <div class="button-number" @click="addString(5)">5</div>
      <div class="button-number" @click="addString(6)">6</div>
      <div class="button-number" @click="addSign('-')">-</div>
      <div class="button-number" @click="addString(1)">1</div>
      <div class="button-number" @click="addString(2)">2</div>
      <div class="button-number" @click="addString(3)">3</div>
      <div class="button-number" @click="addSign('+')">+</div>
      <div class="button-number" @click="addString(0)">0</div>
      <div class="button-number" @click="addString('00')">00</div>
      <div class="button-number" @click="addString(7)">.</div>
      <div class="button-number" @click="finalAns()">=</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentString: "",
      previewAns: "",
      currentShowString: "",
      //监听是否需要preview
      wait: false
    };
  },
  created() {
    console.log(eval("1+8+9*20+8/2-8.5+7").toFixed(2));
  },
  methods: {
    addString(ans) {
      this.currentString += ans;
      this.currentShowString += ans;
      this.previewAns = eval(this.currentString);
    },
    addSign(sign) {
      this.currentString += sign;
      if (sign == "*") {
        sign = "X";
      } else if (sign == "/") {
        sign = "÷";
      }else if(sign=='%'){
          sign='mod'
      }
      this.currentShowString += sign;
    },
    finalAns() {
      this.currentShowString = eval(this.currentString);
      this.currentString=this.previewAns='';
    },
    reset() {
      this.currentShowString = "";
      this.previewAns = "";
      this.currentString = "";
    },
    deleteOne() {

    }
  }
};
</script>

<style>
.calculator {
  margin-top: 49px;
  width: 100%;
  /* display: flex;
  flex-direction: column; */
  text-align: center;
  position: fixed;
  bottom: 0;
}
.calculator-screen {
  width: 100%;
  height: 50px;
  font-size: 5vh;
  overflow-x: scroll;
  overflow-wrap: break-word;
}
.screen {
  position: relative;
  text-align: right;
}
.calculator-screen-small {
  color: #888888;
}
.calculator-button {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, #a7e0f1 0%, #ffffff 60%);
}
.button-number {
  width: 25vw;
  height: 25vw;
  font-size: 20px;
  font-family: 楷体;
  line-height: 80px;
}
</style>