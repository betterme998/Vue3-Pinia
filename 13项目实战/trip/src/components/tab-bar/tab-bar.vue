<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854">
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
        <!-- 提供了插槽 -->
        <span>{{ item.text }}</span>
        <template #icon>
          <!-- 图片是我们自己写的，我们可以直接覆盖它的样式 -->
          <img v-if="currentIndex !== index" :src = "getAssetURL(item.image)">
          <img v-else :src = "getAssetURL(item.imageActive)">
          <!-- 修改组件内部样式：
            方法一：全局修改 查看修改元素的css变量， 在我们配置的common.css中从新配置该变量，如果不行。加上!important; 强制修改

            方法二：局部修改（推荐），在对应的父组件下修改变量，如.tabbar下修改变量

            方法三：通过/deep/ 找到组件对应的类
          -->
          <!-- 如果没有使用插槽，而是组件本身的内容，如 icon="home-o" 那怎么修改组件的样式呢？-->
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