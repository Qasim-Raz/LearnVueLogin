import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;
Vue.filter("Ucase", (val) => {
  return val.toUpperCase();
});
new Vue({
  render: (h) => h(App),
}).$mount("#app");
