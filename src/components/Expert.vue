<template>
    <div id="app">
        <form @submit.prevent="submitText">
            <input type="text" v-model="userInput" placeholder="输入你的文本">
            <button type="submit">提交</button>
        </form>
        <p v-if="response">{{ response }}</p>
        <p v-if="error">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            userInput: '',
            response: '',
            error: '',
        };
    },
    methods: {
        async submitText() {
            this.error = ''; // 清除之前的错误信息
            try {
                const response = await axios.post('http://192.168.1.105:5004', { text: this.userInput });
                this.response = response.data; // 假设后端直接返回文本数据
            } catch (error) {
                console.error('请求错误:', error);
                this.error = '请求过程中发生错误，请重试。';
            }
            this.userInput = ''; // 清空输入框
        },
    },
};
</script>

<style scoped>
/* 可以在这里添加样式 */
</style>