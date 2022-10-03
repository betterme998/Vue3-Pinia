// 导入创建store的方法
import { defineStore } from "pinia";

// 导入home页面对应的网络请求
import { getHomeHotSuggests, getHomeCategories } from "@/service"

// 创建store，并传入参数 id，对象
const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],//热门推荐
    categories:[] //分类
  }),
  actions: {
    // 请求热门推荐数据
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },

    // 请求分类数据
    async fetchHomeCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    }
  }
})

export default useHomeStore