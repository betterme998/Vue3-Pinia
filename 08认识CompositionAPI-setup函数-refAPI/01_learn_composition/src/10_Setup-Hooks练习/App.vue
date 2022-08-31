<template>
  <div>
    <!-- 
      想做一个计数器案例，在下面两个页面中使用但是不想封装成组件怎么办？

        就把计数器代码单独放到hooks回调函数中，然后再需要的地方使用
        就是把相同函数抽取到一个地方，再调用
        函数编程
        
     -->
    <home-vue></home-vue>
    <hr>
    <about-vue></about-vue>
  </div>
</template>

<script>
  import HomeVue from './views/Home.vue';
  import AboutVue from './views/About.vue';
export default {
  components:{
    HomeVue,
    AboutVue
  }
}
</script>

<style>

</style>