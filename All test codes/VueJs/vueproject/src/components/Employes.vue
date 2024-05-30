<template>
    <div>
        <h2>Employe List</h2>
        <table border="1px ">
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Age</td>
                <td>Salary</td>
            </tr>
            <tr v-for="item in list" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.employee_name }}</td>
                <td>{{ item.employee_age }}</td>
                <td>{{ item.employee_salary }}</td>
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
    name: "Employes",
    data() {
        return { list: [] }
    },
    async mounted() {
        Vue.axios.get("https://dummy.restapiexample.com/api/v1/employees").then(respone => {
            this.list = respone.data.data
        })
    }
}
</script>