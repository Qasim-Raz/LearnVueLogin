<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <HomeQasim data="Qasim is here" msg="hello form qasim" age="25" />
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";
import HomeQasim from "./components/HomeQasim.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
    HomeQasim,
  },
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
