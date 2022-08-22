<template>
  <div>
    <nav-bar>
    <!-- 最新的语法要写模板template，并用v-slot:插槽名称 来对应插槽 -->
    <!-- 这是放在vue.app里编译的，也会读取data里的数据 -->
    <template v-slot:left>
      <button>{{ leftText }}</button>
    </template>

    <!-- #是v-slot语法糖的写法 -->
    <template #center>
      <span>内容</span>
    </template>

    <template #right>
      <a href="#">登录</a>
    </template>
  </nav-bar>

    <!-- 2.nav-bar只给一个插槽传入数据 -->
  <nav-bar>
    <!-- 当我们v-slot的值，也就是插槽名称不想写死时，甚至可以通过按钮进行控制 -->
    <!-- <template v-slot:center>
      <a href="#">注册</a>
    </template> -->
    <!-- 不写死 插槽名称 -->
    <template v-slot:[position]>
      <a href="#">注册</a>
    </template>
  </nav-bar>
  <button @click="position = 'left'">左边</button>
  <button @click= "position = 'center'">中间</button>
  <button @click= "position = 'right'">右边</button>
  </div>
</template>

<script>
import NavBar from './NavBar.vue'
export default {
  components: {
    NavBar
  },
  data() {
    return {
      position:"center",
      leftText:'返回'
    }
  }
}
</script>

<style>

</style>