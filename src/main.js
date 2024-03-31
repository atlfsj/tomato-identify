import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.less'
import ImageCropper from 'vue-image-crop-upload';

const app = createApp(App)
app.use(router).component('image-cropper', ImageCropper).mount('#app')