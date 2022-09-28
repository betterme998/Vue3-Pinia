<template>
  <div class="search-box">
    <!-- 1.位置信息 -->
    <div class="location">
      <!-- 通过store拿到选中后的数据 -->
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 2.日期范围 -->
    <div class="section date-range">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">9月28</span>
        </div>
        <div class="stay">共一晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">9月29</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import useCityStore from '@/stores/modules/city.js';
  import { storeToRefs } from 'pinia';
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

  // 当前城市
  const cityClick = () => {
    // 点击跳转到选择位置页面
    router.push("/city")
  }

  // 选之后在store中拿到数据
  const cityStore = useCityStore()
  const { currentCity } = storeToRefs(cityStore)
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

.section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 20px;
  color: #999;
  .start {
    flex: 1;
    display: flex;
    height:44px;
    align-items: center;
  }

  .end {
    min-width: 30%;
    padding-left: 20px;
  }

  .date {
    display: flex;
    flex-direction: column;
    .tip {
      font-size: 12px;
      color: #999;
    }
    .time {
      margin-top: 3px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
    }
  }

}

.date-range {
  height: 44px;
  
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}


</style>