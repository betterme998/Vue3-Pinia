<template>
  <div class="app">
    <!-- 1.区域header -->
    <div class="area-header">
      <div class="title">{{ highScore.title }}</div>
      <div class="subtitle">{{ highScore.subtitle }}</div>
    </div>
  </div>
</template>

<script setup>
  // 1.获取数据
  import highScore from "./data/high_score.json"
  console.log(highScore);
</script>

<style lang="less" scoped>
  // 使用less需要下载 less-loader
  .app {

  }
</style>
