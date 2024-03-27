<template>
    <Layout>
        <template v-slot:navbar>
            navbar
            <div class="identify">
                <button>
                    <router-link to="/identify">开始识别</router-link>
                </button>
            </div>
        </template>
        <template v-slot:content1>
            <div class="content1">
                <div class="icons1">
                    <el-row :gutter="20">

                        <Icons1 iconName="bingchonghai" text="病虫害<br>识别" />
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
                <div class="title">
                    技术热点
                </div>
                <div class="more">
                    更多文章
                    <svg class="icon-tiaozhuan" aria-hidden="true">
                        <use xlink:href="#icon-tiaozhuan"></use>
                    </svg>
                </div>
                <div class="news">
                    <div class="gaiyao">
                        行情不好，是的保护伞的错误v根据以往v给我说不出

                        <img class="news-img" src="../assets/icons/nav.svg" alt="Description of the image">
                    </div>
                </div>
            </div>
        </template>

    </Layout>


</template>

<script>
import Layout from '../components/Layout.vue'
import Icons1 from '../components/Icons1.vue'

import { ref } from 'vue'

export default {
    components: {
        Layout,
        Icons1,
    },
    setup() {
        const iconSize = ref("15px");
        return { iconSize };
    }
}
</script>

<style scoped>
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
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

.grid-content {
    border-radius: 4px;
    min-height: 36px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* 垂直居中 */
    justify-content: center;
    /* 水平居中 */
}

.icon-tiaozhuan {
    width: 30px;
    height: 30px;
}

.news {
    display: flex;
    justify-content: flex-end;
}

.news-img {
    width: 150px;
    height: 100px;
    justify-content: flex-end;
}
</style>