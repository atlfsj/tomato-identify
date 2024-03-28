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
                        <Icons1 module="identify" iconName="bingchonghai" text="病虫害<br>识别" />
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
                <MsgLevel1 />
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

import { ref } from 'vue'

export default {
    components: {
        Layout,
        Icons1,
        MsgLevel1,
        MsgLevel2
    },
    setup() {
        /*const iconSize = ref("15px");
        return { iconSize };*/

    }
}
</script>

<style scoped>
.navbarImage {
    width: 100%;
    max-height: 150px
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