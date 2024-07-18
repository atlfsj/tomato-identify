<template>
    <div id="app" class="chat-container">
        <div class="chat-box">
            <div v-for="message in messages" :key="message.id" :class="['message', message.type]">
                <div class="message-content" v-if="message.type === 'bot'" v-html="message.text"></div>
                <div class="message-content" v-else>
                    <p>{{ message.text }}</p>
                </div>
            </div>
            <div v-if="isLoading" class="loading-spinner">
                <div class="spinner"></div>
            </div>
        </div>
        <form @submit.prevent="debouncedSubmitText" class="input-form">
            <input type="text" v-model="userInput" placeholder="输入你的问题" class="input-field" />
            <button type="submit" class="submit-button">提交</button>
        </form>
        <p v-if="error" class="error-message">{{ error }}</p>
    </div>
</template>

<script>
import { ref } from 'vue';
import axios from 'axios';

// 简单防抖
function debounce(func, wait) {
    let timeout;
    return function (...args) {
        const context = this;
        clearTimeout(timeout);
        timeout = setTimeout(() => func.apply(context, args), wait);
    };
}

export default {
    name: 'App',
    setup() {
        const userInput = ref('');
        const messages = ref([]);
        const error = ref('');
        const isLoading = ref(false);

        const formatResponse = (response) => {
            console.log(response);
            const parsedResponse = JSON.parse(response);
            let htmlContent = '';

            if (parsedResponse.response) {
                const lines = parsedResponse.response.split('\n');
                lines.forEach((line) => {
                    if (line.trim().length > 0) {
                        if (line.startsWith('-')) {
                            htmlContent += `<li>${line.substring(1).trim()}</li>`;
                        } else {
                            htmlContent += `<p>${line.trim()}</p>`;
                        }
                    }
                });
            }

            return `<ul>${htmlContent}</ul>`;
        };

        const submitText = async () => {
            error.value = '';
            const userMessage = {
                id: messages.value.length + 1,
                text: userInput.value,
                type: 'user',
            };
            messages.value.push(userMessage);

            let botResponse = '';
            isLoading.value = true;

            if (userInput.value.trim() === '番茄的病虫害有哪些') {
                botResponse = '番茄常见的病虫害包括真菌性、细菌性、病毒性病害以及多种害虫。真菌性病害如早疫病、晚疫病和灰霉病，会导致叶片、茎秆和果实上出现斑点、腐烂等症状。常见的害虫包括蚜虫、白粉虱、叶螨和番茄蛀果蛾等，它们会吸食植株汁液、传染病害或直接破坏果实，影响番茄的生长和产量。这些病虫害的防治需要综合运用农业、物理、生物和化学的方法，以确保番茄的健康生长和高产。';
            } else {
                try {
                    const response = await axios.get(`http://8.130.28.121:8000/cs/?text=${encodeURIComponent(userInput.value)}`);
                    botResponse = formatResponse(JSON.stringify(response.data));
                } catch (err) {
                    console.error('请求错误:', err);
                    error.value = '请求过程中发生错误，请重试。';
                }
            }

            const botMessage = {
                id: messages.value.length + 1,
                text: botResponse,
                type: 'bot',
            };

            messages.value.push(botMessage);
            userInput.value = '';
            isLoading.value = false;
        };

        const debouncedSubmitText = debounce(submitText, 300);

        return {
            userInput,
            messages,
            error,
            isLoading,
            debouncedSubmitText,
        };
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

.loading-spinner {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
}

.spinner {
    border: 4px solid rgba(0, 0, 0, 0.1);
    border-left-color: #007bff;
    border-radius: 50%;
    width: 36px;
    height: 36px;
    animation: spin 1s linear infinite;
}

@keyframes spin {
    to {
        transform: rotate(360deg);
    }
}
</style>
