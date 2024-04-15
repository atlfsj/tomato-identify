<template>
    <div class="layout">
        <div class="navbar">
            <slot name="navbar"></slot>
        </div>

        <div class="container">
            <slot name="content1"></slot>
            <slot name="content2"></slot>
        </div>

        <div class="footbar">
            <div class="icons2">
                <el-row :gutter="20">
                    <Icons2 footbarName="service" :iconName="serviceIcon" text="服务" />
                    <Icons2 footbarName="course" :iconName="courseIcon" text="技术课堂" />
                    <Icons2 footbarName="user" :iconName="userIcon" text="我的" />
                </el-row>
            </div>
        </div>
    </div>
</template>

<script>
import Icons2 from './Icons2.vue'
import { ref, watchEffect } from 'vue'
import { useRouter } from 'vue-router'

export default {
    components: {
        Icons2
    },
    setup() {
        const serviceIcon = ref("fuwu2");
        const courseIcon = ref("ketang1");
        const userIcon = ref("wode1");
        const router = useRouter();

        // 监听路由变化
        watchEffect(() => {
            if (router.currentRoute.value.path === '/service') {
                serviceIcon.value = "fuwu2";
                courseIcon.value = "ketang1";
                userIcon.value = "wode1";
            } else if (router.currentRoute.value.path === '/course') {
                serviceIcon.value = "fuwu1";
                courseIcon.value = "ketang2";
                userIcon.value = "wode1";
            } else if (router.currentRoute.value.path === '/user') {
                serviceIcon.value = "fuwu1";
                courseIcon.value = "ketang1";
                userIcon.value = "wode2";
            }
        })

        return {
            serviceIcon,
            courseIcon,
            userIcon
        }
    }
}
</script>

<style lang="less" scoped>
@import '../assets/stylesheets/vars.less';

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh; // 使布局占满整个视口高度 


    .navbar {
        flex: 1.5;
        background: @layout-white-bg;
    }

    .container {
        flex: 7.5;
        background: @layout-grey-bg;
    }

    .footbar {
        // 占据总高度的 10% 
        flex: 1;
        background: @layout-white-bg;
        // 将footbar固定在底部
        position: fixed;
        bottom: 0;
        width: 100%;

    }
}

// element-plus样式
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
