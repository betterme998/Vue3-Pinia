<template>
  <div class="app">
    <h2>当前计数: {{ counter }}</h2>
    <!-- 当子组件发生点击事件时，要修改的是父组件的数据 -->
    <!-- 1.通过@发出事件名称来监听子组件发出的自定义事件, -->
    <add-counter @add="addBtnClick"></add-counter>

    <!-- 2.自定义sub-conuter，并且监听内部的sub事件 -->
    <sub-counter @sub="subBtnClick"></sub-counter>
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
  },
  methods: {
    addBtnClick (count) {
      this.counter += count
    },
    subBtnClick (count) {
      this.counter -= count
    }
  }
}
</script>

<style>

</style>