<template>
    <Layout>
        <template v-slot:navbar>
            <div class="navbar">
                <img class="navbarImage" src="../assets/icons/service-bg.svg" alt="">

                <input class="search" value="搜索文章"></input>
            </div>
        </template>

        <template v-slot:content1>
            <div class="content1">
                <img src="../assets/icons/3.svg" alt="">
            </div>
        </template>

        <template v-slot:content2>
            <div class="content2">
                <MsgLevel1 title="热门文章" more="更多" />
                <div class="articleSelect">
                    <div class="select">
                        <MsgLevel2 />
                    </div>
                    <div class="select">
                        <MsgLevel2 />
                    </div>
                    <div class="select">
                        <MsgLevel2 />
                    </div>
                    <div class="select">
                        <MsgLevel2 />
                    </div>

                </div>
                <MsgLevel1 title="专家课堂" more="更多" />
                <div class="articleSelect">
                    <div class="select">
                        <MsgLevel2 />
                    </div>
                    <div class="select">
                        <MsgLevel2 />
                    </div>
                    <div class="select">
                        <MsgLevel2 />
                    </div>
                    <div class="select">
                        <MsgLevel2 />
                    </div>

                </div>
            </div>
        </template>
    </Layout>
</template>

<script>
import Layout from '../components/Layout.vue';
import MsgLevel1 from '../components/MsgLevel1.vue';
import MsgLevel2 from '../components/MsgLevel2.vue';

export default {
    components: {
        Layout,
        MsgLevel1,
        MsgLevel2
    }
}
</script>

<style scoped>
.navbar {
    margin-top: -20px;
    display: flex;
    align-items: center;
    flex-direction: column;

    .navbarImage {
        width: 100%;
        height: 150px
    }
}

.search {
    margin-bottom: 10px;
    border-radius: 20px;
    text-align: center;
    width: 50%;
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

img {
    width: 100%;
    height: 100%;
    border-radius: 8px;
}

.select {
    margin: 10px;
    background: #e2e3e5;
    border-radius: 8px;
}
</style>