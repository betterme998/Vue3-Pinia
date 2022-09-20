// 定义关于counter的store
// 定义一个store
import { defineStore } from "pinia";

// 要使用其他store的信息，先导入其他store的返回函数
import useUser from "./user";

// 接收两个参数 id，和要存储的对象。
// 通过id区分不同的store
// defineStore() 返回的是函数，我们调用这个函数会返回store
const useCounter = defineStore("counter", {
  // 这里面编写类似vuex代码
  // state对应的是函数，函数返回对象
  state: () => ({
    count:99,
    friends: [
      { id: 111, name: "why" },
      { id: 112, name: "kobe" },
      { id: 113, name: "james" },
    ]
  }),
  getters: {

    // 1.基本使用
    doubleCount(state) {
      return state.count * 2
    },

    // 2.一个getter引入另一个getter
    doubleCountAddOne() {
      // this是store实例
      return this.doubleCount + 1
    },

    // 3.getter也支持返回一个函数
    // 根据id获取指定的角色
    getFriendById(state) {
      // 返回一个函数，该函数接收一个id
      return function(id){
        // find高阶函数处理
        return state.friends.find(item => item.id === id)

        // 普通方法处理
        // for (let i = 0; i <state.friends.length; i++){
        //   const friend = state.friends[i]
        //   if(friend.id === id){
        //     return friend
        //   }
        // }
      }
    },

    // 4.getter中用到别的store中的数据
    // 如要展示counter的数值，也要展示user的信息
    showMessage(state) {
      // 1导入user的store返回函数后获取store
      const userStore = useUser()

      // 2.获取信息

      // 3.拼接信息
      return `name:${userStore.name}-count:${state.count}`
    }
  },
  actions: {
    increment() {
      // 和getters一样可以使用this，（this指向store）
      this.count++
    }
  }
})
// 调用defineStore返回的函数， 会返回store
// const counterStore = useCounter()

// 导出defineStore返回的函数,在需要的地方使用，就能返回store
export default useCounter

