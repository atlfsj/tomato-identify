<template>
    <div class="auth-container">
        <div class="form-wrapper">
            <h2>{{ mode === 'login' ? '登录' : '注册' }}</h2>
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="username">用户名：</label>
                    <input type="username" id="username" v-model="username" value="admin" required>
                </div>
                <div class="form-group">
                    <label for="password">密码：</label>
                    <input type="password" id="password" v-model="password" value="123456" required>
                </div>
                <button type="submit">{{ mode === 'login' ? '登录' : '注册' }}</button>
            </form>
            <div class="switch-mode" @click="toggleMode">
                {{ mode === 'login' ? '没有账号？点击注册' : '已有账号？点击登录' }}
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const email = ref('');
        const password = ref('');
        const mode = ref('login'); // 初始模式为登录

        const handleSubmit = () => {
            // 处理登录或注册逻辑
            if (mode.value === 'login') {
                // 执行登录操作
                console.log('执行登录操作');
            } else {
                // 执行注册操作
                console.log('执行注册操作');
            }
        };

        const toggleMode = () => {
            // 切换登录和注册模式
            mode.value = mode.value === 'login' ? 'register' : 'login';
        };

        return { email, password, mode, handleSubmit, toggleMode };
    }
};
</script>

<style scoped>
.auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.form-wrapper {
    max-width: 400px;
    width: 100%;
    padding: 20px;
    background-color: #20a42b;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    position: absolute;
    top: 35%;

    h2 {
        text-align: center;
    }
}

.form-group {
    margin-bottom: 20px;
}

label {
    display: block;
    margin-bottom: 5px;
}

input[type="username"],
input[type="password"] {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007a49;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.switch-mode {
    text-align: center;
    color: #f10a0e;
    cursor: pointer;
}
</style>