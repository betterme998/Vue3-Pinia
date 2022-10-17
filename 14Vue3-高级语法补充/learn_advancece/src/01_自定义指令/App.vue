<template>
  <div class="app">
    <h2>已进入页面input获取焦点</h2>
    <!-- 方式一 -->
    <!-- <input type="text" ref="inputRef"> -->

    <!-- 方式二： -->
    <input type="text" v-focus>
  </div>
</template>

<!-- <script>
  //options API
  export default {
    directives: {
      focus: {
        // 生命周期函数（自定义指令），el参数是当前挂载的元素
        mounted(el) {
          // 当运用的函数被挂载之后调用这个生命周期
          el?.focus()
          console.log(el.focus);
        }
      }
    }
  }
</script> -->

<script setup>
import { onMounted } from "vue"
// 方式一：定义ref绑定到input中，调用focus
// import useInput from "./hooks/useinput"
// const { inputRef } = useInput()

// 方式二：局部自定义指令
// 实现方式二：自定义一个v-focus的局部指令
  // .这个自定义指令实现非常简单，我们只需要在组件选项中使用directives即可；
  // .它是一个对象，在对象中编写我们自定义指令的名称（这里不需要加v-）
  // .自定义指令有一个生命周期，是在组件挂载后调用的mounted，我们可以在其中完成操作
  // 在setup里面定义局部自定义指令，必须v开头
  // const vFocus = {
  //   // 把生命周期放到里面,这里是mounted 
  //   mounted(el) {
  //     el?.focus()
  //   }
  // }
</script>

<style scoped>

</style>