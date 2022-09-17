<template>
  <div class="home">
    <!-- 1.在模板中直接使用多个状态 -->
    <h2>name: {{ $store.state.name }}</h2>
    <h2>level: {{ $store.state.level }}</h2>
    <h2>avatar: {{ $store.state.avatarURL }}</h2>
<hr>
    <!-- 2.计算属性（映射状态：数组写法） -->
    <!-- <h2>计算属性（映射状态：数组写法）name: {{ name }}</h2>
    <h2>计算属性（映射状态：数组写法）level: {{ level }}</h2>
    <h2>计算属性（映射状态：数组写法）avatar: {{ avatarURL }}</h2> -->
<hr>
    <!-- 3.计算属性（映射状态：对象写法） -->
    <!-- <h2>计算属性（映射状态：对象写法）name: {{ sName }}</h2>
    <h2>计算属性（映射状态：对象写法）name: {{ sLevel }}</h2>
    <h2>计算属性（映射状态：对象写法）name: {{ sAvatarURL }}</h2> -->
<hr>
    <!-- 4.在setup中使用mapState -->
    <!-- <h2>在setup中：计算属性（映射状态：数组写法）name: {{ cName }}</h2>
    <h2>在setup中：计算属性（映射状态：数组写法）name: {{ cLevel }}</h2> -->
<hr>
    <!-- 5.在setup中使用封装好的hooks -->
    <!-- <h2>在setup中：计算属性（映射状态：数组写法）name: {{ name }}</h2>
    <h2>在setup中：计算属性（映射状态：数组写法）name: {{ level }}</h2> -->
<hr>
    <!-- 6.在setup直接解构store.state 再用toRefs转成ref对象响应式数据 -->
    <h2>在setup中：计算属性（映射状态：数组写法）name: {{ name }}</h2>
    <h2>在setup中：计算属性（映射状态：数组写法）name: {{ level }}</h2>
    <button @click="incrementLevel">修改直接在setup解构，通过·toRefs转换拿到的store数据</button>
  </div>

</template>

<script>
  import { mapState } from 'vuex';
import store from '@/store';

  
  // options api 
  export default {
    // 直接吧state数据映射到computed
    // computed: {
    //   // 告诉我们要映射哪些内容
    //   // 返回一个个函数，吧他们放到computed
    //   // 数组写法 通过数组映射注意：要和data数据不同名
    //   ...mapState(["name", "level", "avatarURL"]),

    //   // 对象写法
    //   ...mapState({
    //     // 对应一个函数，传入state，再取值
    //     sName: state => state.name,
    //     sLevel: state => state.level,
    //     sAvatarURL: state => state.avatarURL,
    //   })
    // }
  }
</script>


<script setup>
  // 二.在setup中使用mapState
  import { mapState, useStore } from 'vuex';
  import useState from '@/hooks/useState';

  // 1.拿到computed
  import { computed, toRefs } from 'vue';
  // 一步步使用mapState
  // 2.mapState返回的是函数，我们进行解构
  // const { name, level } = mapState(["name", "level"])
  // // 3.给computed传入函数
  // // 因为setup中不能使用this，但computed函数里面调用传进去的的name，和level函数中使用this.$store.state.name/level。会报错。
  // // 所以要使用bind传入this的指向对象
  const store = useStore()
  // const cName = computed(name.bind({ $store: store }))
  // const cLevel = computed(level.bind({ $store: store}))

  // 上面使用的有点麻烦，我们封装一个hooks（钩子）
  // 2.使用封装好的useState
  // const { name, level } = useState(["name", "level"])

  // 三。直接对store.state进行解析，并取别名
  const { name, level } = toRefs(store.state)

  function incrementLevel() {
    // 为了方便，违背原则，直接修改state，正确要使用mutations改变
    store.state.level++
  }

  /*
    概括
    1.在setup中使用mapState
    .在setup中如果我们单个获取状态是非常简单的：
      1.通过useStore拿到store后获取某个状态即可
      2.但是如果我们需要使用mapState的功能呢？
    .默认情况下，Vuex并没有提供非常方便的使用mapState，这里我们进行一个函数的封装
    
  */ 
</script>

<style scoped>

</style>