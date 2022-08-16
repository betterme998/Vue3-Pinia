<template>
  <div class="app">
    <h2>当前计数: {{ counter }}</h2>
    <!-- 当子组件发生点击事件时，要修改的是父组件的数据 -->
    <add-counter></add-counter>
    <sub-counter></sub-counter>
  </div>
</template>

<script>
import AddCounter from "./AddCounter.vue"
import SubCounter from "./SubCounter.vue"
export default {
  data() {
    return {
      counter:0
    }
  },
  components: {
    AddCounter,
    SubCounter
  }
}
</script>

<style>

</style>