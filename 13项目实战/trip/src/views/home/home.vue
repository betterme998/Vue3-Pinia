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
    
  </div>
</template>

<script setup>
  import { ref } from "vue"

  import HomeNavBar from './cpns/home-nav-bar.vue'
  import homeSearchBox from './cpns/home-search-box.vue';

  import hyRequest from "@/service/request/index"
import useHomeStore from "@/stores/modules/home";

  // 发送网络请求
  const homeStore = useHomeStore()
  homeStore.fetchHotSuggestData()
  // 1.热门建议:不推荐在home中发送网络请求，推荐在store中发送
  // const hotSuggests = ref([])
  // hyRequest.get({
  //   url: "/home/hotSuggests"
  // }).then(res => {
  //   console.log(res.data);
  //   hotSuggests.value = res.data
  // })
</script>

<style lang="less" scoped>
.banner {
  img {
    width:100%
  }
}


</style>