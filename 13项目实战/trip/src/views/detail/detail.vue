<template>
  <div class="detail top-page" ref="detailRef">
  <!-- tabbar -->
  <tab-control
    v-if="showTabControl"
    class="tabs"
    :titles="['abc','abc','ssd','sef', 'wes']"
    @tabItemClick="tabClick"
  />
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
    <detail-map/>
    <detail-intro/>
  </div>
  <div class="footer">
    <img src="@/assets/img/detail/icon_ensure.png" alt="">
    <div class="text">旅途，永无止境</div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue"
// 导入当前活跃的router
import { useRoute, useRouter } from 'vue-router'
// 引入详情页store构造函数
import useDetailStore from "@/stores/modules/detail.js" 

import TabControl from "@/components/tab-control/tab-control.vue"
import DetailSwipe from "./cpns/detail_01-swipe.vue"
import DetailInfos from "./cpns/detail_02-infos.vue"
import DetailFacility from "./cpns/detail_03-facility.vue"
import DetailLandlord from "./cpns/detail_04-landlord.vue"
import DetailComment from "./cpns/detail_05-comment.vue"
import DetailNotice from "./cpns/detail_06-notice.vue"
import DetailMap from "./cpns/detail_07-map.vue"
import DetailIntro from "./cpns/detail_08-intro.vue"
import useScroll from '@/hooks/useScroll'

const route = useRoute()
const router = useRouter()


// 发送网络请求
const detailStore = useDetailStore()
detailStore.fetchDetailData(route.params.id)


// 监听返回按钮的点击
const onClickLeft = () => {
  router.back()
}

// tabbar 的相关操作
// 滚动的两种情况一，window窗口的滚动，二，元素的滚动 （设置了overflow-y：auto；height：100vh）
// 这里是元素的滚动
// 封装好的判断是否滑到底部hooks函数useScroll传入对应元素的ref
const detailRef = ref()
const { scrollTop } = useScroll(detailRef)
const showTabControl = computed(() => {
  return scrollTop.value > 300
})

// 点击tab
const tabClick = (index) => {
  console.log("---33-")
  // 点击滚动到对应的位置
  // 1.拿到滚动的元素
  detailRef.value.scrollTop({
    top:index (index+1) * 200,//滚动的位置
    behavior: "smooth" //平滑的滚动
  })

}
</script>

<style lang="less" scoped>
.tabs {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>