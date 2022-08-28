<template>
  <div>
    <home></home>
    <about></about>
    <category></category>
  </div>
</template>

<script>
  import Home from './views/Home.vue'
  import About from './views/About.vue'
  import Category from './views/Category.vue'
  export default {
    // 在给个组件当中存在options api 如components，data，methods created等等。。。
    // 当组件当中存在大量的重复代码如下面的data，created，我们可以对其进行抽取。
    // 通过mixin进行抽取
    // 1.创建文件夹mixins, 跳转过去，
    // mixin的合并规则
    // .如果Mixin对象中的选项和组件中的选项发生了冲突，那么Vue会如何操作呢？
      /*
        这里分不同情况来进行处理
        1.情况一：如果是data函数的返回值对象
          1.1返回对象默认情况下会进行合并；
          如果data返回对象的属性发生了冲突，那么会保留组件自身的数据
        2.情况二：如果生命周期钩子函数
          1.2生命周期的钩子函数会合并到到数组中，都会被调用
        3.情况三：值为对象的选项，例如 methods，components，directives，将被合并为同一个对象
          .比如都有methods选项，并且都定义了方法，那么它们都会生效；
          但如果对象的key相同，那么会取组件对象的键值对；
      */ 

    //  除了创建mixins文件夹的方式来一个一个的导入混入，还可以全局混入，来混入到所有组件当中。在main.js中（用的少）
    
    components:{
      Home,
      About,
      Category
    },
    data() {
      return {
        message: "Hello World"
      }
    },
    created() {
      console.log("message:", this.message);
    }
  }
</script>

<style scoped>

</style>