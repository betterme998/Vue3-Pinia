<template>
  <div class="home">
    <h2>Home计数器：{{ $store.state.counter }}</h2>
    <h2>optionAPI下computed计数器：{{ storeCounter }}</h2>
    <h2>Setup计数器：{{ counter }}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  // options api 下使用store
  export default {
    computed: {
      storeCounter() {
        return this.$store.state.counter
      }
    }
  }
</script>


<script setup>
  import { toRefs } from 'vue'
  import { useStore } from 'vuex'
  const store = useStore()
  // setup下拿到store下的数据,但这不是响应式的，相当于拿到值赋值给普通对象，会丢失响应式，和解构reactive一样，
  // 希望这个值是响应式：使用toRefs
  // 使用toRefs转化成ref对象
  const { counter } = toRefs(store.state)
  function increment() {
    // 修改store数据，要通过mutations
    store.commit("increment")
  }
</script>

<style scoped>

</style>