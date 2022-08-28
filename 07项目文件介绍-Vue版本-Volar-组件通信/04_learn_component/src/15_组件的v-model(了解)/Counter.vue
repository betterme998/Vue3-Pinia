<template>
  <div>
    <h2>Counter: {{ modelValue }}</h2>
    <button @click="changeVounter">修改message</button>
  </div>
</template>

<script>
  export default {
    props: {
      modelValue: {
        type:Number,
        default:0
      }
    },
    emits:["update:modelValue"],
    methods: {
      changeVounter() {
        // 这样写能被v-model监听
        this.$emit("update:modelValue",1000)
      }
    }
  }
</script>

<style scoped>

</style>