<template>
    <Layout>
        <template v-slot:navbar>
            <div class="navbar">
                <div class="touxiang"></div>
                <div class="login"><router-link to="/login">
                        <input type="text" value="登录/注册"></router-link>

                </div>
            </div>
        </template>

        <template v-slot:content1>
            <div class="content1">
                <div>
                    <h2 class="wdfw">我的服务</h2>
                    <div class="icons1">
                        <el-row :gutter="20">
                            <Icons1 module="course" iconName="ketang2" text="技术课堂" :iconSize="iconSize" />
                            <Icons1 iconName="wenda" text="专家问答" :iconSize="iconSize" />
                            <Icons1 iconName="chengjiu" text="识别成就" :iconSize="iconSize" />
                            <Icons1 iconName="shoucangjia" text="收藏夹" :iconSize="iconSize" />
                            <!-- 占位用，解决el-row组件不满5个icons影响css的问题 -->
                            <el-col class="false" :span="6">
                                <svg class="icon" aria-hidden="true" :style="{ width: iconSize, height: iconSize }">
                                    <use xlink:href=""></use>
                                </svg>
                            </el-col>
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
                            <Icons1 module="identify" iconName="bingchonghai" text="病虫害<br>识别" :iconSize="iconSize" />
                            <Icons1 iconName="cechan" text="拍照<br>树果测产" :iconSize="iconSize" />
                            <Icons1 iconName="huaqi" text="拍照<br>判断花期" :iconSize="iconSize" />
                            <Icons1 iconName="shaoqi" text="拍照<br>判断梢期" :iconSize="iconSize" />
                            <Icons1 iconName="fangan" text="配药方案<br>推荐" :iconSize="iconSize" />
                            <Icons1 iconName="nongyao" text="农药复配<br>检测" :iconSize="iconSize" />
                            <Icons1 iconName="chaxun" text="农药查询<br>登记" :iconSize="iconSize" />
                            <Icons1 iconName="huansuan" text="用药PPM<br>换算" :iconSize="iconSize" />
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
import Login from '../components/Login.vue';
import { ref } from 'vue'

export default {
    components: {
        Layout,
        Icons1
    },
    setup() {
        const iconSize = ref("35px");
        return {
            iconSize,
        }
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
        margin-bottom: 20px;

        input {
            width: 150px;
            height: 35px;
            text-align: center;
            border-radius: 20px;
        }

        .show {
            width: 200px;
            height: 150px;
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

    .false {
        height: 0;

    }
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