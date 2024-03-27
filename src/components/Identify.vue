<template>
    <div>
        <button @click="capturePhoto">拍照上传</button>
        <!-- 使用 CameraUpload 组件 -->
        <CameraUpload v-if="showCamera" @imageCaptured="handleImageCaptured" />
    </div>
</template>
np
<script>
import CameraUpload from '../components/CameraUpload.vue';

export default {
    components: {
        CameraUpload
    },
    data() {
        return {
            showCamera: false
        };
    },
    methods: {
        capturePhoto() {
            // 点击按钮后显示相机拍照组件
            this.showCamera = true;
        },
        handleImageCaptured(imageData) {
            // 处理拍摄后的照片数据，比如上传至服务器等
            console.log('拍照成功，图片数据为：', imageData);
            // 在这里可以将 imageData 上传至服务器或者进行其他处理
            // 操作完成后隐藏相机拍照组件
            this.showCamera = false;
        }
    }
};
</script>