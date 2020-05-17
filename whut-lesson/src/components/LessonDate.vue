<template>
  <div class="wrapper" ref="wrapper">
    <div class="lesson-box">
      <div
        class="lesson-box-item"
        v-for="(item,index) in list"
        :key="index"
        :class="[{'lesson-invisible':!item.show},'where'+index,{'len-three':item.len==3}]"
        @click="preview(index)"
        
      >
        <span>{{item.name}}</span>
        <div class="lesson-box-item-small">{{item.location}}</div>
      </div>

      <div class="preview" v-show="showPreview" @click="previewOver">
        <div class="panel">
          <div class="lesson-name">{{currentObj.name}}</div>
          <div class="lesson-place">{{currentObj.location}}</div>
          <div class="lesson-week">{{currentObj.week}}</div>
          <div class="leeson-len">节次：{{currentObj.len}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    lesson: {
      type: Array,
      default: null
    },
    changeFlag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      list: [],
      currentObj: {},
      showPreview: false
    };
  },
  created() {
    console.log("lessonDate create");
    this.changeAns();
  },
  watch: {
    changeFlag(val) {
      console.log("lesson changed");
      console.log("changeFlag:", this.changeFlag);
      if (val) {
        console.log("我在watch");
        this.changeAns();
      }
    }
  },
  methods: {
    changeAns() {
      this.list = [];
      for (let i = 0; i < 35; i++) {
        let flag = false;
        for (let les of this.lesson) {
          if (les.count=== i + 1) {
            this.list.push({
              show: true,
              cid: les.count,
              state: 1,
              name: les.class_name,
              location: les.class_where,
              week: les.class_time,
              len: les.len
            });
            if (les.cid > i + 1) {
              break;
            }
            flag = true;
            break;
          }
        }
        if (!flag) {
          this.list.push({
            show: false,
            cid: i,
            state: "",
            name: "",
            location: "",
            week: "",
            today: false,
            len: 3
          });
        }
      }
      console.log("list:", this.list);
      this.$emit("changeOver");
    },
    preview(index) {
      this.currentObj = this.list[index];
      console.log(this.currentObj);
      if (this.currentObj["show"]) {
        console.log(this.currentObj);
        this.showPreview = true;
      }
    },
    previewOver() {
      this.showPreview = false;
    }
  }
};
</script>

<style>
.lesson-box {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 0 10px 10px;
  color: #fff;
}
.lesson-box-item {
  font-size: 11px;
  width: 13%;
  height: 15vh;
  background-color: coral;
  margin: 1px;
  border-radius: 3px;
  padding-top: 5px;
  overflow: scroll;
}
.lesson-box-item span {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.lesson-box-item-small {
  padding-top: 15px;
}

.lesson-invisible {
  opacity: 0;
}

/*where
周一：
0 7 14 21 28
1 8 15 22 29
2 9 16 23 30
3 10 17 24 31
4 11 18 25 32
5 12 19 26 33
6 13 20 27 34
*/
/* .where0 .where7 .where14 .where21 .where28{ */
.where0 {
  background-color: #4dc3dd;
}
.where7 {
  background-color: #4dc3dd;
  margin-bottom: 20px;
}
.where14 {
  background-color: #4dc3dd;
}
.where21 {
  background-color: #4dc3dd;
}
.where28 {
  background-color: #4dc3dd;
}

.where1 {
  background-color: #a8d59a;
}
.where8 {
  background-color: #a8d59a;
  margin-bottom: 20px;
 
}
.where15 {
  background-color: #a8d59a;
}
.where22 {
  background-color: #a8d59a;
}
.where29 {
  background-color: #a8d59a;
}

.where2 {
  background-color: #feab4d;
}
.where9 {
  background-color: #feab4d;
  margin-bottom: 20px;
   
}
.where16 {
  background-color: #feab4d;
}
.where23 {
  background-color: #feab4d;
}
.where30 {
  background-color: #feab4d;
}

.where3 {
  background-color: #8c89fe;
}
.where10 {
  background-color: #8c89fe;
  margin-bottom: 20px;
}
.where17 {
  background-color: #8c89fe;
}
.where24 {
  background-color: #8c89fe;
}
.where31 {
  background-color: #8c89fe;
}

.where4 {
  background-color: #51d1c4;
}
.where11 {
  background-color: #51d1c4;
  margin-bottom: 20px;
}
.where18 {
  background-color: #51d1c4;
}
.where25 {
  background-color: #51d1c4;
}
.where32 {
  background-color: #51d1c4;
}

.where5 {
  background-color: #cc5a42;
}
.where12 {
  background-color: #cc5a42;
  margin-bottom: 20px;
}
.where19 {
  background-color: #cc5a42;
}
.where26 {
  background-color: #cc5a42;
}
.where33 {
  background-color: #cc5a42;
}

.where6 {
  background-color: #ffaec8;
}
.where13 {
  background-color: #ffaec8;
  margin-bottom: 20px;
}
.where20 {
  background-color: #ffaec8;
}
.where27 {
  background-color: #ffaec8;
}
.where34 {
  background-color: #ffaec8;
}

.preview {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.3);
}
.panel {
  position: relative;
  top: 200px;
  left: 20%;
  right: 20%;
  width: 50%;
  color: #eee;
  background-color: black;
  border: #eee 1px solid;
}

/**长度 */
.len-three {
   height: 20vh;
}
</style>