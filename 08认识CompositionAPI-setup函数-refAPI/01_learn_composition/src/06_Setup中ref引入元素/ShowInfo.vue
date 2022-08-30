<template>
  <div>ShowInfo</div>
</template>

<script>
  export default {
    // 不要单独用methods
    // methods: {
    //   showInfoFoo() {
    //     console.log("showInfo foo function");
    //   }
    // }
    setup() {
      // 在setup中定义函数
      function showInfoFoo() {
        console.log("showInfo foo function");
      }
      return {
        showInfoFoo
      }
    }
  }
</script>

<style scoped>

</style>