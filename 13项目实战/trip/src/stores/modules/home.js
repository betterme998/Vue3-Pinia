// 导入创建store的方法
import { defineStore } from "pinia";

// 导入home页面对应的网络请求
import { getHomeHotSuggests, getHomeCategories, getHomeHouselist } from "@/service"

// 创建store，并传入参数 id，对象
const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],//热门推荐
    categories:[], //分类
    houselist:[], //热门推荐
    currentPage: 1 //热门推荐请求第几页数据
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
    },

    // 请求热门推荐数据
    async fetchHouselistData() {
      const res = await getHomeHouselist(this.currentPage)
      // 加上...结构数组,不然变成二维数组
      this.houselist.push(...res.data)
      this.currentPage++
    }
  },
  persist: true
})

export default useHomeStore