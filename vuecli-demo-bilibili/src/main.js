import Vue from 'vue'
import App from './App.vue'
//产品提示信息：(开发阶段不显示，默认false)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
