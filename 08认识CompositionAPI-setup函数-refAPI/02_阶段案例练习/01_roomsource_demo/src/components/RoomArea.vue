<template>
  <div class="room-area">
    <!-- 1.区域header -->
    <area-header :title="areaData.title" :subtitle="areaData.subtitle"></area-header>

    <!-- 2.房间列表 -->
    <div class="room-list">
      <!-- 使用v-if，v-for一般使用template -->
      <template v-for="item in areaData.list" :key="item.id">
        <room-item :item-data="item"></room-item>
      </template>
    </div>
  </div>
</template>

<script setup>
  // 导入header组件并传值
  import AreaHeader from './AreaHeader.vue'

  // 导入roomitem组件
  import RoomItem from './RoomItem.vue'

  defineProps({
    areaData: {
      type:Object,
      default: () => ({})
    }
  })
</script>

<style lang="less">
.room-list {
      display: flex;
      flex-wrap: wrap;
      margin: 20px -8px;

      
    }
</style>