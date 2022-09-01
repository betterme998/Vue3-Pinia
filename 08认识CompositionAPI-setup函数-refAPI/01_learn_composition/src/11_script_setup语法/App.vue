<template>
  <div>
    <h2>Appcontent：{{ message }}</h2>

    <!-- 导入的组件在script setup语法糖下不用注册，直接使用 -->
    <Showinfo></Showinfo>
    <Showinfo></Showinfo>
    <Showinfo></Showinfo>
  </div>
</template>

<script setup>
  // 语法糖下直接导入组件就能用啦
import Showinfo from "./Showinfo.vue";
  // vue3.2提供了语法糖，代码直接写到script里面，在script标签加上 setup
  // 这样就相当于在setup函数里写代码一样的
  /*
  <script setup>是在单文件组件（SFC）中使用组合式API的编译时语法糖，当同时使用SFC与组合式API时则推荐该语法。
      更少的样板内容，更简洁的代码
      能够使用纯Typescript声明prop和抛出事件；
      更好的运行时性能；
      更好的IDE类型推断性能
    .使用这个语法，需要将setup attribute添加到<script>代码块上
    .里面的代码会被编译成组件setup()函数的内容：
      这意味着与普通的script只在组件被首次引入的时候执行一次不同
      <script setup>中的代码会每次组件实例被创建的时候执行
  */ 
  const message = "hello world"

</script>

<style scoped>

</style>