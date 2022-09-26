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

    <!-- 2.tab的切换 -->
    <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
      <van-tab title="国内.港澳台"></van-tab>
      <van-tab title="海外"></van-tab>
    </van-tabs>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import { getCityAll } from "@/service"

  const router = useRouter()

  // 搜索框功能
  const searchValue = ref("")
  const cancelClick = () => {
    router.back()
  }

  // tab的切换
  const tabActive = ref(0)

  // 网络请求：请求城市数据
  getCityAll().then(res => {
    console.log(res);
  })
</script>

<style lang="less" scoped>
// 修改搜索框左侧图标，Vant提供了变量--van-search-left-icon-color，直接修改变量，如果没有变量，就使用deep修改样式
// 这里全局修改，在common.css文件夹中修改

.city {
  // --van-tabs-line-height: 30px;
}
</style>