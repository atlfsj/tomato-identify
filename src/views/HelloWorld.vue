<template>
  <div class="welcome">
    <div class="title">
      <img src="../assets/icons/nav.svg" alt="nav">
    </div>
    <div class="context">
      <h1>病虫害预防监测</h1>
    </div>
    <div class="start">
      <router-link to="/service">
        <button>点击开始</button>
      </router-link>
    </div>
  </div>

</template>

<script>
export default {
  components: {

  }
}
</script>

<style>
.welcome {
  display: flex;
  /* 背景铺满 */
  background: url('../assets/icons/bg.svg') no-repeat;
  background-size: cover;
  background-position: right top;
  height: 100vh;
  width: auto;

  img {
    width: 60%;
    height: 60%;
    display: flex;
    position: absolute;
    left: 20%;
    top: -10%;
  }

  .context {
    position: absolute;
    text-align: center;
    top: 45%;
    /* 让元素的顶部位于父容器的中间位置 */
    transform: translateY(-50%);
    /* 向上平移自身高度的一半，使得元素的中心位于父容器的中间位置 */
    width: 100%;

    /* 确保宽度占满父元素 */
    h1 {
      color: bisque;
    }
  }

  .start {
    position: absolute;
    bottom: 35%;
    /* 距离父容器底部的距离 */
    left: 50%;
    /* 水平居中 */
    transform: translateX(-50%);
    /* 将按钮水平居中 */
  }

}
</style>