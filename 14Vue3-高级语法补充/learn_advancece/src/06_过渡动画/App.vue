<template>
  <div class="app">
    
    <button @click="addNumber">添加数组</button>
    <button @click="removeNumber">删除数组</button>
    <button @click="shuffleNumber">洗牌数组</button>
    
    <!-- 给列表加动画 transition-group -->
    <!-- 
      加上标签：tag ，内部元素就会被该标签包裹
      过渡模式不能使用，mode
      内部需要唯一的key
     -->
    <transition-group tag="div" name="why">
      <template v-for="item in nums" :key="item">
        <span>{{ item }}</span>
      </template>
    </transition-group>
  </div>
</template>

<script setup>
import { reactive,ref } from 'vue'
// 使用库打乱数组
import { shuffle } from 'underscore'
const nums = ref([0,1,2,3,4,5,6,7,8,9])

const addNumber = () => {
  nums.value.splice(randomIndex(),0,nums.value.length)
}
const removeNumber = () => {
  nums.value.splice(randomIndex(),1)
}
const shuffleNumber = () => {
  nums.value = shuffle(nums.value)
}

// 随机数
const randomIndex = () => {
  return Math.floor(Math.random() * nums.value.length)
}
</script>

<style scoped>
/* 行内元素不能使用translate没有效果 */
span{
  margin-left: 10px;
  /* 改成行内块元素 */
  display: inline-block;
}

.why-enter-from,
.why-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.why-enter-to,
.why-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.why-enter-active,
.why-leave-active {
  transition: all 3s ease;
}

/* 移动的节点动画 */
.why-move {
  transition: all 3s ease;
}

/* 当移除时动画还未结束，元素还在，占着位置，导致移除后，后面的元素里面过去 */
/* 解决办法 */
.why-leave-active{
  /* 离开动画执行，变成决定定位，吧位置空出来 */
  position: absolute;
}

</style>