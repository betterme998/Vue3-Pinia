// 导入创建store的方法
import { defineStore } from "pinia";

// 导入home页面对应的网络请求
import { getHomeHotSuggests } from "@/service"

// 创建store，并传入参数 id，对象
const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories:[]
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore