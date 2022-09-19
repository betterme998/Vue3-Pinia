<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>user:name:{{ name }}</h2>
    <h2>user:age:{{ age }}</h2>
    <h2>user:level:{{ level }}</h2>
    <button @click="changeState">修改state</button>
    <button @click="resetState">重置state</button>
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

  /*
    1.操作State（一）
    .读取和写入state
      .默认情况下，您可以通过store实例访问状态状态来直接读取和写入状态
      /*
    操作State（二）
    .改变State：
      .除了直接用store.counter++修改store，你还可以调用$path方法
      .它允许您使用部分 'state'对象同时应用多个更改 （一次性修改多个状态）
  */ 
  function changeState() {
    // 1.一个个修改状态
    // useStore.name =  "kobe"
    // useStore.age = 20
    // useStore.level = 200

    // 2.一次性修改多个状态
    // useStore.$patch({
    //   name: "james",
    //   age:35
    // })

    // 3.替换State：
    // .可以通过将其$state属性设置为新对象来替换
    const oldState = useStore.$state
    useStore.$state = {
      name: "curry",
      level:200
    }
    console.log(oldState === useStore.$state);//true
  }
  // .重置State
  // .你可以通过调用store上的$reset()方法将状态重置到其初始值；
  function resetState() {
    useStore.$reset()
  }



  
  // 

</script>

<style scoped>

</style>