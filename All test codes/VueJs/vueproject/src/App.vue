<template>
  <div id="app">
    <Employes />
    <!-- <Login /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <Home v-bind:users="users" /> -->
    <!-- <Child v-on:ChangeTitle="Change($event)" /> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import Employes from "./components/Employes.vue"
// import Login from "./components/Login.vue"
// import Child from "./components/Child.vue"
// import Home from "./components/Home.vue";
// eslint-disable-next-line vue/multi-word-component-names
export default {
  name: "App",
  components: {
    Employes,
    // Login,
    // Child
    // Home,
  },
  // data() {
  //   return {
  //     title: "Parent title"
  //   }
  // }, methods: {
  //   Change(title) {
  //     this.title = title
  //   }
  // }
  //  data() {
  //   return {
  //     users: [
  //       { name: "Qasim", email: "Qasim@gmail.com" },
  //       { name: "Ajmal", email: "Ajmal@gmail.com" },
  //       { name: "Ahmed", email: "Ahmed@gmail.com" },
  //       { name: "Anwar", email: "Anwar@gmail.com" },
  //     ]
  //   }
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
