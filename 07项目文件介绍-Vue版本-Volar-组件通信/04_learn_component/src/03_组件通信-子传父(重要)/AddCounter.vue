<template>
  <div class="add">
      <button @click="btnClick(1)">+1</button>
      <button @click="btnClick(5)">+5</button>
      <button @click="btnClick(10)">+10</button>
    </div>
</template>

<script>
export default {
  // 对于自定义发出的参数，vue3有一个属性 emits,用来对发出去的所有事件进行注册，方便查看 （了解）
  // emits数组语法
  // emits:["add"],

  // emits：对象语法
  // 可对参数进行验证
  emits: {
    // add: null, //不做验证
    add: function (count) { //验证方法，发生事件时，先执行这个方法

      if(count <= 6 ){
        return true
      }
      // 验证失败会报警告，用的比较少
      return false
    }
  },
  methods: {
    btnClick(count) {
      console.log('btnclick',count);
      // 让子组件发出一个自定义事件
      // 第一个参数是自定义事件名称
      // 第二个参数是传递的参数
      this.$emit("add", count)
    }
  }
}
</script>

<style>

</style>