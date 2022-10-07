<template>
  <div class="swipe" v-if="swipeData">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData">
        <van-swipe-item class="item">
          <img :src="item.url" alt="">
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<script setup>
// 引入详情页store构造函数
import useDetailStore from "@/stores/modules/detail.js" 
import { storeToRefs } from "pinia"

const detailStore = useDetailStore()
// 拿到完整数据
const { swipeData } = storeToRefs(detailStore)
</script>

<style lang="less" scoped>
.swipe {
  .swipe-list{
    .item {
      img {
        width: 100%;
      }
    }
  }
}
</style>