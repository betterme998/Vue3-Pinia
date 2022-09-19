// 定义关于counter的store
// 定义一个store
import { defineStore } from "pinia";

// 接收两个参数 id，和要存储的对象。
// 通过id区分不同的store
// defineStore() 返回的是函数，我们调用这个函数会返回store
const useCounter = defineStore("counter", {
  // 这里面编写类似vuex代码
  // state对应的是函数，函数返回对象
  state: () => ({
    count:99
  })
})
// 调用defineStore返回的函数， 会返回store
// const counterStore = useCounter()

// 导出defineStore返回的函数,在需要的地方使用，就能返回store
export default useCounter

