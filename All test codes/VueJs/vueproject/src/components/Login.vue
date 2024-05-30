<template>
    <div>
        <p>{{ error | Ucase }}</p>
        <form>
            <input type="text" v-model="username" name="username" placeholder="Enter your name"> <br><br>
            <input type="password" v-model="password" name="password" placeholder="Enter your password">
            <br><br>
            <button type="submit" v-on:click="loginform">Login</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Login",
    data() {
        return {
            error: '',
            username: null,
            password: null
        }
    },

    methods: {
        loginform(e) {
            this.error = [];
            if (!this.username && !this.password) {
                this.error = "Please enter all data"
            } else if (!this.username) {
                this.error = "Please enter username"
            } else if (!this.password) {
                this.error = "Please enter password"
            } else {
                this.error = "thanks"
            }
            e.preventDefault()

        }
    },


}
</script>