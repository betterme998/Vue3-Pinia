<template>
  <div>
    <h2>Counter: {{ counter }}</h2>
    <button @click="changeVounter">修改message</button>
    <hr>
    <!-- why绑定 -->
    <h2>Why:{{ why }}</h2>
    <button @click="changewhy">修改message</button>
  </div>
</template>

<script>
  export default {
    props: {
      counter: {
        type:Number,
        default:0
      },
      why: {
        type:String,
        default:''
      }
    },
    // 自定义v-model名字，一个组件可以使用多个v-model
    emits:["update:counter", "update:why"],
    methods: {
      changeVounter() {
        // 这样写能被v-model监听
        this.$emit("update:counter",1000)
      },
      changewhy() {
        this.$emit("update:why",'kobi')
      }
    }
  }
</script>

<style scoped>

</style>