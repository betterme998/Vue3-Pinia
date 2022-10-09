<template>
  <div class="infos">
    <h2>infos</h2>
  </div>
</template>

<script setup>
// 引入详情页store构造函数
import useDetailStore from "@/stores/modules/detail"  
import { storeToRefs } from "pinia"

const detailStore = useDetailStore()
const { topInfos } = storeToRefs(detailStore)
console.log(topInfos.value);
</script>

<style lang="less" scoped>

</style>