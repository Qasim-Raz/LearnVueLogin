<template>
    <div class="cont">
        <div>
            <h2>Login</h2>
            <b-form class="mt-4 userForm" @submit.prevent="submitForm" method="post">
                <input class="userInput" type="email" v-model="post.email" placeholder="Enter Email!" required>
                <br><br>
                <input class="userInput" type="password" v-model="post.password" placeholder="Enter Password!" required>
                <br><br>
                <p>{{ this.post.ErrorByServer }}</p>
                <b-button variant="outline-primary" type="submit">Login!</b-button>
            </b-form>
        </div>

    </div>
</template>

<script>
import Vue from "vue";
import VueAxios from "vue-axios";
import Axios from "axios";
Vue.use(VueAxios, Axios)
export default {
    name: "Login",
    data() {
        return {
            post: {
                email: null,
                password: null,
                ErrorByServer: null
            }
        }
    }, mounted() {
        if (localStorage.getItem('user') !== null && localStorage.getItem('token') !== null) {
            this.$router.push('/home')
        }
    },
    methods: {
        async submitForm(e) {
            let formData = new FormData();
            formData.append('email', this.post.email)
            formData.append('password', this.post.password)
            await Vue.axios.post(`https://admindev-api.windshieldhub.com/vueAdmin/auth/login`, formData).then(resp => {
                this.post.email = null;
                this.post.password = null;
                this.$router.push('/home')
                localStorage.setItem('token', resp.data.data.token)
                localStorage.setItem('user', JSON.stringify(resp.data.data.user))
            }).catch(error => {
                this.post.ErrorByServer = error.response.data.error
            })

            e.preventDefault();
        }
    }

}
</script>
<style scoped>
.cont {
    display: flex;
    align-content: center;
    justify-content: center;
}

.userInput {
    width: 30rem;
    line-height: 2rem;
    font-size: 1.15rem;
    border: 1px solid lightgray;
    padding-left: 1rem;
    outline: none;
}

.userInput:focus {
    box-shadow: 0 0 5px rgb(0, 102, 255);
}

p {
    color: red
}
</style>


<!-- wtest@gmail.com
Waleed@123 -->