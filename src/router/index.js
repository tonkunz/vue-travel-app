import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/brazil",
    name: "brazil",
    component: () => import(/* webpackChunkName: "brazil" */ "@/views/Brazil")
  },
  {
    path: "/havaii",
    name: "havaii",
    component: () => import(/* webpackChunkName: "havaii" */ "@/views/Havaii")
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import(/* webpackChunkName: "panama" */ "@/views/Panama")
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: () => import(/* webpackChunkName: "jamaica" */ "@/views/Jamaica")
  },
];

const router = new VueRouter({
  linkExactActiveClass: "custom-active-route-class",
  routes
});

export default router;
