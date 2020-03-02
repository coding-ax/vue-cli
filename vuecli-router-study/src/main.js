import Vue from 'vue'
import App from './App.vue'
//5.引入router对象
import router from './router'

Vue.config.productionTip = false

new Vue({
  //6.挂载router对象
  router,
  render: h => h(App)
}).$mount('#app')
