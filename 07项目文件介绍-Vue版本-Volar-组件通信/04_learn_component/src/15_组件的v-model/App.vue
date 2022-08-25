<template>
  <div class="app">
    <!-- 1.input v-model -->
    <!-- <input v-model="message"> -->
    <!-- 相当于下面 -->
    <!-- <input type="text" :value="message" @input="message = $event.target.value"> -->

    <!-- 2.组件的v-model ：默认的modelValue -->
    <counter v-model="appCounter"></counter>
    <!-- 等同于下面 -->
    <!-- <counter :modelValue = "appCounter" @update:modelValue="appCounter = $event"></counter> -->

    <!-- 3.组件的v-model ：自定义的名称：counter -->
    <!-- 一个组件使用多个v-model，要自定义名字 默认的是modelValue -->
    <counter2 v-model:counter="appCounter" v-model:why="appwhy"></counter2>
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  import Counter2 from './Counter2.vue'
  export default {
    data() {
      return {
        appCounter:100,
        appwhy:'coderwhy'
      }
    },
    components: {
    Counter,
    Counter2
}
  }
</script>

<style scoped>

</style>