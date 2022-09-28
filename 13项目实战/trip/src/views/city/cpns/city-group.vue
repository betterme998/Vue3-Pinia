<template>
  <div class="city-group">
    <!-- 通过vant ui -->
    <!-- 抽离数据索引，并替换再加上* -->
    <van-index-bar :index-list="indexList">
      <!-- 热门 -->
      <van-index-anchor index="热门" />
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities">
          <!-- 监听城市点击 -->
          <div class="city" @click="cityClick(city)">{{city.cityName}}</div>
        </template>
      </div>
      
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group" />
        <template v-for="(city, indey) in group.cities" :key="indey">
          <!-- 监听城市点击 -->
          <van-cell :title="city.cityName" @click="cityClick(city)"/>
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

import { computed } from 'vue'
import { useRouter } from 'vue-router';
import useCityStore from '@/stores/modules/city.js';

 const props = defineProps({
  groupData: {
    type:Object,
    default: () => ({})
  }
})

// 处理数据中的索引
const indexList = computed(() => {
  const list =  props.groupData.cities.map(item => item.group)
  list.unshift("#")
  return list
})

// 监听城市的点击
const router = useRouter() //路由
const cityStore = useCityStore() //city的store
const cityClick = (city) => {

  // 选中当前城市
  // 当选中一个城市后，很多页面可能会需要这个值，所以可以使用store来保存
  cityStore.currentCity = city
  // 返回上一级，这个页面也可能是别的页面跳转过来的，所以不一定是首页
  router.back()
}

</script>

<style lang="less" scoped>
  .list {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    padding: 10px;
    padding-right: 25px;
    .city {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12px;
      color: #000;
      text-align: center;
      line-height: 28px;
      background-color: #fff4ec;
      margin: 6px 0;
    }
  }
</style>