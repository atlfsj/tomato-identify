### 运行、打包
```
npm install
npm run dev
npm run build
```

### 开发环境、安装的依赖
```
vite@5
axios@1.6
router@4
less@4
element-plus@2
vant@4
pinia@2
```

### 防丢记录
```Identify.vue
// 只有拍照上传功能，无选择文件上传
<template>
    <div>
        <button @click="capturePhoto">拍照上传</button>
        <!-- 使用 CameraUpload 组件 -->
        <CameraUpload v-if="showCamera" />
    </div>
</template>

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
    }
};
</script>
```