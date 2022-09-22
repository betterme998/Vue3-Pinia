// 导入defineStore
import { defineStore } from "pinia";

// 创建store注册函数，传入参数
const useCityStore = defineStore("city",{
  state: () => ({
    cities: []
  }),
  actions: {

  }
})

// 导出store注册函数
export default useCityStore