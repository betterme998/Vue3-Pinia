<template>
  <div class="home" ref="homeRef">
    <!-- nav-bar -->
    <home-nav-bar/>
    <!-- 图片 -->
    <div class="banner">
      <img src="@/assets/img/home/banner.webp"/>
    </div>
    <!-- 定位 -->
    <home-search-box :hot-suggests="hotSuggests" />

    <!-- 分类 -->
    <home-categories/>

    <!-- 搜索框 -->
    <div class="search-bar" v-if="isShowSearchBar">
      <SearchBar/>
    </div>

    <!-- 推荐 -->
    <home-content/>
  </div>
</template>

<script>
// 定义name，配合keep-alive使用
  export default { name:"home"}
</script>
<script setup>
  import { ref, watch, computed, onActivated } from "vue"

  import HomeNavBar from './cpns/home-nav-bar.vue';
  import homeSearchBox from './cpns/home-search-box.vue';
  import HomeCategories from './cpns/home-categories.vue';
  import HomeContent from './cpns/home-content.vue'
  import SearchBar from '@/components/search-bar/search-bar.vue'

  // 导入监听滚动到底部请求数据hooks
  import useScroll from '@/hooks/useScroll'

  import hyRequest from "@/service/request/index"
  import useHomeStore from "@/stores/modules/home";

  // 发送网络请求
  const homeStore = useHomeStore()
  homeStore.fetchHotSuggestData()
  homeStore.fetchHomeCategoriesData()

  homeStore.fetchHouselistData()

  // 模拟加载更多
  const moreBtnClick = () => {
    homeStore.fetchHouselistData()
  }

  // 监听滚动底部请求数据
  const homeRef = ref()
  const { isReachBottom, scrollTop } = useScroll(homeRef)
  // 使用watch来监听是否到达底部
  watch(isReachBottom, (newValue) => {
    if (newValue) {
      // 达到底部请求数据
      homeStore.fetchHouselistData().then(() => {
        // 修改是否到达底部
        isReachBottom.value = false
      })
    }
  })

  // 搜索框显示的控制

  // 定义的可响应式数据，依赖另外一个可响应式的数据，那么可以使用计算属性computed
  const isShowSearchBar = computed(() => {
    return scrollTop.value >= 360
  })
  

  // 跳转回home时，保留原来的位置
  onActivated(() => {
    homeRef.value?.scrollTo({
      top:scrollTop.value
    })
  })


</script>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
  box-sizing: border-box;
  height:100vh;
  overflow-y: auto;
}

.banner {
  img {
    width:100%
  }
}

.search-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 45px;
  padding: 16px 16px 10px;
  background-color: #fff;
  z-index: 9;
}


</style>