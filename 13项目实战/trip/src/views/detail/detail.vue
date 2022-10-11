<template>
  <div class="top-page">
    <!-- 导航栏 -->
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
  </div>
  <!-- 房屋详情信息 -->
  <div class="main">
    <detail-swipe/>
    <detail-infos/>
    <detail-facility/>
    <detail-landlord/>
    <detail-comment/>
    <detail-notice/>
  </div>
  
  </div>
</template>

<script setup>
// 导入当前活跃的router
import { useRoute, useRouter } from 'vue-router'
// 引入详情页store构造函数
import useDetailStore from "@/stores/modules/detail.js" 

import DetailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"

const route = useRoute()
const router = useRouter()

// 发送网络请求
const detailStore = useDetailStore()
detailStore.fetchDetailData(route.params.id)




// 监听返回按钮的点击
const onClickLeft = () => {
  router.back()
}
</script>

<style lang="less" scoped>

</style>