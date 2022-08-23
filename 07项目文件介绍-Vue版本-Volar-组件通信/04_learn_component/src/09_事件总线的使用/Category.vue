<template>
  <div>
    <h2>Category</h2>
  </div>
</template>

<script>
  // 导入事件总线
  // 当组件销毁时要移除事件总线
  import eventBus from './utils/event-bus'
  export default {
    created() {
      // 在Category组件中监听 whyEvent
      eventBus.on("whyEvent", this.whyEventHandler)
    },
    unmounted() {
      console.log('移除');
      // 组件销毁时，移除他的事件总线
      // 传递事件名称，和移除的函数所以函数要写在methods中
      eventBus.off("whyEvent",this.whyEventHandler)
    },
    methods: {
      whyEventHandler() {
        console.log('whyEvent在category中监听');
      }
    }
  }
</script>

<style scoped>

</style>