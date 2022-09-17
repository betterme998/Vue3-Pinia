<template>
  <div class="home">
    <!-- 通过mapMutations映射过来的函数在template调用，并传入参数 -->
    <button @click="changeName('李四')">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changeinfo({ name:'王二', level:200 })">修改info</button>
    <!-- 在template直接使用 -->
    <h2>在template直接使用：Store:name:{{ $store.state.name }}</h2>
    <h2>在template直接使用：Store:level:{{ $store.state.level }}</h2>
  </div>

  <!-- mutation重要原则
    .一条重要的原则要记住：mutation必须是同步函数
      .这是因为devtool工具记录mutations的日记
      .每一条mutations被记录，devtools都需要捕捉到前一状态和后一状态的快照
      .但是在mutation中执行异步操作，就无法追踪到数据的变化
  -->
</template>

<script>
import { computed } from '@vue/runtime-core'
import { CHANGE_INFO } from '../store/mutation_types.js'
// mutation映射
import { mapMutations } from 'vuex'
  // options api 
  export default {
    computed:{

    },
    methods: {
      // ...mapMutations(["changeName", "incrementLevel", CHANGE_INFO])
    }
  }
</script>


<script setup>
  // 在compotation API中使用mapMutations
  import { mapMutations, useStore } from 'vuex'
  import { CHANGE_INFO } from '../store/mutation_types.js'



  // 1.手动的映射和绑定
  // mapMutations 返回的是函数，因为函数内部通过this.$store.mutations拿到值但是，setup中没有this所以要重新定义this指向
  const mutations = mapMutations(["changeName", "incrementLevel", CHANGE_INFO])
  // 和mapState，mapGetters一样要修改拿到的函数的this指向
  // 吧所有拿到并修改this指向的函数放到newMutions对象中
  const newMutions = {}
  const store = useStore()
  Object.keys(mutations).forEach(key => {
    // 取到函数
    newMutions[key] = mutations[key].bind({ $store: store})
  })
  // 再进行解构
  const { changeName, incrementLevel, changeinfo } = newMutions

</script>

<style scoped>

</style>