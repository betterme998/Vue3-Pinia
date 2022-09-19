<template>
  <div class="app">
    <!-- 
      1.安装pinia
      2.创建tores文件夹管理pinia，创建index.js文件来创建pinia
      3.在main.js使用pinia
      4.需要定义某一部分需要管理的状态，我们可以定义单独的文件如：有一些counter的数据需要pinia管理，我们直接定义一个counter.js文件
        每一个单独的数据放到单独的store中（就单独创建文件夹） 可以定义一大堆的store
     -->
    <h2>App Component</h2>
    <hr>
    <home></home>
  </div>
</template>

<script setup>
  import Home from './views/Home.vue' 

</script>

<style scoped>

</style>
