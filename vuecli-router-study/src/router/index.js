//二.配置路由相关信息
//导入vue,vue-router以及使用到的插件
import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../components/Home.vue";
// import About from "../components/About.vue";
// import User from "../components/User.vue";

//懒加载：
const Home = () => import('../components/Home.vue');
const About = () => import('../components/About.vue');
const User= () => import('../components/User.vue');
const Profile=()=>import('../components/Profile.vue')
//1.通过Vue.use(插件),安装插件

Vue.use(VueRouter);

//3.将routers数组传入router对象
const routes = [
  {
    path: '',
    //redirect重定向
    redirect:'/home'
  },
  {
    path: "/home",
    component: Home,
    children: [
      {
        path: '',
        redirect:'news'
      },
      {
        path: "news",
        component:()=>import('../components/HomeNews.vue')
      },
      {
        path: "messages",
        component:()=>import('../components/HomeMessage.vue')
      }
    ]
  },
  {
    path: "/about",
    component: About
  },
  {
    path: '/user/:userId',
    component:User
  },
  {
    path: '/profile',
    component:Profile
  }
];

//2.创建vue-router对象
const router = new VueRouter({
  //配置路由和组件之间的映射关系
  routes,
  mode: 'history',
  linkActiveClass:'active'
});

//4.将定义好的vue-router对象导出
export default router;
