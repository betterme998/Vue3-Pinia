<template>
  <div class="home">
    <button @click="changeAge">修改name</button>

    <!-- 1.在模板中直接拿到getters -->
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>userTotalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>
    <!-- 根据id获取某个朋友的信息 -->
    <h2>id-111的朋友信息: {{ $store.getters.getFriendId(111) }}</h2>
    <h2>id-112的朋友信息: {{ $store.getters.getFriendId(112) }}</h2>
    <hr>
    <!-- 通过mapGetters映射拿到getters -->
    <h2>doubleCounter: {{ doubleCounter }}</h2>
    <h2>userTotalAge: {{ totalAge }}</h2>
    <h2>message: {{ message }}</h2>
    <!-- 通过mapGetters映射拿到getter 根据id获取某个朋友的信息 -->
    <h2>id-111的朋友信息: {{ getFriendId(111) }}</h2>
    <h2>id-112的朋友信息: {{ getFriendId(112) }}</h2>
  </div>

</template>

<script>
  import { mapState } from 'vuex';
import store from '@/store';
// getters的映射
import { mapGetters } from 'vuex'

  
  // options api 
  export default {
    // 映射到computed里面
    computed: {
      // 数组语法，对象语法
      ...mapGetters(["doubleCounter", "totalAge"]),
      ...mapGetters(["getFriendId"])
    }
  }
</script>


<script setup>
  import { mapGetters, useStore } from 'vuex'
import { computed, toRefs } from 'vue';
const store = useStore()
// 2.在setup中使用mapGetters，和使用mapState一样，vuex在vue3.2后使用起来不方便.
  // 拿到的是函数
  // const { message: messageFn } = mapGetters(["message"])
  // // 和mapState一样要改变这个函数this的指向
  // const message = computed(messageFn.bind({ $store: store }))

  // 3.推荐：直接解构拿到要getter的函数，并且包裹成ref
  // 因为直接赋值不是响应式数据，所以使用toRefs进行转换
  // const { message } = toRefs(store.getters)这会报警告使用下面方法

  // 4.针对某一个getters属性使用computed
  const message = computed(() => {store.getters.message})

  // 修改数据看看是不是响应式
  function changeAge() {
    // 这种修改是错误的，正确是提交mutations
    store.state.name = "kobe"
  }
</script>

<style scoped>

</style>