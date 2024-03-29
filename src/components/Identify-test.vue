<template>
    <div>
        <input type="file" accept="image/*" capture="camera" ref="fileInput" @change="handleFileInputChange">
        <img :src="imageUrl" v-if="imageUrl" style="max-width: 100%; max-height: 300px;">
    </div>
</template>

<script>
import { ref } from 'vue'
// 此组件代码为纯拍照并预览图片，方法为 h5
export default {
    setup() {
        const imageUrl = ref('');       // 用于存储图片地址
        const handleFileInputChange = (event) => {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                imageUrl.value = reader.result;
                console.log('图片地址:', imageUrl.value);
                // 将 imageUrl 发送到服务器或进行其他操作
            };
            reader.readAsDataURL(file);
        };

        return {
            imageUrl,
            handleFileInputChange
        };
    },
};
</script>