<template>
  <div class="app">
    <button @click="counter++">+1</button>
    <!-- 1.传入参数和修饰符 -->
    <!-- <h2 v-why:kobe.abc.cba="message">哈哈哈</h2> -->

    <!-- 2.价格拼接单位符号 -->
    <h2 v-unit>{{ 111 }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const counter = ref(0)

const message = '你好啊，李银河'
// 自定义指令，必须v开头
const vWhy = {
  // 拿到传过来的值，el为当元素，bingdings为参数
  mounted(el, bindings) {
    console.log(bindings);
  }
}
</script>

<style scoped>

</style>