<template>
  <div class="app">
    <h2 ref="title" class="title">{{ message }}</h2>
    <button ref="btn" @click="changeTitle">修改title</button>

    <banner ref="banner"></banner>
  </div>
</template>

<script>
  import Banner from './Banner.vue'
  export default {
    data() {
      return {
        message: 'Hello World'
      }
    },
    components:{
      Banner
    },
    methods: {
      changeTitle() {
      // 1.不要主动的获取DOM，并且修改DOM内容
        // this.message = "你好啊，李银河!"

        // 2.获取h2/button元素
        // 在元素上使用ref属性并赋值
        console.log(this.$refs.title);
        console.log(this.$refs.btn);

        // 3.获取banner组件
        // 拿到的是组件实例
        // 拿到的这个组件实例，不是该组件导出的对象，如果是的话使用多次指向的都会是同一个对象，这就不对了。
        // 在创建组件实例时，是根据该组件导出的对象创建的实例，类似于class，
        console.log(this.$refs.banner);

        // 3.1在父组件中可以主动调用子组件的对象方法
        this.$refs.banner.bannerClick()

        // 3.2获取banner组件实例，获取banner组件元素
        // 组件实例有一个$el可以拿到跟元素
        console.log(this.$refs.banner.$el);

        // 3.3，如果banner template是多个根，拿到的是第一个node节点
        // 打印出来可以拿到想要的信息 如文本节点下个元素 nextElenentSibling等
        console.log(this.$refs.banner.$el.nextElementSibling);

        // vue3允许多个根，但最好写一个
        // 开发里面最好让组件只有一个根元素

        // 4.组件实例还有两个属性 （了解）
        console.log(this.$parent);//获取父组件
        console.log(this.$root);//获取根组件

        // 注意vue3已经移除了$children的属性，现在不能用了。获取组件下的所有子组件或者元素


      }
    }
  }
</script>

<style scoped>

</style>