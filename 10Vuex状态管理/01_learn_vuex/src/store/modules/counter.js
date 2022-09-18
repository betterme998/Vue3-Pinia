const counter = {
  state: () => ({
    counter: 199
  }),
  mutations:{
    increment(state) {
      state.counter++
    }
  },
  getters: {
    // module的getters可以接收三个参数，
    doubleCounter(state, getters, rootState) {

    }
  }
}

export default counter