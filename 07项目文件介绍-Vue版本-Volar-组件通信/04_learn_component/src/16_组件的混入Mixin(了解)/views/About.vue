<template>
  <div>
    <h2>About组件</h2>
  </div>
</template>

<script>
  // 1.导入需要混入的对象
  import messageMixin from "../mixins/message-mixin"
  export default {
    // 2.使用mixins，会自动合并组件自身的api
    mixins: [messageMixin]
  }
</script>

<style scoped>

</style>