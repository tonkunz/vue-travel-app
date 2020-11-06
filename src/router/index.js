import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

/** Our pages */
import Brazil from "../views/Brazil.vue";
import Havaii from "../views/Havaii.vue";
import Panama from "../views/Panama.vue";
import Jamaica from "../views/Jamaica.vue";


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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/brazil",
    name: "brazil",
    component: Brazil
  },
  {
    path: "/havaii",
    name: "havaii",
    component: Havaii,
  },
  {
    path: "/panama",
    name: "panama",
    component: Panama,
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: Jamaica,
  },
];

const router = new VueRouter({
  routes
});

export default router;
