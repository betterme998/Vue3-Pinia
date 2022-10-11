<template>
  <div class="map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="baidu" ref="mapRef">

      </div>
    </detail-section>
  </div>
</template>

<script setup>
// 导入详情页store构造函数
import useDetailStore from "@/stores/modules/detail"
import { storeToRefs } from "pinia"

// 使用封装好的组件
import DetailSection from "@/components/detail-section/detail-section.vue"
import { onMounted, ref } from "vue";

const mapRef = ref()

const detailStore = useDetailStore()
const { position } = storeToRefs(detailStore)


// 当元素挂载后绑定地图
onMounted(() => {
  // 通过ref拿到挂载的对象
  const map = new BMapGL.Map(mapRef.value);          // 创建地图实例 
  console.log(position.value.longitude, position.value.latitude);
  const point = new BMapGL.Point(position.value.longitude, position.value.latitude);  // 创建点坐标 
  map.centerAndZoom(point, 15);                 // 初始化地图，设置中心点坐标和地图级别
})
</script>

<style lang="less" scoped>
.baidu {
  height:300px
}
</style>