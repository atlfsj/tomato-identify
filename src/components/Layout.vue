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
                    <Icons2 iconName="fuwu1" text="服务" />
                    <Icons2 iconName="ketang1" text="技术课堂" />
                    <Icons2 iconName="wode1" text="我的" />

                </el-row>
            </div>
        </div>

    </div>
</template>

<script>
import Icons2 from './Icons2.vue'

export default {
    components: {
        Icons2
    },
}
</script>

<style lang="less" scoped>
@import '../assets/stylesheets/vars.less';

.layout {
    display: flex;
    flex-direction: column;
    height: 100vh; // 使布局占满整个视口高度 


    .navbar {
        flex: 2;
        background: @layout-white-bg;
    }

    .container {
        flex: 7;
        background: @layout-grey-bg;
    }

    .footbar {
        flex: 1;
        /* 占据总高度的 10% */
        background: @layout-white-bg;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 10px;
        justify-content: center;
    }
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
</style>
