<!-- 
  1.组件的生命周期 (必须掌握)
    1.1.认识生命周期
      什么是生命周期呢？
        .生物学上，生物生命周期指的是一个生命体在生命开始到结束周而复始所经历的一系列变化过程
        .每个组件都可能会经历创建，挂载，更新，卸载等一系列的过程；
        .在这个过程中的某一个阶段，我们可能会想要添加一些属于自己的代码逻辑（比如组件创建完后就请求一些服务器数据）；
        .但是我们如何知道目前组件正在哪一个过程呢？Vue给我们提供了生命周期函数

      生命周期函数：
        .生命周期函数是一些钩子函数（回调函数）,在某个时间会被Vue源码内部进行回调；
        .通过对生命周期的回调，我们可以知道目前组件正在经历什么阶段
        .那么我们就可以在该生命周期中编写属于自己的逻辑代码了；

      生命周期的流程
        当创建vue实例并挂载app = Vue.createApp(option) app.mount(el) 当完成初始化操作之后，会回调生命周期 beforCreate （组件还没有被创建出来回调的函数）
        回调完beforCreate后 会创建组件实例，创建后回调created 生命周期，（表示组件已经被创建完啦，但是没有挂载到app的tempplate中），当完成created后，会
        进行判断，判断是否有template，因为组件实例被创建,组件本身又有render函数返回template，这些template也需要被解析，当模板准备被编译的时候，会看template选项 如果有template
        会将template变成渲染函数，渲染函数就会返回vnode，如果没有template就会编译el的innerHTML至模板。
          有模板之后就可以挂载到组件app上面，在挂载之前会先进行beforeMount （就是还没有挂载时执行的生命周期函数），当挂载
        好了之后会执行mounted （挂载完毕执行的生命周期函数），挂载好后就已经在虚拟dom上面，之后根据算法将虚拟dom渲染成真实dom
        生成了真实dom后，改变数据时，会在改变之前调用beforeUpdate（数据改变之前调用的生命周期），数据发送改变就会根据数据生成
        新的vnode，虚拟dom发送改变就会触发diff算法渲染成真实dom。更新完真实dom会触发updated（数据更新完成后触发的生命周期）
          当组件不需要时会被销毁掉，销毁之前会触发beforeUnmount生命周期（组件销毁前执行的生命周期），当虚拟dom被销毁后又会
        触发unmount生命周期函数（组件销毁后执行的生命周期），然后销毁实例。

        总结：
        当某个地方用到了组件，不管是根组件还是其他组件：
        beforCreate  ;//在创建之前调用
        1.   //会先创建组件实例->instance (js对象) 
        create ;创建完成回调 （重要 1.发送网络请求 2.事件监听）
        2.template模板编译
        beforMount
        3.挂载到虚拟DOM
        虚拟DOM->真是DOM->界面看到
        mounted （重要 元素已经被挂载，再mounted获取dom，使用dom）
        4.数据更新 
        beforeUpdate
        根据最新数据生成Vnode，再生成真实dom
        updated
        5.不再使用
        beforUnmount
        将之前挂载再虚拟DOM中VNode从虚拟DOM移除，diff算法发现虚拟dom发生改变，改变真实dom
        unmounted（相对重要 回收操作 1.取消事件监听）
        将组件实例销毁掉
 -->
<template>
  <div>
    <h2>{{message}}-{{counter}}</h2>
    <button @click="message = 'hello world'">修改message</button>
    <button @click="counter++">修改counter</button>

    <div>
      <home v-if="isShowHome"></home>
      <button @click="isShowHome = !isShowHome">显示Home</button>
    </div>
  </div>
</template>

<script>
import Home from './Home.vue'
export default {
  data() {
    return {
      message: 'hello app',
      counter: 0,
      isShowHome:true
    }
  },
  components: {
    Home
  },
  // 1.组件被创建之前
  beforeCreate() {
    console.log('beforeCreate');
  },

  // 2.组件被创建完成
  created() {
    console.log("组件被创建完成啦");
    console.log('1.发送网络请求，请求数据');
    console.log('2.监听eventbus事件');
    console.log('3.监听watch数据');
  },

  // 3.组件template准备被挂载
  beforMount() {
    console.log('beforMount');
  },

  // 4.组件template被挂载： 虚拟DOM -> 真实DOM
  mounted() {
    console.log('mounted');
    console.log('1.获取DOM');
    console.log('2.使用DOM');
  },

  // 5.数据发生改变
  // 5.1准备更新dom，数据已经改了。还没有更新dom
  beforeUpdate() {
    console.log("beforeUpdate");
  },
  // 5.2更新DOM
  updated() {
    console.log('updated');
  },

  // 6准备卸载VNode->dom元素
  // 6.1卸载之前
  beforeUnmount() {
    console.log('beforeUnmount');
  },
  // 6.2DOM元素卸载完成
  unmounted() {
    console.log('unmounted');
  }

  // 为了演示unmount创建home组件
}
</script>

<style>

</style>