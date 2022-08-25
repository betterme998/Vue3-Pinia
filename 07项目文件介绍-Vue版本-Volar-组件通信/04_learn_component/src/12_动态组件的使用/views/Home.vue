<template>
  <div>
    <h2>Home组件: {{ name }} - {{ age }}</h2>
    <!-- 监听子组件点击事件 -->
    <button @click="homeBtnClick">hoemBtn</button>
  </div>
</template>

<script>
export default {
  props:{
    name: {
      type: String,
      default:""
    },
    age: {
      type:Number,
      default:0
    }
  },
  emits:["homeClick"],
  methods: {
    homeBtnClick() {
      this.$emit("homeClick", "home")//发送自定义事件，带参数
    }
  }
}
</script>

<style>

</style>