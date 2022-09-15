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
      counter: 100,
      name: "betterme",
      level:100,
      avatarURL: "http://xxxx"
    }
  },
  mutations: {
    // 把state传入
    increment(state) {
      state.counter++
    }
  }
})


// 2.组件中使用store
/* 
  .在组件中使用store，我们按照如下的方式：
    .在模板中使用
    .在options api中使用，比如computed
    .在setup中使用
*/ 

/*
  单一状态树
  Vuex使用单一状态树
    .用一个对象就包含了全部的应用层级的状态；（永远只有一个store）
    .采用的是SSOT,Single Source of Truth,也可以翻译成单一数据源
  .这意味着，每个应用将仅仅包含一个store实例
    .单状态树和模块化并不冲突，后面我们会讲到module的概念；
  .单一状态树的优势；
    .如果你的状态信息是保存到多个Store对象中，那么之后的管理和维护等等都会变得特别困难；
    .所以Vuex也使用了单一状态树来管理应用层级的全部状态
    .单一状态树能够让我们最直接的方式找到某个状态的片段
    .而且在之后的维护和调试过程中，也可以非常方便的管理和维护
  但是单一状态树不够灵活。
*/ 

// 导出store
export default store