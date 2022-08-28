<template>
  <div>
    <!-- 1.展示why的个人信息 -->
  <!-- 并通过属性传递数据 -->
  <!-- 传过去后子组件接受数据：
    怎要让他们连在一起呢？：用props接收
    跳子组件 -->
    <!-- 当限制number类型时，加上: 让它变成js代码，写18就是数组，写:age="'18'"就是字符串 -->
    <!-- 这里abc在props里面没有定义被称为非props，，那么该属性被默认添加到子组件的根元素上面（子组件里面的根元素） -->
  <show-info name="why" :age="18" :height="1.88" abc="abc" class="active"></show-info>

  <!-- 2.展示kobe的个人信息 -->
  <!-- 当我们想要展示其他人信息时，通过app.vue来决定数据，且app.vue是父组件，show-info是子组件 -->
  <show-info name="kobe" :age="30" :height="1.87"></show-info>

  <!-- 3.展示默认的个人信息 -->
  <show-info></show-info>
  </div>

</template>

<script>
import ShowInfo from "./ShowInfo.vue"
export default {
  components: {
    ShowInfo
  }
}
</script>

<style>

</style>