<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData" :key="index">
      <div 
        class="tab-bar-item" 
        :class="{ active: currentIndex === index }"
        @click="itemClick(index, item)"
      >
        <!-- img的src是动态的，要经过处理，不然拿不到数据，在vite下的处理 -->
        <img v-if="currentIndex !== index" :src = "getAssetURL(item.image)">
        <img v-else :src = "getAssetURL(item.imageActive)">
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>
 
<script setup>
  // 把tab-bar数据抽取到assets文件夹，并导入
  import tabbarData from "@/assets/data/tabbar.js"

  // 导入在vite项目中处理本地图片动态绑定src函数
  import { getAssetURL } from "@/utils/load_assets.js"

  // 导入路由
  import { useRouter } from "vue-router"

  import { ref } from "vue";

  // 选择状态
  const currentIndex = ref(0)
  // 拿到路由
  const router = useRouter()
  // 点击跳转路由改变选择状态
  const itemClick = (index, item) => {
    currentIndex.value = index
    router.push(item.path)
  }
</script>

<style lang="less" scoped>
  .tab-bar {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50px;
    display: flex;
    border-top: 1px solid #f3f3f3;
    .tab-bar-item {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &.active {
        color: var(--primary-color);
      }

      .text{
        font-size: 12px;
        margin-top: 2px;
      }
      img {
        width: 36px;
      }
    }
  }
</style>