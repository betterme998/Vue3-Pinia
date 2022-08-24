<template>
  <div class="app">
    <div class="tabs">
      <template v-for="(item, index) in tabs" :key="item">
        <button :class="{active: currentIndex === index}" 
                @click="itemClick(index)">{{ item }}</button>
      </template>
    </div>
    <div class="views">
      <!-- 1.第一种做法：v-if进行判断逻辑，决定要显示那个组件 -->
      <!-- <template v-if="currentIndex === 0">
        <home></home>
      </template>
      <template v-else-if="currentIndex === 1">
        <about></about>
      </template>
      <template v-else-if="currentIndex === 2">
        <category></category>
      </template> -->

      <!-- 2.底二种做法：动态组件 component -->
      <!-- is中的组件需要来自两个地方1.全局注册的组件2.局部注册的组件 -->
      <component :is="tabs[currentIndex]"></component>
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