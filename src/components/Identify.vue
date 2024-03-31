<template>
    <div>
        <CameraUpload />
        <FileUpload />
    </div>
</template>

<script>
import CameraUpload from '../components/CameraUpload.vue';
import FileUpload from '../components/FileUpload.vue';

export default {
    components: {
        CameraUpload,
        FileUpload
    },

};
</script>