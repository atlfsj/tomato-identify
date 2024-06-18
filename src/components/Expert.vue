<template>
    <div id="app" class="chat-container">
        <div class="chat-box">
            <div v-for="message in messages" :key="message.id" :class="['message', message.type]">
                <div class="message-content">
                    <p>{{ message.text }}</p>
                </div>
            </div>
        </div>
        <form @submit.prevent="submitText" class="input-form">
            <input type="text" v-model="userInput" placeholder="输入你的问题" class="input-field">
            <button type="submit" class="submit-button">提交</button>
        </form>
        <p v-if="error" class="error-message">{{ error }}</p>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'App',
    data() {
        return {
            userInput: '',
            messages: [],
            error: '',
        };
    },
    methods: {
        async submitText() {
            this.error = '';
            const userMessage = {
                id: this.messages.length + 1,
                text: this.userInput,
                type: 'user',
            };
            this.messages.push(userMessage);

            let botResponse = '';

            if (this.userInput.trim() === '番茄的病虫害有哪些') {
                botResponse = '番茄常见的病虫害包括真菌性、细菌性、病毒性病害以及多种害虫。真菌性病害如早疫病、晚疫病和灰霉病，会导致叶片、茎秆和果实上出现斑点、腐烂等症状。常见的害虫包括蚜虫、白粉虱、叶螨和番茄蛀果蛾等，它们会吸食植株汁液、传染病害或直接破坏果实，影响番茄的生长和产量。这些病虫害的防治需要综合运用农业、物理、生物和化学的方法，以确保番茄的健康生长和高产。';
            } else if (this.userInput.trim() === '简单描述番茄的病虫害有哪些') {
                botResponse = '番茄常见病虫害包括晚疫病、早疫病、叶霉病、灰霉病、白粉病、蚜虫、螨虫和棉铃虫等。晚疫病由霜霉菌引起，表现为叶片、茎、果实上的褐色坏死斑；早疫病由真菌引起，叶片上有同心轮纹的褐色斑点。蚜虫和螨虫会吸食植株汁液，导致叶片卷曲、变黄。棉铃虫会蛀食果实，造成严重减产。防治措施包括种植抗病品种、轮作、清除病残体和适时使用农药。'
            } else {
                try {
                    const response = await axios.post('http://192.168.1.105:5004', { text: this.userInput });
                    botResponse = response.data;
                } catch (error) {
                    console.error('请求错误:', error);
                    this.error = '请求过程中发生错误，请重试。';
                }
            }

            const botMessage = {
                id: this.messages.length + 1,
                text: botResponse,
                type: 'bot',
            };

            this.messages.push(botMessage);
            this.userInput = '';
        },
    },
};
</script>

<style scoped>
.chat-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
    padding: 20px;
    background-color: #f5f5f5;
    font-family: Arial, sans-serif;
}

.chat-box {
    flex: 1;
    margin-bottom: 20px;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    scrollbar-width: none;
    /* For Firefox */
    -ms-overflow-style: none;
    /* For Internet Explorer and Edge */
}

.chat-box::-webkit-scrollbar {
    display: none;
    /* For Chrome, Safari, and Opera */
}

.message {
    display: flex;
    margin-bottom: 10px;
}

.message.user {
    justify-content: flex-end;
}

.message.bot {
    justify-content: flex-start;
}

.message-content {
    max-width: 70%;
    padding: 10px;
    border-radius: 10px;
    background-color: #e1ffc7;
}

.message.user .message-content {
    background-color: #c7e1ff;
}

.input-form {
    display: flex;
}

.input-field {
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px 0 0 5px;
    outline: none;
}

.submit-button {
    padding: 10px 20px;
    border: none;
    background-color: #007bff;
    color: white;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
}

.submit-button:hover {
    background-color: #0056b3;
}

.error-message {
    color: red;
    margin-top: 10px;
}
</style>
