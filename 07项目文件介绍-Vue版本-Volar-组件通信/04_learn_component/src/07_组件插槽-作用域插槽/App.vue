<template>
  <div class="app">
    <!-- 1.tab-control -->
    <!-- 传递数据给子组件 -->
    <!-- 监听自定义事件，修改显示内容 -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick"/>

    <!-- 新----------------------插槽 -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick">
                 <!-- 作用域插槽 -->
                 <!-- 作用域插槽是子组件吧数据使用完后再想办法传回来了 -->
                 <!-- 默认名字，，因为有传值过来就写出来，这里的="props",是传过来的值，会放到里面 -->
      <!-- 独占默认插槽简写 <template v-slot="props">  和下面相同 -->
      <template v-slot:default="props">
        <button>{{ props.item }}</button>
      </template>
    </tab-control>

    <!-- 2.只有默认组件时组件标签当模板使用，可以不用写template -->
    <tab-control :titles="['衣服', '鞋子', '裤子']"
                 @tab-item-click="tabItemClick"
                 v-slot="props">
        <button>{{ props.item }}</button>
    </tab-control>

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