import { createApp } from 'vue'
// import { sum } from './utils/math';
// 修改App.vue文件，演示不同文件代码
// import App from "./01_组件的嵌套使用(重要)/App.vue";
// import App from "./05_组件插槽-基本使用(掌握)/App.vue";
// import App from "./06_组件插槽-具名插槽(掌握)/App.vue";
// import App from "./07_组件插槽-作用域插槽(理解，高级的)/App.vue";
// import App from "./08_Provide和Inject(了解)/App.vue";
// import App from "./10_生命周期函数演练(重要)/App.vue";
// import App from "./11_ref获取元素组件(掌握)/App.vue";
// import App from "./12_动态组件的使用(了解)/App.vue";
// import App from "./13_Keep-Alive的使用(理解)/App.vue";
// import App from "./14_异步组件的使用(了解)/App.vue";
// import App from "./15_组件的v-model(了解)/App.vue";
import App from "./16_组件的混入Mixin(了解)/App.vue";





// 这个最终打包会打包到哪里？ app.js里
// sum(20, 30)
// import函数可以让webpack对导入文件进行分包处理
// 输入npm run build 打包后打开dist文件夹，可以发现通过import函数导入的会进行分包处理
// import("./utils/math").then(res => {
//   res.sum(20, 30)
// })



const app = createApp(App)
// 全局混入mixin
// 它会混入到所有的组件当中
app.mixin({
  created() {
    console.log("全局混入 mixin created");
  }
})

app.mount('#app')
