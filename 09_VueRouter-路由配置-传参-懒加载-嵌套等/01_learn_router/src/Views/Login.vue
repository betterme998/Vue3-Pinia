<template>
  <div class="Login">
    <h2>Login页面</h2>
    <button @click="loginClick">登录</button>
  </div>
</template>

<script setup>

  import { useRouter } from 'vue-router' 

  const router = useRouter()
  function loginClick() {
    console.log("点击登录");
    // 向服务器发送请求，服务器会返回token,保存到本地
    localStorage.setItem("token", "betterme")

      // 登录成功跳转订单页面
    router.push("/order")
  }
</script>

<style scoped>

</style>