<template>
  <div class="banner">
    <button @click="bannerBrnClick">banner按钮</button>
  </div>
</template>

<script>
// 1.导入创建的事件总线
// 这里导入不要加大括号是因为导出时是 export defalut，有一个defalut
  import eventBus from './utils/event-bus'
  export default {
    methods: {
      bannerBrnClick() {
        console.log('banner按钮');
        // 2.拿到eventBus发送自定义事件
        // 之后谁想监听谁监听，这里跳到app.vue它监听
        eventBus.emit("whyEvent", "why", 18, 1.88)
      }
    }
  }
</script>

<style scoped>

</style>