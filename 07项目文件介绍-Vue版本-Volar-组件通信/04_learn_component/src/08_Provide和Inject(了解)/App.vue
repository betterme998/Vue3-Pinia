<!-- 现在App.vue中使用了home组件，home.vue中使用了homebanner组件
  我们要App提供数据给homebanner使用，究竟如何实现？ -->
<template>
  <div class="app">
    <home></home>
    <h2>App: {{ message }}</h2>
    <!-- 当我们修改message时，子组件数据并不会动态改变，这时可通过 computed 计算属性 -->
    <button @click="message = 'hello world'">修改message</button>
  </div>
</template>

<script>
  // 引入computed，解决子组件不会更新数据
  import { computed } from 'vue'
  import Home from './Home.vue'
  export default {
    components:{
      Home
    },
    data() {
      return {
        message: "Hello App"
      }
    },
    // 1.提供给深层子组件数据，使用provide来提供  vue2 用的
    // 跳到homeBanner
    // provide当中不会把数据写死，先获取数据，然后存到data当中，再把数据给provide。如何实现？
    // provide: {
    //   name:'why',
    //   age:18
    // }

    // 一般都写成函数
    // 2.provide和inject函数的写法
    // 为了获取data可能会想到使用this来获取
    // 但是这里this指向最外层的export，是不对的，所以provide要写成函数，这样provide本身有作用域，this指向的就是provide

    provide() {
      return {
      name:'why',
      age:18,
      // 使用计算属性 传一个箭头函数因为this要指向provide
      // 当值发生改变会从新计算，把值赋给message，这就响应式了
      message:computed(() =>{
        return this.message
      })
      }
    }

  }
</script>

<style scoped>

</style>