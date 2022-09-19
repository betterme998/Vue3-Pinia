const counter = {
  // 设置了这个，就要像在模块中使用state那样在对应的模块那到getters，actions，mytations
  namespaced:true,
  state: () => ({
    count: 199
  }),
  mutations:{
    incrementCount(state) {
      state.count++
    }
  },
  getters: {
    // module的getters可以接收三个参数，state是局部的state（counter模块下的），rootState是根的state
    doubleCount(state, getters, rootState) {
      console.log(rootState);
      console.log(state);

      return state.count + 1
    }
  },
  actions: {
    incrementCountAction(context) {
      context.commit("incrementCount")
    }
  }
}

export default counter