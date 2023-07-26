<template>
    <div class="container">
        <div class="login-card">
            <div class="card-left">
                <div>{{ username }}</div>
                <div>{{ password }}</div>
            </div>
            <div class="card-right">
                <div class="wrap">
                    <h4>USER LOGIN</h4>
                    <form action="#">
                        <div class="form-field">
                            <label for="username">Username</label>
                            <input type="text" id="username" v-model="username">
                        </div>
                        <div class="form-field">
                            <label for="password">Password</label>
                            <input type="password" id="password" :value="password" @input="e => password = e.target.value">
                        </div>
                        <button type="button" @click="handleSubmit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { login } from '../../api/dummyJson/login'
export default {
    name: "LoginPage",
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        handleSubmit() {
            this.handleLogin();
        },
        async handleLogin() {
            try {
                const data = await login({ username: this.username, password: this.password });
                console.log('token', data.data.token)
            } catch (error) {
                console.log('login failed')
            }
        }
    },
}



</script>

<style lang="scss" scoped>
.container {
    width: 100%;
    height: 100vh;
    background-color: aqua;
    display: flex;
    justify-content: center;

    .login-card {
        background-color: aquamarine;
        margin-top: 300px;
        width: 1000px;
        height: 800px;
        display: flex;
        flex-direction: row;

        .card-left {
            width: 50%;
            height: 100%;
        }

        .card-right {
            width: 50%;
            height: 100%;
            background-color: bisque;
        }
    }
}
</style>