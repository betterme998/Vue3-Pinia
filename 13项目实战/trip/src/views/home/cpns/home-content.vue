<template>
  <div class="content">
      <h2 class="title">热门推荐</h2>
      <div class="list">
        <template v-for="(item, index) in houselist" :key="item.data.houseId">
          <HouseItemV9 v-if="item.discoveryContentType === 9" :item-data = "item.data"/>
          <HouseItemV3 v-else-if="item.discoveryContentType === 3" :item-data = "item.data"/>
        </template>
      </div>
    </div>
</template>

<script setup>
// 导入展示不同状态的数组
import HouseItemV9 from "@/components/house-item-v9/house-item-v9.vue"
import HouseItemV3 from "@/components/house-item-v3/house-item-v3.vue"
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

// 拿到home页面的store
const homeStore = useHomeStore()
const { houselist } = storeToRefs(homeStore) //拿到推荐数据
</script>

<style lang="less" scoped>

.content {
  padding: 10px 8px;
  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>