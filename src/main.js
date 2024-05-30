import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
// import users from "./components/users.vue";
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

const routes = [
  {
    path: "/login",
    component: () => import("./components/Login.vue"),
  },
  { path: "/home", component: () => import("./components/Home.vue") },
];

const router = new VueRouter({ routes });

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
