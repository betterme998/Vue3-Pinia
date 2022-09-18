<template>
  <div class="home">
    <!-- 通过mapActions映射拿actions -->
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="incrementAction">发起action修改counter</button>
    <hr>
    <!-- 不使用mapActions，直接使用默认的做法 -->
    <button @click="increment">在setup中发起action修改counter</button>
    <hr>
    <h2>当前名字：{{ $store.state.name }}</h2>
    <button @click="changeNameAction('aaa')">发起action修改name</button>

  </div>

  
</template>

<script>
  // action的mapActions映射
  import { mapActions } from 'vuex';

  // options api 
  export default {
    methods: {
      // 在options api中使用actions，dispatch用来派发要调用的actions
      // counterBtnClick() {
      //   this.$store.dispatch("incrementAction")
      // },
      // actions传入参数
      // nameBtnClick() {
      //   this.$store.dispatch("changeNameAction", "aaa")
      // }
      // 也可以传入对象
      // nameBtnClick() {
      //   this.$store.dispatch("changeNameAction", { name:'aaa' })
      // }
      // 也可以以对象形式进行分发
      // nameBtnClick() {
      //   this.$store.dispatch({
      //     type:"changeNameAction",
      //     name: 'aaa'
      //   })
      // }

      // 不用像上面那样一个一个写
      // mapActions映射,有数组语法，也有对象语法
      // ...mapActions(["incrementAction", "changeNameAction"])
    }
  }
</script>


<script setup>
  import { useStore, mapActions } from 'vuex';
  const store = useStore()
  // 1.在composition API中使用mapActions辅助函数 和mapState，mapGetters，mapMutations一样。解构拿到的函数内部通过this.$store.action拿值。但setup中没有this，所以要修改this指向

  // // 拿到对应actions
  // const actions = mapActions(["incrementAction", "changeNameAction"])
  // // 存放处理好的actions
  // const newActions = {}
  // Object.keys(actions).forEach( key => {
  //   // 存储改变this指向的actions
  //   newActions[key] = actions[key].bind({ $store: store })
  // })
  // // 对新对象进行解构
  // const { incrementAction, changeNameAction } = newActions

  // 2.使用默认的做法，不使用mapActions辅助函数
  function increment() {
    store.dispatch("incrementAction")
  }
</script>

<style scoped>

</style>