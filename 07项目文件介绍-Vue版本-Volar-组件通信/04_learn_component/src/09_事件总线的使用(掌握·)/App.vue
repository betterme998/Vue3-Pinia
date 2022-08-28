<!-- 我们想要做的就是当homeBanner组件发生点击事件时，我们可以在app.vue中监听，甚至其他任意组件当中监听， -->
<!-- 所以homebanner组件要把事件发出去，一层一层传是非常麻烦的，所以要用事件总线，用第三方库 hy-event-store 下载 npm install hy-event-store -->
<!-- 事件总线 -->
<!-- 1.首先建立一个文件夹 utils  (工具)
      2.创建event-bus.js文件  跳过去
 -->
<template>
  <div class="app">
    <h2>App Message : {{ Message }}</h2>
    <home></home>
    <!-- 当我们移除一个组件时，要不它监听的事件总线移除 -->
    <button @click="isShowCategory = false">是否显示category</button>
    <category v-if="isShowCategory"></category>
  </div>
</template>

<script>
  import Category from './Category.vue'
  import Home from './Home.vue'
  // 3.// 我们要监听事件总线，需要导入创建的事件总线
  import evevtBus from './utils/event-bus';
  export default {
    components:{
      Home,
      Category
    },
    data() {
      return {
        Message:'hello world',
        isShowCategory:true
      }
    },
    // 生命周期
    created() {
      // 可以进行网络请求
      // 也可以进行事件监听
      // 4.拿到后对事件进行监听，用 .on方法
      // 接收传过来的参数
      // 注意这里要用箭头函数因为要让this指向created
      // 如果不写箭头函数，就要传三个参数，this指向
      // 只有那些跨很多层级的才使用全局事件中心，如果都用事件总线代码不利于管理
      evevtBus.on("whyEvent", (name, age, height)=>{
        this.Message = `name:${name}, age:${age}, height:${height}`
      })


      // 当组件被销毁时，我们必须要移除事件总线
      // 这里创建一个Category.vue文件 跳过去
      // 当我们点击按钮移除category组件时，移除事件总线
      // 在生命周期 unmounted中 
      // 移除的是那个就住那个里面写，跳到category

    }

  }
</script>

<style scoped>

</style>