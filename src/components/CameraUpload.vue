<template>
    <div>
        <input type="file" accept="image/*" capture="camera" ref="fileInput" @change="handleFileInputChange">
    </div>
</template>

<script>
export default {
    methods: {
        handleFileInputChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                const imageData = reader.result;
                // 触发 imageCaptured 事件，并传递图片数据
                this.$emit('imageCaptured', imageData);
            };
            reader.readAsDataURL(file);
        }
    }
};
</script>