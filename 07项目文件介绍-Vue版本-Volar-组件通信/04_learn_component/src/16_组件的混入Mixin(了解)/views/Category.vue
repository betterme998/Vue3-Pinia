<template>
  <div>
    <h2>Category组件</h2>
  </div>
</template>

<script>
  import messageMixin from "../mixins/message-mixin"
  export default {
    // 混入下面的代码
    // data() {
    //   return {
    //     message: "Hello World"
    //   }
    // },
    // created() {
    //   console.log("message:", this.message);
    // }
    // 2.使用mixins
    mixins: [messageMixin]
  }
</script>

<style scoped>

</style>