<template>
  <div>
    <!-- <Parent /> -->
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <b-nav>
      <ul>
        <li v-if="token">
          <router-link to="/home">Home</router-link>
        </li>
        <li v-else>
          <router-link to="/login">Login</router-link>
        </li>
        <!-- <router-link to="/users">Users</router-link> -->

      </ul>
    </b-nav>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <users /> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import Parent from './components/Parent.vue'

// import users from './components/users.vue';
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // Parent,
    // Child1,
    // Child2
    // users
    // HelloWorld
  },
  data() {
    return {
      token: null
    }
  },
  mounted() {
    this.token = localStorage.getItem('token')
  }

}
</script>

<style scoped>
ul {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
