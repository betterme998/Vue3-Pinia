<template>
  <div class="city top-page">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search 
        v-model="searchValue" 
        placeholder="城市/区域/位置" 
        shape="round"
        show-action
        @cancel="cancelClick"
      />

      <!-- 2.tab的切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="2">
        <!-- 定义的常量allCity，一开始为undefined，如往下取值会报错，解决办法使用?. 表示不为空再往下取值 -->
        <!-- <van-tab :title="allCity?.cityGroup?.title"></van-tab> -->
        <!-- 使用请求来的数据尽量使用循环 -->
        <!-- 当for in 循环遍历的是对象时，(值，键，索引) in object -->
        <template v-for="(value, key, index) in allCities" :key="key">
          <!-- 绑定name，标签名称，作为匹配的标识符，就是tabActive会变成key -->
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <!-- 因为城市数据很大，两个标签切换影响性能,所以使用v-show来操作 -->
      <!-- <city-group :group-data="currentGroup"/> -->
      
      <!-- 相当于再两个组件来回切换 -->
      <template v-for="(value, key, index) in allCities">
        <city-group v-show="tabActive===key" :group-data="value"/>
      </template>
    </div>
  </div>
</template>

<script setup>
  import { ref, computed } from 'vue';
  import { useRouter } from 'vue-router';
  import { getCityAll } from "@/service";
  import useCityStore from "../../stores/modules/city"
  import { storeToRefs } from 'pinia';

  import CityGroup from './cpns/city-group.vue'


  const router = useRouter()

  // 搜索框功能
  const searchValue = ref("")
  const cancelClick = () => {
    router.back()
  }

  // tab的切换
  const tabActive = ref('')

  /*
    这个位置发送网络请求有两个缺点
      1.如果网络请求太多，那么页面组件中就包含大量的对网络请求和数据的处理
      2.如果页面封装了很多子组件，子组件需要这些数据，我们必须一步一步将数据传递过去

      解决办法：将网络请求函数再次封装到Pinia

      // 将一个页面的网络请求抽取到pinia的store
      经过一步一步封装有这样的结构
        一个页面对应着-->一个store (state保存数据,actions发送网络请求) --> 到网络请求模块中对应的模块 -->通过封装的axios
        页面子要拿到数据，store负责请求数据，发送网络请求模块负责管理请求的url，分层架构。每个人都有自己的职责

  */ 
  // 网络请求：1.请求城市数据
  // 如果知道返回对象类型就加上
  // const allCity = ref({})
  // getCityAll().then(res => {
  //   allCity.value = res.data
  // })

  // 网络请求：2.通过对请求函数封装到pinia的store中，我们直接再store中拿数据
  // 创建city的store
  const cityStore = useCityStore()
  // 因为发送网络请求再state中,所以发送网络请求
  cityStore.fetchAllCitiesDada()
  // 拿city的store中的数据
  // storeToRefs 是pinia定义的方法等效于Refs
  const { allCities } = storeToRefs(cityStore)

  // 目的：获取选中标签后的数据
  // 1.获取正确的key：将tabs中绑定的tabAction正确绑定，要在tab标签中绑定key，这个可以会作为标识，（识别点击了那个，key值作为标识。又因为这个标识被v-model:active=""双向绑定所以就可以拿到可以值）
  // 2.根据key从allCities （解构store后）获取数据，默认直接获取的数据不是响应式的，所以必须包裹computed
  const currentGroup = computed(() => allCities.value[tabActive.value])
</script>

<style lang="less" scoped>
// 修改搜索框左侧图标，Vant提供了变量--van-search-left-icon-color，直接修改变量，如果没有变量，就使用deep修改样式
// 这里全局修改，在common.css文件夹中修改

.city {
  // --van-tabs-line-height: 30px;

  // top固定定位
  // .top {
  //   position: fixed;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  // }
  // .content{
  //   margin-top: 98px;
  // }

  .top {
    position: relative;
    z-index: 9;
  }

  // 局部滚动
  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>