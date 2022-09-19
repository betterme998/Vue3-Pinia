<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>user:name:{{ name }}</h2>
    <h2>user:age:{{ age }}</h2>
    <h2>user:level:{{ level }}</h2>
    <button @click="changeState">修改state</button>
  </div>
</template>

<script setup>
  // 导入user的store
  import useUser from '@/stores/user'
  import { storeToRefs } from 'pinia'
  //执行函数获得store 
  const useStore = useUser()
  // 进行解构，并调用storeToRefs变成响应式
  const { name,age,level } = storeToRefs(useStore)

</script>

<style scoped>

</style>