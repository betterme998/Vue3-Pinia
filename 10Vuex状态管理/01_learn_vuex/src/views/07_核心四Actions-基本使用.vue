<template>
  <div class="home">
    <h2>当前计数：{{ $store.state.counter }}</h2>
    <button @click="counterBtnClick">发起action修改counter</button>
    <hr>
    <h2>当前名字：{{ $store.state.name }}</h2>
    <button @click="nameBtnClick">发起action修改name</button>

  </div>

  
</template>

<script>
  // options api 
  export default {
    methods: {
      // 在options api中使用actions，dispatch用来派发要调用的actions
      counterBtnClick() {
        this.$store.dispatch("incrementAction")
      },
      // actions传入参数
      // nameBtnClick() {
      //   this.$store.dispatch("changeNameAction", "aaa")
      // }
      // 也可以传入对象
      // nameBtnClick() {
      //   this.$store.dispatch("changeNameAction", { name:'aaa' })
      // }
      // 也可以以对象形式进行分发
      nameBtnClick() {
        this.$store.dispatch({
          type:"changeNameAction",
          name: 'aaa'
        })
      }
    }
  }
</script>


<script setup>


</script>

<style scoped>

</style>