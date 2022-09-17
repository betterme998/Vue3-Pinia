<template>
  <div class="home">
    <button @click="changName">修改name</button>
    <button @click="incrementLevel">递增level</button>
    <button @click="changInfo">修改info</button>
    <!-- 在template直接使用 -->
    <h2>在template直接使用：Store:name:{{ $store.state.name }}</h2>
    <h2>在template直接使用：Store:level:{{ $store.state.level }}</h2>
  </div>

</template>

<script>
import { computed } from '@vue/runtime-core'
import { CHANGE_INFO } from '../store/mutation_types.js'
  // options api 
  export default {
    computed:{

    },
    methods: {
      /*
        mutation常量
        我们在提交mutation时需要提交对应的名字，这样容易出错
        这时可以将这个名字抽取到一个常量里面。
        我们在store文件夹里面创建mutation_types.js来存放这些常量
      */ 
      changName() {
        // 修改state，通过mutation,传入参数
        this.$store.commit("changeName","李四")
      },
      // mutation提交可携带参数
      incrementLevel() {
        this.$store.commit("incrementLevel")
      },
      // 使用抽取出去的常量
      changInfo() {
        this.$store.commit(CHANGE_INFO, {
          name:"王二",
          level:200
        })
      }
    }
  }
</script>


<script setup>


</script>

<style scoped>

</style>