<template>
    <div>
        <!-- <button @click="capturePhoto">拍照上传</button>
        <button @click="selectFile">选择文件上传</button>
        <!-- 使用 CameraUpload 组件 
        <CameraUpload v-if="showCamera" />
        <FileUpload v-if="showFileInput" /> -->
        <Camera />
    </div>
</template>

<script>
import Camera from '../components/Camera.vue';
import CameraUpload from '../components/CameraUpload.vue';
import { ref } from 'vue';

export default {
    components: {
        CameraUpload,
        Camera
    },
    setup() {
        const showCamera = ref(false);
        const showFileInput = ref(false);

        const capturePhoto = () => {
            // 点击按钮后显示相机拍照组件
            showCamera.value = true;
        };

        const selectFile = () => {
            // 点击按钮后显示文件选择组件
            showFileInput.value = true;
            showCamera.value = false;
        };

        const handleImageCaptured = () => {
            // 处理拍摄后的逻辑，如果有需要的话
        };

        const handleFileSelected = () => {
            // 处理文件选择后的逻辑，如果有需要的话
        };

        return {
            showCamera,
            showFileInput,
            capturePhoto,
            selectFile,
            handleImageCaptured,
            handleFileSelected
        };
    }
};
</script>