<template>
  <div class="home">
    <h2>Home View</h2>
    <!-- 读取counter下的state的doubleCount -->
    <!-- 访问当前store下的getters -->
    <h2>doubleCount:{{ counterStore.doubleCount }}</h2>
    <h2>doubleCountAddOne:{{ counterStore.doubleCountAddOne }}</h2>
    <!-- 通过id找到对应的角色 -->
    <h2>通过id找到对应的角色getFriendById:{{ counterStore.getFriendById(111) }}</h2>
    <!-- 调用user的store的state数据 -->
    <h2>调用user的store的state数据-并拼接到一起:{{ counterStore.showMessage }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
  </div>
</template>

<script setup>
  // 导入counter的store返回函数
  import useCounter from '@/stores/counter';
  
  // 拿到counter的store
  const counterStore = useCounter()

</script>

<style scoped>

</style>