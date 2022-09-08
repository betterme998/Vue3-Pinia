<template>
  <div class="about">
    <!-- 拿到路径跳转传递的参数 -->
    <h2>about：{{ $route.query }}</h2>
    <button @click="backBtnClick">返回</button>
  </div>
</template>

<script setup>
  // 拿到路由对象
  import { useRouter } from 'vue-router'
  const router = useRouter()
  function backBtnClick() {
    // 返回按钮
    // router.back()

    // 向前一步
    // router.forward()

    // 向后一步，传正数向前，任意值
    // go(1) -> router.forward()
    // go(-1) -> router.back()
    router.go(-1)
  }
</script>

<style scoped>

</style>