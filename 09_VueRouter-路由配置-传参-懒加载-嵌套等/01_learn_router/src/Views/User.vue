<template>
  <div class="user">
    <!-- 获取路由传过来的id 在模板里面拿 -->
    <h2>user:{{ $route.params.id }}</h2>
  </div>
</template>

<script setup>
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

// 获取路由传过来的id 在代码里面拿 获取route跳转id
// compositionAPI通过 useRoute来拿的

const route = useRoute()
console.log(route.params.id);

// 在同一个组件来回跳转拿到参数
onBeforeRouteUpdate((to, from) => {
  console.log("to:",to.params.id);
  console.log("from:",from.params.id);
})

</script>

<style scoped>

</style>  