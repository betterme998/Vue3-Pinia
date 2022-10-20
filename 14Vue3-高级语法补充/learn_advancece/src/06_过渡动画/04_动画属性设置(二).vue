<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- 内置组件 transition  在合适的时机加上类-->
    <!-- 两个元素之间切换的时候存在问题：一个在显示，一个在消失。两个动画一起，看起来不舒服 -->
    <!-- 如果我们不希望同时执行进入和离开动画，那么我们需要设置transition的过渡模式 mode
      .in-out：新元素先进行过渡，完成之后当前元素过渡离开；
      .out-in：当前元素先进行过滤，完成之后新元素过渡进入
    -->
    <transition mode="in-out">
      <h2 v-if="isShow">哈哈哈</h2>
      <h2 v-else>呵呵呵</h2>
    </transition>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isShow = ref(true)
</script>

<style scoped>
h2 {
  display: inline-block;
}

/* transition 动画 */
.v-leave-to,
.v-enter-from {
  opacity: 0;
} 

.v-leave-from,
.v-enter-to {
  opacity: 1;
}
/* animation 动画 */

.v-enter-active {
  animation: whyAnim 2s ease;
  transition: opacity 2s ease;
}
.v-leave-active {
  /* animation: whyLeave 2s ease;  */
  /* 反转动画 */
  animation: whyAnim 2s ease reverse;
  transition: opacity 2s ease;

}

/* 序列帧 */
@keyframes whyAnim {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes whyLeave {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-500px);
  }
}
</style>