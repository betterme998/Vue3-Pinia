<!-- 在Composition API setup函数中 中编写jsx -->
<!-- 指定语言 -->
<!-- <script lang="jsx">
import { ref } from 'vue'
import about from "./About.vue";

export default {
  setup() {
    const counter = ref(0)

    const increment = () => {
      counter.value++
    }
    const decrement = () => {
      counter.value--
    }
    

    return () => (
      <div class="app">
        // 通过大括号拿到data,methods等的的值
        <h2>当前计数：{counter.value}</h2>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>  
        // 使用组件
        <about/>
      </div>
    )
  }
}
</script> -->


<!-- Composition API setup语法糖 jsx写法 -->
<template>
  <!-- setup语法糖 jsx写法 -->
  <jsx/>
</template>

<script lang="jsx" setup>
import { ref } from 'vue'
import about from "./About.vue";

  const counter = ref(0)

  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }
  
  const jsx = () => (
    <div class="app">
      // 通过大括号拿到data,methods等的的值
      <h2>当前计数：{counter.value}</h2>
      <button onClick={increment}>+1</button>
      <button onClick={decrement}>-1</button>  
      // 使用组件
      <about/>
    </div>
  )

</script>


<style lang="less" scoped>

</style>