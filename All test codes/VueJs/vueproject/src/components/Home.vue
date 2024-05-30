<template>
  <div>
    <h1>Hello from Home Component</h1>
    {{ name }}
    <h3 v-for="user of users" :key="user.name">
      Name: {{ user.name }} and Email:
      {{ user.email }}</h3>
  </div>
</template>
<script>
export default {
  name: "Home",
  props: ["users"]
  // data() {
  //   return {}
  // },
};
</script>
