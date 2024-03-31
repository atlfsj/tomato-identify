<template>
    <div>
        <video ref="video" :autoplay="true" width="400" height="300" muted></video>
        <canvas ref="canvas" style="display: none;" width="400" height="300"></canvas>
        <button @click="capturePhoto">拍照</button>
        <button @click="selectImageFromGallery">从相册选择</button>
        <img :src="selectedImage" v-if="selectedImage" style="width: 100%; max-height: 300px;">
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
    setup() {
        const selectedImage = ref('');
        const videoStream = ref(null);
        const video = ref(null);
        const canvas = ref(null);

        const capturePhoto = async () => {
            try {
                const constraints = { video: true };
                videoStream.value = await navigator.mediaDevices.getUserMedia(constraints);
                video.value.srcObject = videoStream.value;
                video.value.play();
            } catch (error) {
                console.error('无法访问摄像头:', error);
                alert('无法访问摄像头，请确保已经授权');
            }
        };

        const selectImageFromGallery = () => {
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = 'image/*';
            input.capture = 'camera';
            input.onchange = (event) => {
                const file = event.target.files[0];
                const reader = new FileReader();
                reader.onload = () => {
                    selectedImage.value = reader.result;
                    console.log('已选择图片:', selectedImage.value);
                };
                reader.readAsDataURL(file);
            };
            input.click();
        };

        const takeSnapshot = async () => {
            const context = canvas.value.getContext('2d');
            canvas.value.width = video.value.videoWidth;
            canvas.value.height = video.value.videoHeight;
            context.drawImage(video.value, 0, 0, canvas.value.width, canvas.value.height);
            selectedImage.value = canvas.value.toDataURL('image/jpeg');
            console.log('拍照完成:', selectedImage.value);
            // 关闭摄像头
            if (videoStream.value) {
                videoStream.value.getTracks().forEach(track => track.stop());
            }
            // 在这里添加上传图片的逻辑
            // 例如：
            // await uploadImage(selectedImage.value);
        };

        return {
            selectedImage,
            video,
            canvas,
            capturePhoto,
            selectImageFromGallery,
            takeSnapshot
        };
    }
};
</script>
