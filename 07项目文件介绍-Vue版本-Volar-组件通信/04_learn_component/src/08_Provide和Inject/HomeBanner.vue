<template>
  <div class="banner">
    <!-- {{ message.value }} 需要手动解包，因为computed计算属性返回的是一个ref，是对原来的一个引用。但是正常使用computed会自动解包 -->
    <h2>HomeBanner： {{ name }} - {{ age }} - {{ message.value }}</h2>
  </div>
</template>

<script>
  export default {
    // 1.我们要使用祖先提供的数据要使用inject,一般是数组 
    inject: ["name", "age", "message"]
  }
</script>

<style scoped>

</style>