<template>
  <div class="app">
    <!-- template中会对ref对象自动解包 -->
    <h2>当前计数: {{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  import { ref } from 'vue';
  // 把抽取的逻辑引入
  import useCounter from './hooks/userCounter'
export default {
  setup() {
    // 定义counter的内容
    // 默认定义的数据都不是响应数据
    // 要改变要使用vue提供的函数ref
    // 所以要拿到或改变值时要用.value

    // 如果下面逻辑在多个组件中使用，可以抽取出来，在hooks文件中
    // let counter = ref(100);
    // const increment = () => {
    //   // 这里要改变它的值时要使用.value
    //   counter.value++
    // }
    // const decrement = () => {
    //   counter.value--
    // }
    // 在template中使用的是setup的返回值
    // 所有要绑定到template的东西必须要是setup返回的

    // 1.解构导入抽取的逻辑
    // const { counter, increment, decrement } = useCounter()
    return {
      // 1.
      // counter,
      // increment,
      // decrement

      // 第二种使用导入的抽取逻辑  解构
      ...useCounter()
    }
  }
}
</script>

<style>

</style>
