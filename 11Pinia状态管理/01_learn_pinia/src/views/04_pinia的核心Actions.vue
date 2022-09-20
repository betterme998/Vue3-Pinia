<template>
  <div class="home">
    <h2>Home View</h2>
    <h2>doubleCount:{{ counterStore.count }}</h2>
    <button @click="changeState">修改state</button>
    <hr>
    <!-- 展示网络请求数据 -->
    <h2>轮播数据</h2>
    <ul>
      <template v-for="item in homeStore.banners">
        <li>{{ item.title }}</li>
      </template>
    </ul>
  </div>
</template>

<script setup>
  // 导入counter的store返回函数
  import useCounter from '@/stores/counter';
  import useHome from "@/stores/home"
  // 拿到counter的store
  const counterStore = useCounter()

  function changeState() {
    // 可以直接调用actions中的方法
    // counterStore.increment()

    // 可传入参数
    counterStore.incrementNum(10)
  }

  //拿到home的store
  const homeStore = useHome() 
  // 当返回的是一个promise时，我们可以监听何时完成
  homeStore.fetchHomeMultidata().then(res => {
    console.log("fetchHomeMultidata的action已经完成了: ",res)
  })
</script>

<style scoped>

</style>