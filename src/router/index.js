import Vue from "vue";
import VueRouter from "vue-router";
import WeatherView from "../views/WeatherView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "weather",
    component: WeatherView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
