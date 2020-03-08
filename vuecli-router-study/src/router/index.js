//二.配置路由相关信息
//导入vue,vue-router以及使用到的插件
import Vue from "vue";
import VueRouter from "vue-router";
// import Home from "../components/Home.vue";
// import About from "../components/About.vue";
// import User from "../components/User.vue";

//导航守卫：用于监听路由的切换



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
    meta: {
      title:'首页',
    },
    children: [
      // {
      //   path: '',
      //   redirect:'news'
      // },
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
    component: About,
    meta: {
      title:"关于"
    },
    beforeEnter: (to, from, next) => {
      console.log('About beforeEnter');
      next()
    }
  },
  {
    path: '/user/:userId',
    component: User,
    meta: {
      title:'用户'
    }
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title:'档案'
    }
  }
];

//2.创建vue-router对象
const router = new VueRouter({
  //配置路由和组件之间的映射关系
  routes,
  mode: 'history',
  linkActiveClass:'active'
});


//前置守卫：（guard)beforeEach
router.beforeEach((to, from, next) => {
  //自行实现，必须调用一下next(),否则被覆盖将无法进行路由的跳转:
  
  //从from跳转到to
  document.title = to.matched[0].meta.title;
  // console.log(to);
  next();//用于进入下一个生命周期钩子
})

//后置钩子：(hook)afterEach
// router.afterEach((to, from) => {
//   document.title = to.matched[0].meta.title;
// })


//4.将定义好的vue-router对象导出
export default router;
