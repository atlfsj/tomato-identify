<template>
    <div>
        <button><label for="fileInput">选择图片</label></button>
        <input id="fileInput" type="file" accept="image/*" style="display: none;" @change="handleFileInputChange">
        <img :src="imageUrl" v-if="imageUrl" style="width: 100%; max-height: 300px;">
        <div class="show" v-if="uploadResult">
            <!-- 展示上传结果 -->
            <div class="result">
                <p>种类: {{ uploadResult.class }}</p>
                <br>
                <p>可信度: {{ uploadResult.probability }}</p>
                <br>
                <p>治疗方法：{{ uploadResult.zhiliao }}</p>
            </div>
        </div>
        <div class="ai" v-if="uploadResult">
            <button @click="consultAIExpert">点击询问AI语音专家建议</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue'

export default {
    setup() {
        const imageUrl = ref('');
        const uploadResult = ref(null);

        const handleFileInputChange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                imageUrl.value = reader.result;
            };
            reader.readAsDataURL(file);

            const formData = new FormData();
            formData.append('file', file); // 修改这里，应直接使用原生文件对象，而不是读取的 base64 URL

            axios.post('http://192.168.185.20:5000', formData)
                .then((response) => {
                    if (response.status === 200) {
                        uploadResult.value = response.data;
                    } else {
                        console.error('上传图片失败');
                        alert('上传图片失败');
                        uploadResult.value = null;
                    }
                })
                .catch((error) => {
                    console.error('上传图片时出现错误:', error);
                });
        };

        // 假设有一个查询AI语音专家的函数（这里仅为示例，实际实现需要依据你的业务逻辑）
        const consultAIExpert = () => {
            // 这里可以调用相应的API或方法向AI专家发起咨询请求
            console.log('模拟询问AI语音专家...');
        };

        return {
            imageUrl,
            uploadResult,
            handleFileInputChange,
            consultAIExpert,
        };
    },
};
</script>