<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button :class="{active: currentIndex === index}" 
                @click="itemClick(index)">{{ item }}</button>
      </template>
    </div>
    <div class="views">
      <keep-alive include="home,about">
        <component :is="tabs[currentIndex]"></component>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import Home from "./views/Home.vue"
import About from "./views/About.vue"

// 为了让分开打包要使用异步组件
// vue给我们提供了一个defineAsyncComponent
import { defineAsyncComponent } from 'vue'
// 定义异步组件
// 一般传入一个函数
const AsyncCategory = defineAsyncComponent(()=> import("./views/Category.vue"))
export default {
  components: {
    Home,
    About,
    // 用还是正常用，就是打包的时候会进行分包的处理
    Category: AsyncCategory
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