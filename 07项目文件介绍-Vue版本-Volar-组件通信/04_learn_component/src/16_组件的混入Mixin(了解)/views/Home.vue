<template>
  <div>
    <h2>Home组件</h2>
  </div>
</template>

<script>
  import messageMixin from "../mixins/message-mixin"
  export default {
    // data() {
    //   return {
    //     message: "Hello World"
    //   }
    // },
    // created() {
    //   console.log("message:", this.message);
    // }
    // 2.使用mixins，用混入不影响其他api正常使用
    mixins: [messageMixin]
  }
</script>

<style scoped>

</style>