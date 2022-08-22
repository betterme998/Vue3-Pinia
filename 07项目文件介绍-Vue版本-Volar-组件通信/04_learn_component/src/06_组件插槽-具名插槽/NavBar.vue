<template>
  <div class="nav-bar">
    <!-- 封装一个导航 -->
    <div class="left">
      <!-- 给每个插槽取名字 -->
      <slot name="left">left</slot>
    </div>
    <div class="center">
      <slot name="center">center</slot>
    </div>
    <div class="right">
      <slot name="right">right</slot>
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .nav-bar {
    display: flex;
    background-color: orange;
    line-height: 44px;
    height: 44px;
    text-align: center;
  }
  .left {
    width: 80px;
    background-color: skyblue;
  }
  .center {
    flex: 1;
    background-color: seagreen;
  }
  .right {
    width: 80px;
  }
</style>