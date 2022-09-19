<template>
  <div class="home">
    <h2>Home Page</h2>
    <h2>Counter模块的counter： {{ $store.state.counter.count }}</h2>
    <!-- 在counter模块中加上 namespaced:true, 命名空间 -->
    <!-- 当counter module中使用namespced:true, 命名空间时，可以避免和其他module中action，getter，mutation函数同名问题 -->
    <!-- 但取值发生了变化 -->
    <h2>Counter模块的doubleCounter： {{ $store.getters["counter/doubleCount"] }}</h2>
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
    store.dispatch("counter/incrementCountAction")
  }
</script>

<style scoped>

</style>