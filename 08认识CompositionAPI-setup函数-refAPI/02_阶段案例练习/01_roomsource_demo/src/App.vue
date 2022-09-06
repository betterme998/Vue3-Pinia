<template>
  <div class="app">
    <!-- 1.高评价 -->
    <room-area :area-data="highScore"></room-area>
    <!-- 单独的逻辑写到单独的组件中 -->
    <!-- 单独的·组件更好复用 -->
  </div>
</template>

<script setup>
  import { ref } from "vue"
  // 1.获取数据
  // import highScore from "./data/high_score.json"
  // 模拟网络请求数据数据
  const highScore = ref({})
  setTimeout(() => {
    // import返回的是一个promise
    import("./data/high_score.json").then(res => {
      highScore.value = res.default
    })
  },1000)
  
  // 引入区域
  import RoomArea from "./components/RoomArea.vue"
  console.log(highScore);
</script>

<style lang="less" scoped>
  // 使用less需要下载 less-loader
  .app {
    width:1032px;
    padding: 40px;
    margin: 0 auto;
  }
</style>
