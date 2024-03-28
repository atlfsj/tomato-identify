<template>
    <Layout>
        <template v-slot:navbar>
            <div class="navbar">
                <img class="navbarImage" src="../assets/icons/nav.svg" alt="">

                <input value="搜索文章"></input>
            </div>
        </template>

        <template v-slot:content1>
            <div class="content1">
                <img src="../assets/icons/3.svg" alt="">
            </div>
        </template>

        <template v-slot:content2>
            <div class="content2">
                <MsgLevel1 />
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
        MsgLevel2
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