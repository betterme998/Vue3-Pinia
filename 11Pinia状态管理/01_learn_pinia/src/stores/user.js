// 导入定义store函数
import { defineStore } from "pinia";

// 定义defineStore返回一个定义store的函数
const useUser = defineStore("user", {
  state: () => ({
    name:'bettterme',
    age:18,
    level:99
  })
})

//导出创建store的函数
export default useUser 