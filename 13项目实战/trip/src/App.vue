<template>
  <div class="app">
    <router-view></router-view>
    <!-- 隐藏tabbar方案一 -->
    <!-- <tab-bar v-if="!route.meta.hiderTabBar"/> -->
    <tab-bar/>
  </div>
</template>

<script setup>
  import TabBar from "@/components/tab-bar/tab-bar.vue"

  import { useRoute } from "vue-router";
  // 判断是否隐藏tabbar
  // 方案一：在路由配置meta:{hiderTabBar:true}表示隐藏,通过v-if进行判断
  // 通过useRoute() 拿到当前活跃的route
  // const route = useRoute()
   
</script>


<style scoped>

</style>
