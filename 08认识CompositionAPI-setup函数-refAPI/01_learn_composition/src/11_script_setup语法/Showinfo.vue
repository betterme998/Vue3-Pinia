<template>
  <div>
    <div>Showinfo:{{ age }}</div>
    <button @click="shoeInfoBtnClick">showinfoButton</button>
  </div>
</template>

<script setup>
  // 接收父组件数据
  // 定义props
  const props = defineProps({
    age:{
      type:Number,
      default:18
    }
  }) 

  // 发送自定义事件
  const emits = defineEmits(["infoBtnClick"])
  function shoeInfoBtnClick() {
    emits("infoBtnClick", "showInfo内部发生了点击")
  }

  // 定义foo的函数
    function foo() {
      console.log("foo function");
    }
  // 语法糖的写法中，父组件通过ref获取子组件并要使用foo方法，必须在子组件内暴漏出该方法
  // 通过defineExpose() 方法
  defineExpose({
    foo
  })
</script>

<style scoped>

</style>