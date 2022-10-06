import { defineStore } from "pinia"

const startDate = new Date()//开始时间
const endDate = new Date()//结束时间
// 通过dayjs库的方法设置时间： 
endDate.setDate(startDate.getDate() + 1)//在开始时间的基础上加一天

const useMainStore = defineStore("main", {
  state: () => ({
    token:"",

    startDate: startDate,
    endDate: endDate,

    isLoading:false
  })
})

export default useMainStore