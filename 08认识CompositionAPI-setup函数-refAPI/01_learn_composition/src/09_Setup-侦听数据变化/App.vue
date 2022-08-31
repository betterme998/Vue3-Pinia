<template>
  <div>
    <h2>当前计数：{{ counter }}</h2>
    <button @click="counter++">+1</button>
    <button @click="name = 'kobe'">修改name</button>
    <!-- 
      2.watchEffect
        .当侦听到某些响应式数据变化时，我们希望执行某些操作，这个时候就可以使用watchEffect
        
        watchEffect的停止侦听
          如果发送某些情况下，我们希望停止侦听，这个时候我们可以获取watchEffect的返回值函数，调用该函数即可
          
     -->
  </div>
</template>

<script>
import { watchEffect,ref, watch } from 'vue';
  export default {
    setup() {
      const counter = ref(0)
      const name = ref("why")

      // 侦听counter变化，执行函数
      // 明确指定监听对象
      // watch(counter, (newValue,oldValue) => {})

      // 1.watchEffect传入的函数会自动执行
      // 2.在执行的过程中会自动收集依赖（收集依赖的那些响应式的数据）
      const stopWatch =  watchEffect(() => {
        // 在传入的函数执行时，依赖了counter.value（使用了），那么就会自动收集这个依赖
        // 之后counter变化，就会立即执行
        // 可以自动收集多个依赖，改变name也会触发执行
        console.log('-------', counter.value, name.value);

        // 当需要停止侦听时：
          // watchEffect返回一个函数，
          // 调用函数停止监听
          if(counter.value > 10){
            stopWatch()
          }
      })
      return {
        counter,
        name
      }
    }
  }
</script>

<style scoped>

</style>