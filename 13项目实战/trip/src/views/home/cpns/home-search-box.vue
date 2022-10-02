<template>
  <div class="search-box">
    <!-- 1.位置信息 -->
    <div class="location bottom-gray-line">
      <!-- 通过store拿到选中后的数据 -->
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>

    <!-- 2.日期范围 -->
    <div class="section date-range bottom-gray-line" @click="showCalendar = true">
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{stayCount}}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <!-- 选择具体时间 Vant 组件库 -->
    <van-calendar 
      v-model:show="showCalendar" 
      @confirm="onConfirm"
      :show-confirm="false"
      type="range"
      :round="false"
      color="#ff9854"
    />

    <!-- 3.价格/人数选择/ -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/名宿名</div>

    <!-- 4.热门建议 -->
    <div class="section hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div 
          class="item"
          :style="{ color: item.tagText.color, background: item.tagText.background.color }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>

    <!-- 5.搜索按钮 -->
    <div class="section search-btn">
      <div class="btn" @click="searchBtnClick">开始搜索</div>
    </div>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import useCityStore from '@/stores/modules/city.js';
  import { storeToRefs } from 'pinia';
  import { ref } from 'vue';
  import { formatMonthDay,getDiffDays } from "@/utils/format_date.js"
  import useHomeStore from "@/stores/modules/home"
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

  // 日期范围的处理
  // 当前的时间,使用dayjs库，安装 npm install dayjs
  // 把获取当前时间封装成一个函数，存放到utils中
  // 调用封装好的获取当前时间并转换好格式的时间
  const nowDate = new Date()//开始时间
  const newDate = new Date()//结束时间
  // 通过dayjs库的方法设置时间： 
  newDate.setDate(nowDate.getDate() + 1)//在开始时间的基础上加一天

  const startDate = ref(formatMonthDay(nowDate))//转换开始时间
  const endDate = ref(formatMonthDay(newDate)) //转换结束时间
  const stayCount = ref(getDiffDays(nowDate,newDate)) //计算时间差

  // 选择日期
  const showCalendar = ref(false)
  const onConfirm = (value) => {
    // 1.设置日期
    // 点击确定后获得参数，开始时间，结束时间
    const selectStartDate = value[0]
    const selectEndDate = value[1]
    // 拿到最新时间后，调用封装好的处理时间的方法,更新之前获取的时间
    startDate.value = formatMonthDay(selectStartDate)
    endDate.value = formatMonthDay(selectEndDate)
    // 获取时间差,使用dayjs计算
    stayCount.value = getDiffDays(selectStartDate,selectEndDate)


    // 2.隐藏日历
    showCalendar.value = false
  }

  //热门推荐
  const homeStore = useHomeStore()
  const { hotSuggests } = storeToRefs(homeStore)

  // 开始搜索
  const searchBtnClick = () => {
    // 点击搜索跳转到搜索页面，并传递参数,开始时间，结束时间，选择城市
    // 因为这些都是ref对象，所以要传入他们的值
    router.push({
      path: "/search",
      query: {
        startDate: startDate.value,
        endDate: endDate.value,
        currentCity: currentCity.value.cityName
      }
    })
  }
</script>

<style lang="less" scoped>
.search-box{
  --van-calendar-popup-height:100%;
}


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
  height: 44px;

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

.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}

.hot-suggest {
  margin: 10px 0;
  height: auto;
  .item {
    padding: 4px 8px;
    border-radius: 14px;
    margin: 4px;
    font-size: 12px;
    line-height: 1;
  }
}

.search-btn {
  .btn {
    width: 342px;
    height: 38px;
    max-height: 50px;
    font-weight: 500;
    font-size: 18px;
    line-height: 38px;
    text-align: center;
    border-radius: 20px;
    color: #fff;
    background-image: var(
      --theme-liner-gradient
    );
  }
}




</style>