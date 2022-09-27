<template>
  <div class="city-group">
    <!-- 通过vant ui -->
    <van-index-bar>
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <van-cell :title="city.cityName" />
        </template>
      </template>
    </van-index-bar>
    
    <!-- 自己写 -->
    <!-- 第一次没有值，因为currentGroup开始为undefined，取值就是undefined.cities会报错，所以加上？.表示有值再取值 -->
    <!-- <template v-for="(group, index) in groupData.cities" :key="index">
      <h2 class="title">标题：{{ group.group }}</h2>
      <div class="list">
        <template v-for="(city, indey) in group.cities" :key="indey">
          <div class="city">{{ city.cityName }}</div>
        </template>
      </div>
    </template> -->
  </div>
</template>

<script setup>

defineProps({
  groupData: {
    type:Object,
    default: () => ({})
  }
})

</script>

<style lang="less" scoped>

</style>