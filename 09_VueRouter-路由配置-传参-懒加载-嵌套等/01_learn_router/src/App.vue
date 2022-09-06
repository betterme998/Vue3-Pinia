<template>
  <!-- 1.安装vue-router库：npm install vue-router -->
  <!-- 2.在router文件夹配置所有路由映射关系 -->
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <!-- 提供了切换组件的标签 -->
      <!-- 会自动渲染成a元素，点击可以跳转到对应的页面 -->
      <router-link to="/home">首页</router-link>
      <router-link to="/about">关于</router-link>
    </div>
    <!-- 用来展位的 -->
    <router-view></router-view>
  </div>
</template>

<script setup>

</script>

<style>

</style>

<!-- 路由使用步骤 -->
<!-- 
  1.第一步：创建路由需要映射的组件（打算显示的页面）
  2.第二步：通过createRouter创建路由对象，并且传入routes和history模式；
    .配置路由映射：组件和路径映射关系的routers数组；
    .创建基于hash或者history的模式
  3.第三步：使用app注册路由对象（use方法）
  4.第四步：路由使用：通过<router-link>和<router-view>
 -->