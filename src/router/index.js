import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import SkyBox from "../views/SkyBox.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/skyBox",
    name: "SkyBox",
    component: SkyBox,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
