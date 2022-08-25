<template>
  <div class="app">
    <!-- 1.当我们点击切换后组件会进行切换，前一个组件会被销毁掉 -->
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button :class="{active: currentIndex === index}" 
                @click="itemClick(index)">{{ item }}</button>
      </template>
    </div>
    <div class="views">
      <!-- 为了避免组件频繁创建，销毁。以及保留数据我们使用keep-alive -->
      <!-- 会被缓存，下次进入就不要创建直接拿缓存好的就行 -->
      <!-- 实际当中我们希望部分被缓存，部分不被缓存  使用 include="" 被包含的组件才会被缓存  不能加空格-->
      <!-- include：组件的名称来自于组件定义时name选项  就是要监听的那些组件必须要传入name属性 -->
      <keep-alive include="home,about">
        <component :is="tabs[currentIndex]"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home.vue"
import About from "./views/About.vue"
import Category from "./views/Category.vue"
export default {
  components: {
    Home,
    About,
    Category
  },
  data() {
    return {
      tabs: ["home", "about", "category"],
      currentIndex:0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
    }
  }
}
</script>

<style>
  .active{
    color: red;
  }
</style>