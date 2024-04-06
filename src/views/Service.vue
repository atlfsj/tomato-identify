<template>
    <Layout>
        <template v-slot:navbar>
            <div class="navbar">
                <img class="navbarImage" src="../assets/icons/nav.svg" alt="">
            </div>
        </template>

        <template v-slot:content1>
            <div class="content1">
                <div class="icons1">
                    <el-row :gutter="20">
                        <!-- 病虫害识别 -->
                        <el-col :span="6">
                            <router-link to="/resultShow">
                                <div for="fileInput" @click="openFile">
                                    <svg class="icon-bingchonghai" aria-hidden="true"
                                        :style="{ width: iconSize, height: iconSize }">
                                        <use xlink:href="#icon-bingchonghai"></use>
                                    </svg>
                                </div>
                            </router-link>
                            <div class="text">病虫害<br>识别</div>
                        </el-col>
                        <input id="fileInput" type="file" accept="image/*" style="display: none;"
                            @change="handleFileInputChange">
                        <!-- 病虫害识别 -->
                        <Icons1 iconName="cechan" text="拍照<br>树果测产" />
                        <Icons1 iconName="huaqi" text="拍照<br>判断花期" />
                        <Icons1 iconName="shaoqi" text="拍照<br>判断梢期" />

                        <Icons1 iconName="fangan" text="配药方案<br>推荐" />
                        <Icons1 iconName="nongyao" text="农药复配<br>检测" />
                        <Icons1 iconName="chaxun" text="农药查询<br>登记" />
                        <Icons1 iconName="huansuan" text="用药PPM<br>换算" />

                        <Icons1 iconName="duishui" text="用药<br>兑水计算" />

                    </el-row>
                </div>
            </div>
        </template>

        <template v-slot:content2>
            <div class="content2">
                <MsgLevel1 title="技术热点" more="更多文章" />
                <MsgLevel2 />
            </div>
        </template>

    </Layout>
</template>

<script>
import Layout from '../components/Layout.vue'
import Icons1 from '../components/Icons1.vue'
import MsgLevel1 from '../components/MsgLevel1.vue'
import MsgLevel2 from '../components/MsgLevel2.vue'
import { storeToRefs } from 'pinia'
import { useIdentifyStore } from '../store/identify';
import { ref, watch } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
    components: {
        Layout,
        Icons1,
        MsgLevel1,
        MsgLevel2
    },
    setup() {
        // 拍照上传预览的逻辑处理
        const store = useIdentifyStore();
        const { imageUrl, uploadResult } = storeToRefs(store);

        const openFile = () => {
            const fileInput = document.getElementById('fileInput');
            // 点击图标时触发文件选择器
            fileInput.click();
        }
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
        // 拍照上传路由守卫
        const router = useRouter();
        router.beforeEach((to, from, next) => {
            if (to.name === 'ResultShow' && imageUrl.value === '') {
                console.log('imageUrl 为空，阻止路由离开');
                next(from); // 阻止路由离开
            } else {
                console.log('允许路由离开');
                next(); // 允许路由离开
            }
        });

        // 监听 imageUrl 的变化
        watch(imageUrl, (newValue, oldValue) => {
            if (newValue !== '') {
                console.log('自动跳转到下一个路由');
                // 执行跳转
                router.push('/resultShow');
            }
        });

        return {
            imageUrl,
            uploadResult,
            openFile,
            handleFileInputChange,
        };
    },
}
</script>

<style lang="less" scoped>
// 单独为病虫害加css
.el-col {
    border-radius: 4px;
    padding: 15px;
}

.text {
    margin-top: 10px;
    text-align: center;
}

.icon-bingchonghai {
    width: 25px;
    height: 25px;
}

// 该页面正常css 
.navbar {
    margin: 10px;
}

.navbarImage {
    width: 100%;
    height: 170px;
}

.content1 {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    margin: 20px;
    border-radius: 8px;
    background: #ffffff;
}

.content2 {
    display: flex;
    flex-direction: column;
    margin: 20px;
    border-radius: 8px;
    background: #ffffff;


}

.icons1 {
    margin-left: 10px;
    margin-right: 10px;
}

.el-row {
    margin-bottom: 20px;
    display: flex;
    text-align: center;
    margin: 10px;
}

.el-row:last-child {
    margin-bottom: 10px;
}
</style>