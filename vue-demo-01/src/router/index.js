import Vue from "vue";
import VueRouter from "vue-router";

const Home = () => import('../views/Home.vue');
const AvatorInfo = () => import('../views/AvatorInfo.vue');
const TodoList = () => import('../views/TodoList.vue');
const Choice = () => import('../views/Choice.vue');
Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: '/home',
    component:Home
  },
  {
    path: '/info',
    component:AvatorInfo
  },
  {
    path: '/todo',
    component:TodoList
  },
  {
    path: '/choice',
    component:Choice
  }
];

const router = new VueRouter({
  routes,
  mode:"history"
});

export default router;
