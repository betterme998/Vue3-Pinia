<template>
  <div>
    <!-- reactive解构后数据不是响应式的，要想解构后依然是响应式数据，要使用：toRefs或者toRef -->
    <h2>info: {{ info }}</h2>
    <h2>info解构后: {{ name }}-{{ age }}</h2>
    <button @click="age++">修改age</button>
    <hr>
    <h2>toRef单独解构的值：{{ height }}</h2>
    <button @click="height = 1.89">修改age</button>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from 'vue';

  export default {
    setup() {
      const info = reactive({
        name: "why",
        age: 18,
        height:1.88
      })

      // reactive被解构后会变成普通的值，失去响应式
      // 如果想解构后依然是响应式数据，vue提供了toRefs
      // const { name, age } = info
      // 让解构后的值是ref 依然是响应式
      const { name, age } = toRefs(info)
      // 如果想单独解构某个值 ：可以使用toRef 没有s
      // 要传入解构对象，以及单独解构的值
      const height = toRef(info, "height")
      return {
        info,
        name,
        age,
        height
      }
    }
  }
</script>

<style scoped>

</style>