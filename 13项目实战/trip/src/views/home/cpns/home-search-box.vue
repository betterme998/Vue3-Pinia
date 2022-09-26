<template>
  <div class="search-box">
    <!-- 定位 -->
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  const router = useRouter()
  // 位置/城市
  // 位置
  const positionClick = () => {
    // 获取位置方法，传入一个成功的回调，和失败的回调，可选的option
    // 拿到经纬度后发送给服务器，服务器返回对应城市的名字，我们再展示
    navigator.geolocation.getCurrentPosition(res => {
      console.log("获取位置成功：",res);
    },err => {
      console.log("获取位置失败：",err);
    },{
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  )
  }

  // 城市
  const cityClick = () => {
    // 点击跳转到选择位置页面
    router.push("/city")
  }
</script>

<style lang="less" scoped>
.location {
  display: flex;
  align-items: center;
  height: 44px;
  padding: 0 20px;
  .city {
    flex: 1;
    color:#333;
    font-size:15px;
  }
  .position {
    width: 74px;
    display: flex;
    align-items: center;

    .text {
      position: relative;
      top: 1px;
      color:#666;
      font-size:12px;
    }

    img {
      margin-left: 5px;
      width: 18px;
      height: 18px;
    }
  }
}
</style>