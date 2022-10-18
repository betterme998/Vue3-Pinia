import { createApp } from 'vue'
// import App from './01_自定义指令/App.vue'
// import App from './02_内置组件补充/App.vue'
// import App from './03_安装插件/App.vue'
import App from './04_Render函数/App.vue'
import useDirectivs from "./01_自定义指令/directives/index"

// import router from "./router"

// 自定义指令方式一：
// const app = createApp(App)
// useDirectivs(app)

// // 安装插件
// // 方式一：1.传入对象
// // app.use()可以传入对象,但必须要install：function(){}
// app.use({
//   // 会自动执行，并传入app
//   install: function(app) {
//     console.log("传入对象的install被执行",app);
//   }
// })

// // 方式二：2.传入函数
// app.use(function(app){
//   console.log("传入的函数被执行",app);
// })
// app.mount('#app')

// use(router) 本质是传入一个对象，会调用router中的install函数
// 自定义指令的方式二：使用插件
createApp(App).use(useDirectivs).mount('#app')

