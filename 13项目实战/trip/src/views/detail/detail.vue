<template>
  <div class="detail top-page" ref="detailRef">
  <!-- tabbar -->
  <tab-control
    v-if="showTabControl"
    class="tabs"
    :titles="names"
    ref="controlRef"
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
  <div class="main" v-memo="[swipeData]">
    <detail-swipe/>
    <detail-infos name="描述" :ref="getSectionRef"/>
    <detail-facility name="设施" :ref="getSectionRef"/>
    <detail-landlord name="房东" :ref="getSectionRef"/>
    <detail-comment name="评论" :ref="getSectionRef"/>
    <detail-notice name="须知" :ref="getSectionRef"/>
    <detail-map name="地图" :ref="getSectionRef"/>
    <detail-intro/>
  </div>
  <div class="footer">
    <img src="@/assets/img/detail/icon_ensure.png" alt="">
    <div class="text">旅途，永无止境</div>
  </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue"
// 导入当前活跃的router
import { useRoute, useRouter } from 'vue-router'
// 引入详情页store构造函数
import useDetailStore from "@/stores/modules/detail.js" 
import { storeToRefs } from "pinia"

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
// 用于v-memo 当数据变化是才发送改变
const { swipeData } = storeToRefs(detailStore)


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
const controlRef = ref()

// 动态绑定ref 绑定函数
const sectionEls = ref({})
// 拿到所有keys，绑定到tab
const names = computed(() => {
  return Object.keys(sectionEls.value)
})
// 获得所有绑定了函数的ref
const getSectionRef  = (value) => {
  // 绑定的ref 函数再卸载的时候也会执行getSectionRef（如点击返回），但是卸载后给我们的值为null，为null时取$el会报错
  if(!value) return
    // 获取属性
  const name = value.$el.getAttribute("name")
  sectionEls.value[name] = value.$el
}

const tabClick = (index) => {
  // 点击滚动到对应的位置
  // 1.拿到key
  const key = Object.keys(sectionEls.value)[index]
  // 2.拿元素
  const el = sectionEls.value[key]
  let instance = el.offsetTop
  if (index !== 0) {
    instance = instance - controlRef.value.$el.clientHeight
  }
  detailRef.value.scrollTo({
    top:instance,//滚动的位置,拿到组件根元素$el
    behavior: "smooth" //平滑的滚动
  })
}

// 页面滚动，滚动时匹配对应的tabControol的index
watch(scrollTop, (newValue) => {
  // 拿到所有主题的sctollTop进行遍历
})
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