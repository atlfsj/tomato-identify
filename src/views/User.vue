<template>
    <Layout>
        <template v-slot:navbar>
            <div class="navbar">
                <div class="touxiang"></div>
                <div class="login"><input type="text" value="登录/注册"></div>
            </div>
        </template>

        <template v-slot:content1>
            <div class="content1">
                <div>
                    <h2>我的服务</h2>
                    <div class="icons1">
                        <el-row :gutter="20">
                            <Icons1 module="identify" iconName="bingchonghai" text="病虫害<br>识别" />
                            <Icons1 iconName="cechan" text="拍照<br>树果测产" />
                            <Icons1 iconName="huaqi" text="拍照<br>判断花期" />
                            <Icons1 iconName="shaoqi" text="拍照<br>判断梢期" />
                        </el-row>
                    </div>
                </div>
            </div>
        </template>

        <template v-slot:content2>
            <div class="content1">
                <div>
                    <h2>推荐功能</h2>
                    <div class="icons1">
                        <el-row :gutter="20">
                            <Icons1 module="identify" iconName="bingchonghai" text="病虫害<br>识别" />
                            <Icons1 iconName="cechan" text="拍照<br>树果测产" />
                            <Icons1 iconName="huaqi" text="拍照<br>判断花期" />
                            <Icons1 iconName="shaoqi" text="拍照<br>判断梢期" />
                            <Icons1 module="identify" iconName="bingchonghai" text="病虫害<br>识别" />
                            <Icons1 iconName="cechan" text="拍照<br>树果测产" />
                            <Icons1 iconName="huaqi" text="拍照<br>判断花期" />
                            <Icons1 iconName="shaoqi" text="拍照<br>判断梢期" />
                        </el-row>
                    </div>
                </div>
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout from '../components/Layout.vue';
import Icons1 from '../components/Icons1.vue';

export default {
    components: {
        Layout,
        Icons1
    }
}
</script>

<style scoped>
.navbar {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .touxiang {
        margin: 40px;
        border: 1px solid grey;
        background-color: grey;
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin-bottom: 20px;
    }

    .login {
        margin: 5px;

        input {
            width: 150px;
            height: 35px;
            text-align: center;
            border-radius: 20px;
        }
    }
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