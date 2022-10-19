<template>
  <div class="app">
    <!-- 点击切换和隐藏，添加动画 -->
    <!-- 
      我们点击后需要动画，就要添加类，手动添加比较繁琐
      vue为我们添加了内置组件<transition>
     -->
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- 内置组件 transition  在合适的时机加上类-->
    <transition>
      <h2 v-if="isShow">哈哈哈</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(false)
</script>

<style scoped>
h2 {
  display: inline-block;
}

/* 离开结束 */
.v-leave-to,
/* 进入开始 */
.v-enter-from {
  opacity: 0;
  transform: scale(0.6);
}

/* 离开开始 */
.v-leave-from,
/* 进入结束 */
.v-enter-to {
  opacity: 1;
  transform: scale(1);
}



.v-enter-active,
.v-leave-active{
  transition: all 2s ease;
}
</style>