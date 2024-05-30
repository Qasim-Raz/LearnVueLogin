<template>
    <div>
        <form @submit="submitdata" method="post">
            <input ref="nameInput" type="text" name="name" v-model="name" required> <br><br>
            <input ref="emailInput" type="email" name="email" v-model="email" required><br><br>
            <input ref="addressInput" type="text" name="address" v-model="address" required><br><br>
            <button type="submit">Post</button>
        </form>
        <table>
            <!-- <button v-on:click="getData">Update table</button> -->
            <tr>
                <td>Name</td>
                <td>Email</td>
                <td>Address</td>
                <td>Delete</td>
            </tr>
            <tr v-for="user in usersData" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
                <td>{{ user.address }}</td>
                <td><button v-on:click="deleteData(user.id)">Delete</button></td>
            </tr>
        </table>
    </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import Axios from "axios";
Vue.use(VueAxios, Axios)
export default {
    name: "users",
    data() {
        return {
            name: undefined,
            email: undefined,
            address: undefined,
            usersData: undefined
        }
    },
    methods: {
        getData() {
            Vue.axios.get(`http://localhost:3000/users`).then(result => {
                this.usersData = result.data
            })
        },
        submitdata(e) {
            const post = {
                name: this.name,
                email: this.email,
                address: this.address,
            };
            Vue.axios.post(`http://localhost:3000/users`, post).then(result => {
                this.name = null;
                this.email = null;
                this.address = null
                this.getData()
            })
            e.preventDefault();
        },
        deleteData(id) {
            Vue.axios.delete(`http://localhost:3000/users/` + id).then(result => {
                this.getData()
            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>