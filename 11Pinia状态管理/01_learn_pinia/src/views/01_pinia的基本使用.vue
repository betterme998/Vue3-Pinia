<template>
  <div class="home">
    <h2>Home View</h2>
    <!-- 拿到store后想拿什么就直接拿，不用跟state，getter等 
      认识Store，什么是Store
      .一个Store（如pinia）是一个实体，它会持有为绑定到你组件树的状态和业务逻辑，也就是保存了全局的状态
      .它有点像始终存在，并且每个人都可以读取和写入的组件
      .你可以在你的应用程序中定义任意数量的Store来管理你的状态；

      .Store有三个核心概念
        .state，getters，actions
        等同于组件中data，computed，methods
        .一旦store被实例化，你就可以直接在store上访问state，getters和actions中定义的任何属性

      .定义一个Store
        .使用defineDtore()定义
        .并且它需要一个唯一名称，作为第一个参数传递

    -->
    <h2>count:{{ counterStore.count }}</h2>
    <hr>
    <!-- 解构后失去响应式 -->
    <h2>count:解构后失去响应式,使用toRefs转换成响应式数据 {{ count }}</h2>
    <button @click="incrementCount">count+1</button>
  </div>
</template>

<script setup>
  // 导入counter.js下的useCouter函数，来返回counter的store
  import useCounter from '@/stores/counter'
  // pinia提供了和toRefs一样的方法
  import { storeToRefs } from 'pinia';
  import { toRefs } from 'vue'

  // 调用useCounter，拿到counter的 store
  const counterStore = useCounter()

  // useCounter不能被解构，不然会失去响应式
  // 如果要变成响应式，使用toRefs
  // const { count } = toRefs(counterStore)
  // 使用pinia中的storeToRefs和 toRefs一样。
  const { count } = storeToRefs(counterStore)


  function incrementCount() {
    // pinia中修改state中的数据，直接修改，不用提交commit
    counterStore.count++
  }
</script>

<style scoped>

</style>