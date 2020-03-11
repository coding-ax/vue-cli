import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//单一状态树（单一数据源）
export default new Vuex.Store({
  state: {
    //定义该有的变量
    count: 0,
    student: [
      {
        id: 1,
        name: "AX",
        age: 20
      },
      {
        id: 2,
        name: "John",
        age: 30
      },
      {
        id: 3,
        name: "curry",
        age: 25
      }
    ]
  },
  mutations: {
    //同步进行操作
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    },
    incrementNum(state, payload) {
      state.count += payload.count;
    },
    updateNum(state) {
      state.count += 100;
    }
  },

  actions: {
    //异步进行对数据操作
    //context 上下文,actions的默认参数(相当于store)
    //一般使用Promise()进行操作,返回一个promise对象
    acIncrementNum(context, payload) {
      return new Promise(resolve => {
        setTimeout(() => {
          // context.state.count + 100;//错误示例,不要跳过mutations去修改，而应进行commit
          context.commit("updateNum");
          console.log(payload);
          resolve();
        }, 1000);
      });
    }
  },
  modules: {
    //划分模块
    a: {
      state: {
        
      },
      mutations: {
        
      },
      actions: {
        
      },
      getters: {
        
      }
    }
  },
  getters: {
    //类似计算属性computed
    powerCount(state) {
      return state.count * state.count;
    },
    stuMore20(state) {
      return state.student.filter(s => {
        return s.age >= 20;
      });
    },
    stuMore20Length(state, getters) {
      console.log(getters.stuMore20.length);
      return getters.stuMore20.length;
    },
    moreAgeStudent(state, getters) {
      //返回函数来破除参数限制
      return function(age) {
        return state.student.filter(s => {
          return s.age > age;
        });
      };
    }
  }
});
