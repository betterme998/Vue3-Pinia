<template>
  <div>
    <!-- 
      想做一个计数器案例，在下面两个页面中使用但是不想封装成组件怎么办？

        就把计数器代码单独放到hooks回调函数中，然后再需要的地方使用
        就是把相同函数抽取到一个地方，再调用
        函数编程
        
     -->
     <button @click="changTitle">修改title</button>
     <hr>
     <!-- 1.计数器 -->
    <!-- <home-vue></home-vue>
    <hr>
    <about-vue></about-vue> -->

    <!-- 2.home/about页面的切换 -->
    <!-- 当我们切换到home时，要求修改标题为home页面
          当我们切换到about时，要求标题切换为about页面
          
          这个时候就把之前写的函数useTitle在每个页面调用一次就好啦
    -->
    <button @click="currentPagehome">home</button>
    <button @click="currentPageabout">about</button>

    <!-- 使用动态组件 -->
    <component :is="currentPage"></component>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import HomeVue from './views/Home.vue';
  import AboutVue from './views/About.vue';

  import useTitle from './hooks/useTitle';
export default {
  components:{
    HomeVue,
    AboutVue
  },
  setup() {
    // 修改标题
    function changTitle() {
      useTitle("app title")
    }

    // 页面切换
    const currentPage = ref("HomeVue")

    // 页面切换时修改title
    const title = useTitle("首页")

    function currentPagehome() {
      currentPage.value = 'HomeVue'
      title.value = "首页"
    }

    function currentPageabout() {
      currentPage.value = 'AboutVue'
      title.value = "关于"
    }
    return {
      changTitle,
      currentPage,
      currentPagehome,
      currentPageabout,
      title
    }
  }
}
</script>

<style>

</style>