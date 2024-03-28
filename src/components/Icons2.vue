<template>
    <el-col :span="8">
        <router-link :to="'/' + footbarName">
            <svg class="icon" aria-hidden="true" :style="{ width: iconSize, height: iconSize }">
                <use :xlink:href="'#icon-' + iconName"></use>
            </svg>
            <div class="text" v-html="formattedText"></div>
        </router-link>
    </el-col>
</template>

<script>
import { computed } from 'vue';
export default {
    props: {
        footbarName: String,
        iconName: String,
        text: String,
        iconSize: {
            type: String,
            default: '35px' // 设置默认大小
        }
    },
    setup(props) {
        const formattedText = computed(() => {
            return props.text.replace(/\n/g, '<br>');
            // 替换文本中的换行符（\n）为 HTML 的换行标签（<br>）
        });
        return { formattedText };
    }

}
</script>

<style scoped>
.el-col {
    border-radius: 4px;
    padding: 10px;
}



.text {
    margin-top: 5px;
    /* 调整文字和图标之间的间距 */
    text-align: center;

}
</style>