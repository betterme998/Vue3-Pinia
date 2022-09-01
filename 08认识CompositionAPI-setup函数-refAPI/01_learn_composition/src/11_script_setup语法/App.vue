<template>
  <div>
    <h2>Appcontent：{{ message }}</h2>
    <button @click="changeMessage">修改message</button>

    <!-- 导入的组件在script setup语法糖下不用注册，直接使用 -->
    <!-- 传值给子组件 -->
  
    <Showinfo 
      age="18"
      @info-btn-click="infoBtnClick"
      ref="showInfoRef">
    </Showinfo>
    <Showinfo></Showinfo>
    <Showinfo></Showinfo>
  </div>
</template>

<script setup>
  // 语法糖下直接导入组件就能用啦
import Showinfo from "./Showinfo.vue";
import { ref, onMounted } from "vue";
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

//  1.所有编写在顶层中的代码，都是默认暴漏给template可以使用 （不用返回）
  const message = ref("hello world")

// 2.定义响应式数据
  function changeMessage() {
    message.value = "你好啊，李银河！"
  }

// 3.定义props 使用函数defineProps  发送自定义事件使用defineEmits
// 3.defineProps() 和 defineEmits()
  // 为了在声明props和eimts选项是获得完整的类型推断支持，我们可以使用defineProps和defineEnits API，他们将自动地在<script setup>中可用
function infoBtnClick(payload) {
  // 监听子组件点击事件
  console.log("监听到子组件的点击:", payload);
}

// 获取组件实例
// 4.defineExpose() 
  const showInfoRef = ref()
  // 主动调用生命周期里的某个方法
  // 在语法糖的写法下，当我们通过ref获取组件实例，并且需要使用组件内部方法。
  // 必须使用defineExpose() 方法暴漏出要使用的方法
  onMounted(()=>{
    // 拿到组件实例
    showInfoRef.value.foo()
  })
</script>

<style scoped>

</style>