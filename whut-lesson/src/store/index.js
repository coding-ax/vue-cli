import Vue from "vue";
import Vuex from "vuex";

//使用vuex
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        un: "",
        pwd: "",
        refresh:false
    },
    mutations: {
        reset(state, un, pwd) {
            state.un = un;
            state.pwd = pwd;
        },
        upRefresh(state,msg) {
            state.refresh = msg;
        }
    }

})
export default store