<template>
  <div class="app">
   
    <!-- 匹配的是组件的name属性 -->
    <!-- Composition API中展示没有定义name属性，使用在使用一个script定义name -->
    <router-view v-slot="props">
      <keep-alive includes = "home">
        <component :is="props.Component"></component>
      </keep-alive>
    </router-view>
    <!-- 加载动画 -->
    <Loading/>
    
    <!-- 隐藏tabbar方案一 -->
    <tab-bar v-if="!route.meta.hiderTabBar"/>
    <!-- 隐藏tabbar方案二 css方法 -->
    <!-- <tab-bar/> -->
  </div>
</template>

<script setup>
  import TabBar from "@/components/tab-bar/tab-bar.vue"
  import Loading from "@/components/loading/loading.vue"

  import { useRoute } from "vue-router";
  // 判断是否隐藏tabbar
  // 方案一：在路由配置meta:{hiderTabBar:true}表示隐藏,通过v-if进行判断
  // 通过useRoute() 拿到当前活跃的route
  const route = useRoute()
   
</script>


<style scoped>

</style>
