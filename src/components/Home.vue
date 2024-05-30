<template>
    <div class="homeComp">
        <div class="userSection">
            <div>
                <h2>Home Component</h2>
                <b-table-simple hover class="userTable">
                    <b-tr>
                        <b-th>Id</b-th>
                        <b-th>Designation</b-th>
                        <b-th>Country</b-th>
                        <b-th>Email</b-th>
                        <b-th>Image</b-th>
                    </b-tr>
                    <b-tbody>
                        <b-tr>
                            <b-td>{{ id }}</b-td>
                            <b-td>{{ designation }}</b-td>
                            <b-td>{{ country }}</b-td>
                            <b-td>{{ email }}</b-td>
                            <b-td><img :src="image"></b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </div>
            <div>
                <h2>Request Section</h2>
                <b-table-simple hover class="userTable">
                    <b-tr>
                        <b-th>Id</b-th>
                        <b-th>Request Type</b-th>
                        <b-th>Request Detail</b-th>
                        <b-th>Request At</b-th>
                        <b-th>Status</b-th>
                    </b-tr>
                    <b-tbody>
                        <b-tr v-for="request, index in requestResult" :key="request.id">
                            <b-td>{{ index + 1 }}</b-td>
                            <b-td>{{ request.type }}</b-td>
                            <b-td>{{ request.request_detail }}</b-td>
                            <b-td>{{ formatTimestamp(request.request_at) }}</b-td>
                            <b-td v-if="request.status == 1"><button class="btn btn-primary"> Active </button></b-td>
                            <b-td v-else> <button class="btn btn-danger"> Inactive
                                </button></b-td>
                        </b-tr>
                    </b-tbody>
                </b-table-simple>
            </div>
        </div>
        <!-- <users />   -->
    </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import Axios from "axios";
Vue.use(VueAxios, Axios)
// import users from "./users.vue"
export default {
    name: "Home",
    components: {
        // users
    },
    data() {
        return {
            id: null,
            designation: null,
            country: null,
            email: null,
            image: null,
            requestResult: null
        }
    }, methods: {
        formatTimestamp(timestamp) {
            timestamp = timestamp * 1000;
            const date = new Date(timestamp);
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0'); // Add leading zero for single-digit months
            const day = String(date.getDate()).padStart(2, '0');
            const hours = date.getHours() % 12 || 12; // Convert to 12-hour format (12 for midnight)
            const minutes = String(date.getMinutes()).padStart(2, '0');
            const ampm = date.getHours() >= 12 ? 'PM' : 'AM';

            return `${year}-${month}-${day} ${hours}:${minutes} ${ampm}`;
        },
        async fetchData() {
            let formData = new FormData();
            formData.append('start', 0);
            formData.append('length', 10);
            let token = localStorage.getItem('token');
            Vue.axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            await Vue.axios.post(`https://admindev-api.windshieldhub.com/vueAdmin/employees/myRequests
        `, formData).then(resp => {
                this.requestResult = resp.data.data.myRequests;

            }).catch(error => {
                if (error.response.status == 401) {
                    localStorage.clear();
                    this.$router.push('/login');
                    alert("please login again")
                }
            })
        }

    },
    mounted() {
        let userString = localStorage.getItem('user');
        let userObject = JSON.parse(userString);
        if (userObject) {
            this.id = userObject.user_id;
            this.designation = userObject.about;
            this.country = userObject.country.toUpperCase();
            this.email = userObject.email;
            this.image = userObject.image
            this.fetchData()
        } else {
            this.$router.push('/login')
        }
    }
}
</script>
<style scoped>
.homeComp {
    display: flex;
    align-items: center;
    justify-content: center;
}

img {
    height: 50px;
    width: 50px;
}
</style>
<!-- { headers: { Authorization: `Bearer ${token}`, }, },
token: 096d069f22f0b6366a10ed2dbdec38d59fc51e90670a607732f355cfeaeb388012974d9b19374cd3b60c4b825edd2b22d0023572b0aea85e9be48837ea2183a61a4ea9a6a9a4f679bfc29fa49979f3ad49d7b6c470f96ebe91600dbb12234b86ecff6e58dae7ec990384c6683409f6378b2f5f4a6347af504d36b6017b1ab7d35c9b94d07bfc2f415e5e3c7fafe7e9d4e437162eee0f9af74ccb457f62fef24f30e75b2b945489ac5494d3d9654a83c4e44753d188061062abaa1d0b3d2fa6133f22645e128c0a22d2f9bc9fa94e4fb52b20f8d8c576d178d229c999d772d9fbb957c63294cc8892fe3e4043106d0486f02bbf17f304764723702ee9a77d12581717005360 -->