<template>
  <div class="intro">
    <h2 class="title">{{ defineProps?.title }}</h2>
    <div class="content">
      {{ defineProps?.introduction }}
    </div>
  </div>
</template>

<script setup name="home">
// 导入详情页store构造函数
import useDetailStore from "@/stores/modules/detail"
import { storeToRefs } from "pinia"

const detailStore = useDetailStore()
const { defineProps } = storeToRefs(detailStore)
</script>

<style lang="less" scoped>
.intro {
  padding: 16px 12px;
  border-top: 5px solid #f2f3f4;

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>