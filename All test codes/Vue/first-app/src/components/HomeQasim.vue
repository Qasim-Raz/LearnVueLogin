<template>
  <div>
    <table border="1px ">
      <tr>
        <td>id</td>
        <td>name</td>
        <td>email</td>
        <td>city</td>
      </tr>
      <tr v-for="user of users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.city }}</td>
      </tr>
    </table>
    <h1 v-if="show">Hello form home component</h1>
    <h1 v-else>Hello form else block</h1>
    <button v-on:click="toggle">Toggle</button>
    <h2>Count: {{ count }}</h2>
    <button v-on:click="increament">Count++</button>
    <!-- <h2>{{ data }}</h2> -->
    <!-- <h3>{{ msg }}</h3> -->
    <!-- <h3>{{ age }}</h3> -->
    <!-- <button v-on:click="hello('hello function consoled')">
      Click hello function
    </button> -->
  </div>
</template>
<script>
export default {
  name: "HomeQasim",
  data() {
    return {
      users: [
        { id: 1, name: "Qasim", email: "Qasim@gmail.com", city: "Lahore" },
        { id: 2, name: "Ajmal", email: "Ajmal@gmail.com", city: "Gujranwala" },
        { id: 3, name: "Shoaib", email: "Shoaib@gmail.com", city: "Attock" },
        { id: 4, name: "Ali", email: "Ali@gmail.com", city: "Okara" },
        { id: 5, name: "Ahmed", email: "Ahmed@gmail.com", city: "Karachi" },
      ],
      show: true,
      count: 0,
    };
  },
  // props: {
  //   data: String,
  //   msg: String,
  //   age: String,
  // },
  // data() {
  //   return { show: true, count: 0 };
  // },

  methods: {
    toggle() {
      this.show = !this.show;
    },
    increament() {
      this.count++;
    },
    // hello(data) {
    //   console.log(data);
    // },
  },
};
</script>