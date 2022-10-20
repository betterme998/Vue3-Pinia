<template>
  <div class="app">
    <!-- 
      显示一个时间，在实际开发中并不是写死的，数据来源于服务器，服务器在返回时间时，返回的是‘时间戳’。我们每次要进行转换
      时间戳：10位 -- 秒
             13位 -- 毫秒
      项目中很多地方使用时间，如果每个组件都写方法，计算属性很麻烦，
      这个时候就可以使用自定义指令
     -->
     <!-- 转换时间戳的指令 传参 -->
    <h2 v-ftime="'YYYY/MM/DD'">{{ timestame }}</h2>
    <h2 v-dtime>{{ timestame2 }}</h2>
    <!-- 不传参 -->
    <h2 v-ftime>{{ timestame }}</h2>
  </div>
</template>

<script setup>

// 时间戳
const timestame = 1231355265
const timestame2 = '2022-10-19T08:04:03.000+0000'

</script>

<style scoped>

</style>