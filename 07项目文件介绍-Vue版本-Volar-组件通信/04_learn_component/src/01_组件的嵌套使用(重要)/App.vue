<template>
  <div class="app">
    <!-- app header -->
    <!-- 吧这部分抽离成组件 -->
    <!-- <div class="header">
      <div class="top">top banner</div>
      <input type="text">
      <div class="nav"></div>
    </div> -->
    <app-header-vue></app-header-vue>


    <!-- app content -->
    <!-- 拆成组件 -->
    <!-- <div class="content">
      <div class="banner">banner</div>
      <ul>
        <li>s商品列表1</li>
        <li>s商品列表2</li>
        <li>s商品列表3</li>
        <li>s商品列表4</li>
      </ul>
    </div> -->
    <app-content></app-content>

    <!-- app footer -->
    <!-- 拆成组件 -->
    <!-- <div class="footer">
      <div>版权声明</div>
      <div>免责声明</div>
      <div>物流配送</div>
    </div> -->
    <app-footer></app-footer>
  </div>

</template>

<script>
import AppHeaderVue from './components/AppHeader.vue';
import AppContent from './components/AppConten.vue';
import AppFooter from './components/AppFooter.vue'
  export default {
    components: {
      AppHeaderVue,
        AppContent,
        AppFooter
    }
  }
</script>

<style scoped>

</style>