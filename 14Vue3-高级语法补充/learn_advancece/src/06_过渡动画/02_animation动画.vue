<template>
  <div class="app">
    <!-- 点击切换和隐藏，添加动画 -->
    <!-- 
      
     -->
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>

    <!-- 内置组件 transition  在合适的时机加上类-->
    <transition>
      <h2 v-if="isShow">
        要是有些事我没说，地坛，你别以为是我忘了，我什么也没忘，但是有些事只适合收藏。
        不能说，也不能想，却又不能忘。它们不能变成语言，它们无法变成语言，一旦变成语言
        就不再是它们了。它们是一片朦胧的温馨与寂寥，是一片成熟的希望与绝望，它们的领地
        只有两处：心与坟墓。比如说邮票，有些是用于寄信的，有些仅仅是为了收藏。
      </h2>
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

/* animation 动画 */
.v-enter-active {
  animation: whyAnim 2s ease;
}
.v-leave-active {
  /* animation: whyLeave 2s ease; 左边离开*/ 
  /* 反转动画 */
  animation: whyAnim 2s reverse;
}

/* 序列帧 */
@keyframes whyAnim {
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    opacity: 1;
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