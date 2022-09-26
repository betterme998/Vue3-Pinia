<template>
  <div class="city top-page">
    <!-- 1.搜索框 -->
    <van-search 
      v-model="searchValue" 
      placeholder="城市/区域/位置" 
      shape="round"
      show-action
      @cancel="cancelClick"
    />
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter()

  // 搜索框功能
  const searchValue = ref("")
  const cancelClick = () => {
    router.back()
  }
</script>

<style lang="less" scoped>
// 修改搜索框左侧图标，Vant提供了变量--van-search-left-icon-color，直接修改变量，如果没有变量，就使用deep修改样式
// 这里全局修改，在common.css文件夹中修改
</style>