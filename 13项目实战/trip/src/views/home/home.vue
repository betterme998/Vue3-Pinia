<template>
  <div class="home">
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
  </div>
</template>

<script setup>
  import { ref } from "vue"

  import HomeNavBar from './cpns/home-nav-bar.vue'
  import homeSearchBox from './cpns/home-search-box.vue';
  import HomeCategories from './cpns/home-categories.vue'

  import hyRequest from "@/service/request/index"
  import useHomeStore from "@/stores/modules/home";

  // 发送网络请求
  const homeStore = useHomeStore()
  homeStore.fetchHotSuggestData()
  homeStore.fetchHomeCategoriesData()

</script>

<style lang="less" scoped>
.banner {
  img {
    width:100%
  }
}


</style>