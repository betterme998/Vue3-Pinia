<template>
  <div>
    <!-- 
      选项式API （vue2）    Hook inside  setup (钩子 内部 设置)vue3
      beforeCreate         Not needed (不在需要)
      created              Not needed
      beforeMounte         onBeforMounte
      mounted              onMounted
      beforeUpdate         onBeforUpdate
      updated              onUpdated
      beforUnmount         onBeforUnmount
      unmounted            onUnmounted
      activated            onActivated
      deactivated          onDeactivated
     -->
     <!--beforeCreate和 created不在需要
      因为setup是围绕beforeCreate和 created生命周期钩子运行的，所以不需要显示的定义他们，换句话说，在这两个钩子中编写
      的代码都应该直接在setup函数中编写
     -->
  </div>
</template>

<script>
import { onMounted } from "vue"
export default {
  setup() {
    // 在执行setip函数的过程中，你需要注册别的生命周期函数
    // 可以注册多个
    onMounted(() => {
      console.log("onMounted的生命周期");
    })
    // onMounted(() => {
    //   console.log("onMounted的生命周期");
    // })
  }
}
</script>

<style>

</style>