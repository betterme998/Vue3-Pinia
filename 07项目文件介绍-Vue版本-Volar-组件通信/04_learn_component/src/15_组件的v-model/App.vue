<template>
  <div class="app">
    <!-- 1.input v-model -->
    <!-- <input v-model="message"> -->
    <!-- 相当于下面 -->
    <!-- <input type="text" :value="message" @input="message = $event.target.value"> -->

    <!-- 2.组件的v-model -->
    <counter v-model="appCounter"></counter>
    <!-- 等同于下面 -->
    <!-- <counter :modelValue = "appCounter" @update:modelValue="appCounter = $event"></counter> -->
  </div>
</template>

<script>
  import Counter from './Counter.vue'
  export default {
    data() {
      return {
        appCounter:100
      }
    },
    components: {
      Counter
    }
  }
</script>

<style scoped>

</style>