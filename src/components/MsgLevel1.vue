<template>
    <div class="level1">
        <div class="title">
            <h3>技术热点</h3>
        </div>
        <div class="more">更多文章
            <svg class="icon-tiaozhuan" aria-hidden="true">
                <use xlink:href="#icon-tiaozhuan"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.level1 {
    display: flex;
    justify-content: space-between;
    margin: 10px 10px 0;
    align-items: center;

    .more {
        display: flex;
        align-items: center;
        /* 将子元素垂直居中 */
    }

    .more svg {
        margin-left: 5px;
        /* 可根据需要调整图标与文字之间的间距 */
    }

    .icon-tiaozhuan {
        margin-top: 5px;
        width: 30px;
        height: 30px;
    }
}
</style>