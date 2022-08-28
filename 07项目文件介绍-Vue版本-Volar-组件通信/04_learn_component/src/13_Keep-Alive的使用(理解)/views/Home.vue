<template>
  <div>
    <h2>Home组件</h2>
    <!-- 来回切换，会重复创建和销毁，性能你不高，这时就可以用keep-alive -->
    <!-- 当我们点击加按钮后，再切换。回来数据就消失了，不会保存原来的状态。 这时也要用keep-alive -->
    <h2>当前计数：{{counter}}</h2>
    <button @click="counter++">+1</button>
  </div>
</template>

<script>
export default {
  name:"home",
  data() {
    return {
      counter: 0
    }
  },
  // 进入时被创建
  created() {
    console.log("home created");
  },
  unmounted() {
    // 当组件被切换时，会被销毁
    console.log("home unmounted");
  },

  // 对于保持keep-alive组件，监听有没有进行切换
  // 专门提供了两个生命周期： activated 和 deactivated
  // keep-alive组件进入活跃状态
  activated() {
    console.log('activated');
  },

  // keep-alive组件进入不活跃状态
  deactivated() {
    console.log('deactivated');
  }
}
</script>

<style>

</style>