export default {
  // 抽取store-服务器数据
  state: () => ({
    // 2.服务器数据
    banner:[],
    recommend:[]
  }),
  mutations: {
     // 保存服务器数据
    changeBanners(state, banner) {
      state.banner = banner
    },
    changeRecommends(state, recommend) {
      state.recommend = recommend
    }
  },
  actions: {
    // 请求首页的数据
    fetchHomeMultidataAction(context) {
      // 1.返回Promise，给Promise设置then
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   res.json().then(data => {
      //     console.log(data);
      //   })
      // })
      // 2.Promise链式调用
      // fetch("http://123.207.32.32:8000/home/multidata").then(res => {
      //   return res.json()
      // }).then(data => {
      //   console.log(data);
      // })

      // 手动返回一个promise，为了让使用的地方知道请求结束。
      return new Promise( async (resolve, reject) => {
        // 3.await/async   要在函数前面加上异步 async 异步函数一定返回promise
      const res = await fetch("http://123.207.32.32:8000/home/multidata")
      const data = await res.json()
      
      // 修改state数据
      context.commit("changeBanners", data.data.banner.list)
      context.commit("changeRecommends",data.data.recommend.list)
      resolve(data.data)
      })
    }
  }
}