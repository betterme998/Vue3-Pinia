<template>
  <div class="home">
    <h2>Home Page</h2>
    <!-- 1.拿到module模块下的state时，是需要state.moduleName.xxx -->
    <h2>Counter模块的counter： {{ $store.state.counter.count }}</h2>
    <!-- 模块中getters,actions,mutation 默认情况下会合并到store根当中。即使定义在模块中，在拿的时候依然通过 $store.getters.doubleCounter -->
    <h2>Counter模块的doubleCounter： {{ $store.getters.doubleCount }}</h2>
    <hr>
    <button @click="incrementCount">count模块+1</button>
  </div>

  
</template>

<script>

  // options api 
  export default {
    methods: {
     
    }
  }
</script>


<script setup>
  // 数据放在vuex中，也要在vuex中发送网络请求
  // 告诉vuex发送网络请求
  import { useStore } from 'vuex'

  const store = useStore()
  // 告诉vuex发送网络请求
  // 如果想知道什么时候结束网络请求，那么action要返回一个promise，异步函数一定返回promise，如果不是异步函数，则要手动返回，再通过then方法来
  // 派发事件时，默认不需要跟模块名称
  // 提交mutation时，默认也是不需要跟模块名称，即使他们抽取到模块当中，也是直接提交。因为他们会合并到store中
  store.dispatch("fetchHomeMultidataAction").then(res => {
    console.log("home中的then被回调了",res);
  })

  function incrementCount() {
    // 分发不用跟模块名称，即便抽取在模块中，因为会合并到store
    store.dispatch("incrementCount")
  }
</script>

<style scoped>

</style>