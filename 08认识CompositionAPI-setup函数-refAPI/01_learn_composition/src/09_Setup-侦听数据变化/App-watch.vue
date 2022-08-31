<template>
  <div>
    <h2>App:{{ message }}</h2>
    <button @click="message = '你好啊，李银河！'">修改message</button>
    <button @click="info.friend.name = 'james'">修改info</button>
    <!-- 
      侦听数据变化
      在前面的Options API中，我们可以通过watch选项来侦听data或者props的数据变化，当数据变化时执行某一些操作
      在Composition API中，我们可以使用watchEffect和wach来完成响应式数据的侦听；
        watchEffect:用于自动收集响应式数据的依赖
        watch：需要手动指定侦听的数据源；

      1.Watch的使用
        watch的API完全等同于组件watch选项的Property
          .watch需要侦听特定的数据源，并且执行其回调函数；
          .默认情况下它是惰性的，只有当被侦听的源发生变化时才会执行回调
        侦听多个数据源
          侦听器还可以使用数组同时侦听多个源
        watch的选项
          .如果我们希望侦听一个深层的侦听，那么依然需要设置deep为true：
            也可以传入immediate立即执行
      
     -->
  </div>
</template>

<script>
import { reactive, ref, watch } from 'vue';

  export default {
    setup() {
      // 1.定义数据
      const message = ref("Hello World")
      const info = reactive({
        name:'why',
        age:18,
        friend: {
          name:'kobe'
        }
      })

      // 2.侦听message数据变化
      watch(message, (newValue,oldValue) => {
        console.log(newValue,oldValue);
      })
      // 2.侦听info数据变化
      // watch(info, (newValue,oldValue) => {
      //   console.log(newValue,oldValue);
      // },{
      //   immediate:true //立即执行
      // })

      // 3.侦听reactive对象变化后，获取普通对象
      // ({...info})表示（）里面是一个对象，不是代码块
      // 通过...info拿到普通对象
      watch(() => ({...info}), (newValue, oldValue) => {
        console.log(newValue, oldValue);
      },{
        // 深度监听普通对象
        deep:true
      })
      return {
        message,
        info
      }
    }
  }
</script>

<style scoped>

</style>