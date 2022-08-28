<template>
  <div class="app">
    <!-- 1.内容是按钮 -->
    <show-message title="哈哈" content="我是内容 哈哈">
      <!-- 会替换掉原来插槽的位置 -->
      <button>我是按钮元素</button>
    </show-message>

    <!-- 2.内容是超链接 -->
    <show-message  content="我是内容 哈哈">
      <!-- 会替换掉原来插槽的位置 -->
      <a href="#">百度一下</a>
    </show-message>

    <!-- 3.内容是一张图片 -->
    <show-message  content="我是内容 哈哈">
      <!-- 会替换掉原来插槽的位置 -->
      <img src="./img/betterme.jpg" alt="">
    </show-message>

    <!-- 4.内容没有传递 -->
    <!-- 会显示默认值 -->
    <show-message>
    </show-message>
  </div>
</template>

<script>
import ShowMessage from "./ShowMessage.vue"
export default {
  components: {
    ShowMessage
  }
}
</script>

<style>

</style>