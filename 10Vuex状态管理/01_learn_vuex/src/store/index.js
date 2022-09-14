import { createStore } from 'vuex'

// 创建store
const store = createStore({
  state() {
    return {
      counter: 100
    }
  }
})

// 导出store
export default store