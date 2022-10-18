<template>
  <!-- composition API setup语法糖使用rander函数 -->
  <render/>
</template>


 <!-- 使用Composition API  setup函数写法-->
 <!-- <script>
 import { h,ref } from 'vue'
 import Home from "./Home.vue"
   export default {
     setup() {
       const counter = ref(0)
 
       const increment = () => {
         counter.value++
       }
       const decrement = () => {
         counter.value--
       }
 
       // 在Composition API中使用render函数 需要return一个函数
       return () => h("div", { className: "app" }, [
        h("h2",null,`当前计数：${counter.value}`),
        h("button",{ onClick: increment },"+1"),
        h("button",{ onClick: decrement },"-1"),
        // 渲染组件
        h(Home)
      ])
 
     }
   }
 </script> -->
<script setup>
import { h,ref } from 'vue'
import Home from "./Home.vue"
  const counter = ref(0)

  const increment = () => {
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }

  // 在Composition API中使用render函数 setup语法糖写法
  // 再template中使用render
  const render = () => h("div", { className: "app" }, [
  h("h2",null,`当前计数：${counter.value}`),
  h("button",{ onClick: increment },"+1"),
  h("button",{ onClick: decrement },"-1"),
  // 渲染组件
  h(Home)
])
 </script>
 
 <style scoped>
 
 </style>