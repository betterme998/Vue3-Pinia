<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path" icon="home-o">
        <!-- 提供了插槽 -->
        <span>{{ item.text }}</span>
        <!-- 图片使用组件默认的，不使用插槽-来演示修改子组件样式 -->
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
  import { useRouter } from "vue-router"

  import { ref } from "vue";

  // 选择状态
  const currentIndex = ref(0)
  // 拿到路由
  const router = useRouter()
  // 点击跳转路由改变选择状态
  const itemClick = (index, item) => {
    // currentIndex.value = index
    router.push(item.path)
  }
</script>

<style lang="less" scoped>
  .tab-bar {
    //方法二：局部修改变量
    //--van-tabbar-item-icon-size:30px !important;

    //方法三：找到组件对应元素的类，对类中css属性重写，因为组件就是其他vue页面的引入，然而style标签设置了scoped。所有我们如果直接修改组件的类，不会对组件产生映射
    //解决办法：穿透到子组件，修改他们的类，  :deep(类名)
    //找到子组件的类，让子组件的类也可以生效
    :deep(.van-tabbar-item__icon) {
      font-size: 50px;
    }
    img {
      height: 28px;
    }
  }
  
</style>