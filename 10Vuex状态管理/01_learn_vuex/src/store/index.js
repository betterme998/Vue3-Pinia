import { createStore } from 'vuex'

// 1.创建store
/*
  每一个Vuex应用的核心就是store（仓库）
    .store本质上是一个容器，它包含着你的应用中大部分的状态（state）；
  Vuex和单纯的全局对象有什么区别呢？
    第一：Vuex的状态存储是响应式的
      .当Vue组件从store中读取状态的时候，若store中的状态改变，那么相对应的组件也会被更新；
    第二：你不能直接改变store中的状态
      .改变store中的状态的唯一途径就显示提交（commit）mutation
      .这样就使得我们可以方便的跟踪每一个状态的变化，从而让我们能够通过一些工具帮助我们更好的管理应用的状态
*/ 
const store = createStore({
  state() {
    return {
      counter: 100
    }
  },
  mutations: {
    // 把state传入
    increment(state) {
      state.counter++
    }
  }
})

// 导出store
// 2.组件中使用store
/* 
  .在组件中使用store，我们按照如下的方式：
    .在模板中使用
    .在options api中使用，比如computed
    .在setup中使用
*/ 
export default store