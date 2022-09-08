<template>
  <div class="home">
    <h2>home</h2>
    <!-- 嵌套路由占位组件 -->
    
    <div class="home-nav">
      <!-- 点击到的组件会自动加上 精准匹配的class，和普通匹配的class。 -->
      <!-- 所以嵌套路由的子路由,会是加上两个class. 而home组件只有一个普通匹配的class -->
      <router-link to="/home/recommend">推荐</router-link>
      <router-link to="/home/ranking">排行</router-link>
    </div>

    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style scoped>

</style>