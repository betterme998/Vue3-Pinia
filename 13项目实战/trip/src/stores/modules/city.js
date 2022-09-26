// 导入创建store函数
import { getCityAll } from "@/service";
import { defineStore } from "pinia";

// 创建store，传入两个参数 id，对象
const useCityStore = defineStore("city", {
  state: () => ({
    allCities: {}
  }),
  actions: {
    // 发送网络请求，异步返回promise
    async fetchAllCitiesDada() {
      const res = await getCityAll()
      this.allCities = res.data
    }
  }
})

// 导出store的创建函数
export default useCityStore