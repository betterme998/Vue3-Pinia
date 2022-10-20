<template>
  <div class="app">
    <div>
      <button @click="isShow = !isShow">切换</button>
    </div>
    <!-- 动态组件的动画 -->
    <transition mode="out-in" appear>
      <component :is="isShow? 'home':'about'"></component>
    </transition>
  </div>
</template>

<script>
export default {
  components:{
    Home,
    About
  }
}
</script>

<script setup>
import { ref } from "vue";
import Home from './pages/Home.vue'
import About from './pages/About.vue'

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

</style>