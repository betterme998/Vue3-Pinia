<template>
  <div>
    <h2>Home计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>
  </div>
</template>

<script>
  import { ref } from 'vue';

  // 导入抽取出去的函数
  import useCounter from '../hooks/useCounter';
export default {
  setup() {
    // 下面代码逻辑就是计数器的代码，compositionAPI把他们放到一起，不想以前那么分散
    // 所以可以把下面代码抽离出来放到hooks文件 （放回调函数）当中，
    // const counter = ref(0)
    // function increment() {
    //   counter.value++
    // }
    // function decrement() {
    //   counter.value--
    // }

    // 使用抽取的函数
    const { counter, increment, decrement } = useCounter()

    return {
      counter,
      increment,
      decrement
    }
  }
}
</script>

<style>

</style>