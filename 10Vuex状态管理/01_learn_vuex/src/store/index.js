import { createStore } from 'vuex'
import { CHANGE_INFO } from './mutation_types'

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
      avatarURL: "http://xxxx",
      friends:[
        {id:111, name: "betterme", age: 18},
        {id:112, name: "why", age: 28},
        {id:113, name: "james", age: 25},
      ]
    }
  },
  // 某些属性我们可能需要变化后来使用，这个时候可以使用getters，
  // getters第二个参数 getters
  // getters 返回值
  getters: {
    // 1.getters基本使用
    // 传入state
    doubleCounter(state) {
      // 返回两倍的conuter
      return state.counter * 2
    },
    // 获得所有年龄的和
    totalAge (state) {
      return state.friends.reduce((preValue, item) => {
        return preValue + item.age
      }, 0)
    },
    // 2.在getters中使用另一个getters
    // 显示用户信息，拼接字符串
    // 可传第二个参数 getters,可拿到其他getters
    message(state, getters) {
      // 在getter属性中获取其他getter
      return `name:${state.name} level:${state.level} friendTotalAge:${getters.totalAge}`
    },

    // 根据id获取信息
    // 3.getter返回函数用法，另一个地方调用函数传入参数
    getFriendId(state) {
      // 返回一个函数并可传参，这样组件拿到getFriendId就可以动态传值
      // find()组件的方法，返回是一个组件中存在的值
      return function(id) {
        const friend = state.friends.find(item => item.id === id)
        return friend
      }
      
    }
  },
  mutations: {
    // 把state传入
    increment(state) {
      state.counter++
    },
    changeName(state, payload) {
      state.name = payload
    },
    incrementLevel(state){
      state.level++
    },
    [CHANGE_INFO](state, newInfo) {
      state.level = newInfo.level
      state.name = newInfo.name
    }
  },
  actions: {
    /*
    actions的基本使用
  .Action类似于mutation，不同在于：
    .Action提交的是mutation，而不是直接变更状态；
    .Action可以包含任意异步操作
  .这里有一个非常重要的参数context：
    .context是一个和store实例均有相同方法和属性的context对象；
    .所以我们可以从中获取到commit方法来提交一个mutation，或者通过context.state和 context.getters来获取state和getters
  .但是为什么它不是store对象呢？这个等到讲Modules时具体说
    */ 
  //  actions定义的函数接收context 类似于 state
   incrementAction(context) {
    console.log(context.commit);// 在actions中提交mutation
    console.log(context.getters);// 拿到getters
    console.log(context.state);// 拿到gstate
    context.commit("increment")
   },
  //  可传入参数
  changeNameAction(context, payload) {
    context.commit("changeName", payload.name)
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