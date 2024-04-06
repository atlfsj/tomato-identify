<template>
    <div class="result-show">
        <input id="fileInput" type="file" accept="image/*" style="display: none;" @change="handleFileInputChange">
        <div class="show">
            <!-- 展示图片 -->
            <img :src="imageUrl" v-if="imageUrl" style="width: 100%; max-height: 300px;">
            <!-- 展示上传结果 -->
            <div v-if="uploadResult" class="result">
                <p>种类: {{ uploadResult.class }}</p>
                <br>
                <p>可信度: {{ uploadResult.probability }}</p>
                <br>
                <p>治疗方法：{{ uploadResult.zhiliao }}</p>
            </div>
        </div>
        <!-- <div class="ai-button" v-if="uploadResult">
            <button>点击询问ai语音专家建议</button>
        </div> -->
        <div class="button">
            <button><label for="fileInput">点击继续上传</label></button>
        </div>
    </div>
</template>

<script>
import { useIdentifyStore } from '../store/identify';
import { toRefs, ref, watch } from 'vue';
import axios from 'axios'

export default {
    setup() {
        const store = useIdentifyStore();
        const { imageUrl, uploadResult } = toRefs(store);

        // 强制重新渲染组件
        const forceRerender = ref(0);
        watch([imageUrl, uploadResult], () => {
            forceRerender.value++;
        });

        const handleFileInputChange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                imageUrl.value = reader.result;
                console.log('图片地址:', imageUrl.value);
                // 将 imageUrl 发送到服务器或进行其他操作
            };
            reader.readAsDataURL(file);

            // 上传操作：创建 FormData 对象, 并将图片文件添加到以后端预期的字段名 “file” 中
            const formData = new FormData();
            formData.append('url', file);
            /* 发送 POST 请求，将图片文件上传到 Flask 后端
            fetch('http://192.168.185.20:5000', {
                method: 'POST',
                body: formData,
            })*/
            axios.post('http://192.168.1.102:5000', formData)
                .then((response) => {
                    if (response.status === 200) {
                        // 获取后端返回的预测结果
                        return response.data;
                    } else {
                        // 如果请求未成功，则打印错误信息
                        console.error('上传图片失败');
                        alert('上传图片失败');
                        uploadResult.value = null;
                    }
                })
                .then((result) => {
                    uploadResult.value = result;
                    console.log('后端响应:', result); // 打印后端响应
                })
                .catch((error) => {
                    console.error('上传图片时出现错误:', error);
                });
        };

        return {
            imageUrl,
            uploadResult,
            handleFileInputChange,
            forceRerender
        };
    }
}
</script>

<style scoped>
.result {
    margin: 10px 0;
    border: 1px solid grey;
}

.ai-button {
    display: flex;
    justify-content: center;
    margin: 10px 0;

    button {
        border-radius: 5px;
    }
}

.button {
    display: flex;
    justify-content: center;
    background-color: rgb(155, 204, 161);

    button {
        border-radius: 15px;
        width: 40%;
        height: 30px;
        background-color: green;
        color: white;
    }
}
</style>