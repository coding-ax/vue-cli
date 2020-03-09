import Vue from  'vue';
import VueRouter from  'vue-router';

const home = () =>import( '../../views/home/home.vue');
const List = () => import( '../../views/List/List.vue');
const buycar = () => import( '../../views/buycar/buycar.vue');
const user = () => import( '../../views/user/user.vue');


Vue.use(VueRouter);

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    name:'home',
    component: home
  },
  {
    path: '/list',
    name:'list',
    component: List
  },
  {
    path: '/buycar',
    name:'buycar',
    component: buycar
  },
  {
    path: '/user',
    name:'user',
    component: user
  }
];

const router = new VueRouter({
  routes,
  mode:'history'
});

export default router;
