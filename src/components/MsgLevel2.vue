<template>
    <router-link to="/articleDetail">
        <div class="level2">
            <div class="news">
                <div class="article">行情不好，是的保我让飞机饿哦我护伞据以不出</div>
                <div class="articleImgs">
                    <img class="news-img" src="../assets/icons/nav.svg" alt="Description of the image">
                </div>
            </div>
        </div>
    </router-link>
</template>

<script>
export default {
    props: {

    },
    setup(props) {

    }
}
</script>

<style scoped>
.level2 {
    display: flex;
    justify-content: space-between;
    margin: 0 10px 10px;

    align-items: baseline;

    .news {
        display: flex;
        align-items: center;
        /* 将子元素垂直居中 */
    }

    .news-img {
        width: 150px;
        height: 100px;
        margin-left: 10px;
        /* 添加左侧间距 */
    }
}
</style>