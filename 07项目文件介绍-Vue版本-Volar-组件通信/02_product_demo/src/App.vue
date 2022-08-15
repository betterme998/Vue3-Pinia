<template>
<!-- 1.这里也需要先经过编译 compile变成vnode--》虚拟dom--》真实dom -->
<!-- 居然都需要编译，那我们在main.js里创建的App和引入的app需要的 vue文件不一样呢？
      1.这里之所以不一样取决于这个过程是由谁完成的他们完成的东西是不一样的、
        跳转到main.js创建的App实例

      2. .vue文件不需要源码帮助完成转换过程，
      不是vue源码完成转换那是谁完成的？
        答案：APP.vue文件在加载的时候，在webpack环境下边，要想加载.vue文件。默认不认识.vue文件。会当成没有格式的loader来加载这个文件，所以
              我们用了一个官方的loader叫做：vue-loader,它自动完成了template到--》createVNode转换过程，当我们通过import App from './App.vue
              拿到 App它根本就不存在template，早就转换过了，转换过程就是由vue-loader来完成的。
      
      所以如果是.vue文件有vue-loader转换，如果是普通对象，就没有人帮他解析，就必须vue当中的源码来解析（vue/dist/vue.esm-bundler.js）
-->
  <div class="app">
    <h2 class="title">我是app.vue中的h2元素</h2>

    <!-- AppHeaderVue -->
    <app-header-vue></app-header-vue>
  </div>
</template>

<script>
import AppHeaderVue from './components/AppHeader.vue';
export default {
  name: 'App',
  components: {
    AppHeaderVue
  }
}
</script>

<!-- 给style加上作用域  scoped -->
<style scoped>
  .title {
    color: red;
  }
</style>
