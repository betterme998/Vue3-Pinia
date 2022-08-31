<template>
  <div>Showinfo:{{ name }} - {{ age }} - {{ height }}</div>
</template>

<script>
  import { inject } from 'vue';
  export default {
    setup() {
      const name = inject("name")
      const age = inject("age")
      // 当没有传值时可以定义默认值
      const height = inject("height", 1.88)
      return {
        name,
        age,
        height
      }
    }
  }
</script>

<style scoped>

</style>