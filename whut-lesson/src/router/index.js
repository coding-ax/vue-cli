import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/home",
  },
  {
    path: "/home",
    component: () => import("../views/Lesson.vue"),
  },
  {
    path: "/user",
    component: () => import("../views/Mine.vue")
  }
];

const router = new VueRouter({
  routes,
});

export default router;
