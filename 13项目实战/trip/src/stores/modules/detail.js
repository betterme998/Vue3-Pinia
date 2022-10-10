// 导入创建store的函数
import { defineStore } from "pinia";

// 导入详情页网络请求函数
import { getDatailInfos } from "@/service/modules/detail"

// 创建详情页的store
const useDetailStore = defineStore("detail", {
  state: () => ({
    swipeData:[],//轮播图数据
    topInfos:{}, //房屋详情信息数据
    houseFacility:{},//房屋设备信息
    landlord:{}//房东介绍数据
  }),
  actions: {
    // 发送异步网络请求返回promise
    async fetchDetailData(houseId) {
      const res = await getDatailInfos(houseId)
      this.swipeData = res?.data?.mainPart?.topModule?.housePicture?.housePics
      this.topInfos = res?.data?.mainPart?.topModule
      this.houseFacility = res?.data?.mainPart?.dynamicModule?.facilityModule?.houseFacility
      this.landlord = res?.data?.mainPart?.dynamicModule?.landlordModule
      console.log(res)
    }
  },
  persist: true
})

export default useDetailStore