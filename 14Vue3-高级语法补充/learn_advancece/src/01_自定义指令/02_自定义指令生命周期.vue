<template>
  <div class="app">
    <button @click="counter++">+1</button>
    <button @click="showTitle = false">隐藏</button>
    <h2 v-if="showTitle" class="title" v-why>当前计数：{{ counter }}</h2>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const counter = ref(0)
const showTitle = ref(true)
// 自定义指令，必须v开头
const vWhy = {
  created() {
    console.log("created");
  },
  beforeMount() {
    console.log("beforeMount");
  },
  mounted() {
    console.log("mounted");
  },
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  updated() {
    console.log("beforMount");
  },
  beforeUnmount() {
    console.log("beforeUnmount");
  },
  unmounted() {
    console.log("unmounted");
  }

}
</script>

<style scoped>

</style>