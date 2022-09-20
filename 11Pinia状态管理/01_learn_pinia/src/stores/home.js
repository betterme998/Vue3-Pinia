import { defineStore } from "pinia"

const useHome = defineStore("home",{
  state: () => ({
    banners: [],
    recommends: []
  }),
  actions: {
    // 进行异步操作
    // 1.手动返回promise
    // fetchHomeMultidata() {
    //   // 手动返回promise并使用异步请求
    //   return new Promise(async(resolve, reject) => {
    //     const res = await fetch("http://123.207.32.32:8000/home/multidata")
    //     const data = await res.json()

    //     this.banners = data.data.banner.list
    //     this.recommends = data.data.recommend.list

    //     resolve(data.data)
    //   })
    // }

    // 2.下面这种更简便推荐使用
    //  .Actions中时支持异步操作的，并且我们可以编写异步函数，在函数中使用await
    async fetchHomeMultidata() {
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      console.log(data);
      this.banners = data.data.banner.list
      this.recommends = data.data.recommend.list
    }
  }
})

export default useHome