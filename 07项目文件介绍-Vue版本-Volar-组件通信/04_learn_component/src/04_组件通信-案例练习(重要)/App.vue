<template>
  <div class="app">
    <!-- 1.tab-control -->
    <!-- 传递数据给子组件 -->
    <!-- 监听自定义事件，修改显示内容 -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick"/>

    <!-- 2.展示内容 -->
    <h1>{{ pageContents[currentIndex] }}</h1>
  </div>
</template>

<script>
  import TabControl from './TabControl.vue'
  export default {
    components: {
      TabControl
    },
    data() {
      return {
        pageContents:["衣服列表","鞋子列表","裤子列表"],
        // 当前索引
        currentIndex:0
      }
    },
    methods: {
      tabItemClick(index) {
        this.currentIndex = index
      }
    }
  }
</script>

<style scoped>

</style>