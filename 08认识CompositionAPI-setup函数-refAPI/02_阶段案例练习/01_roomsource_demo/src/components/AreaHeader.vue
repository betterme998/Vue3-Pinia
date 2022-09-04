<template>
  <!-- 1.区域header -->
  <div class="area-header">
      <!-- h3标签有padding 需要重置的话我们在assets文件夹处理 -->
      <h3 class="title">{{ title }}</h3>
      <div class="subtitle">{{ subtitle }}</div>
    </div>
</template>

<script setup>
  // 接收数据
  defineProps({
    title:{
      type:String,
      default:"默认标题"
    },
    subtitle: {
      type:String,
      default:"我是默认子标题"
    }
  })
</script>

<style lang="less" scoped>
  .area-header {
      height: 84px;
      .title {
        font-size:22px;
        color: #000;
      }

      .subtitle {
        font-size: 14px;
        margin-top: 12px;
        color: #333;
      }
    }
</style>