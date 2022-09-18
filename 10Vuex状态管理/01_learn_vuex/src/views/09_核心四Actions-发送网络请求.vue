<template>
  <div class="home">
    <h2>Home Page</h2>
    <ul>
      <template v-for="item in $store.state.banner" :key="item.acm">
        <li>{{ item.title }}</li>
      </template>
    </ul>
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
  store.dispatch("fetchHomeMultidataAction").then(res => {
    console.log("home中的then被回调了",res);
  })
</script>

<style scoped>

</style>