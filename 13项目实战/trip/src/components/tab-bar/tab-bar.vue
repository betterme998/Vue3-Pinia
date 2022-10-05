<template>
  <div class="tab-bar">
    <van-tabbar 
      v-model="currentIndex" 
      active-color="#ff9854" 
      route
    >
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <!-- 默认插槽 -->
        <span>{{ item.text }}</span>
        <!-- 具名插槽 -->
        <template #icon>
          <img v-if="currentIndex !== index" :src = "getAssetURL(item.image)">
          <img v-else :src = "getAssetURL(item.imageActive)">
        </template>
      </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>
 
<script setup>
  // 把tab-bar数据抽取到assets文件夹，并导入
  import tabbarData from "@/assets/data/tabbar.js"

  // 导入在vite项目中处理本地图片动态绑定src函数
  import { getAssetURL } from "@/utils/load_assets.js"

  // 导入路由
  import { useRoute } from "vue-router"

  import { ref, watch } from "vue";

  // 当前活跃路由
  const route = useRoute()

  // 选择状态
  const currentIndex = ref(0)

  // 监听路由改变时，找到对应的索引，设置currentindex
  watch(route, (newRoute) => {
    // 拿到当前活跃路由的索引 index
    const index = tabbarData.findIndex(item => item.path === newRoute.path)
    // 如果没有找到直接返回
    if (index === -1) return
    currentIndex.value = index
  })

  
</script>

<style lang="less" scoped>
  .tab-bar {
    img {
      height: 26px;
    }
  }
  
</style>