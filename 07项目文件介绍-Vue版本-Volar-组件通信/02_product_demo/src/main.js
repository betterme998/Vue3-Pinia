import { createApp } from 'vue' //不支持template
// import { createApp } from "vue/dist/vue.esm-bundler.js"
import App from './App.vue'
import "./utils/abc/cba/nba/index"
/*
  1.jsconfig.js的演示
    作用：给VSCode来进行读取，VSCode在读取到其中的内容时，给我们的代码更加友好的提示
  2.引入的vue的版本
  3.补充：单文件Vue style是有自己的作用域
  4.补充：vite创建一个Vue项目
*/

/*
  1.当我们直接创建一个App时，不通过 import App from './App.vue' 的方式导入时，浏览器不会渲染出来，并且会给出提示，提供了模板选项，但是在当前构建
  版本里面不支持，（默认导入的vue的版本不支持template选项），你可以使用import { createApp } from "vue/dist/vue.esm-bundler.js" 这个版本的vue

  在以前用脚手架创建项目时会让我们选择 runtime（相当于import App from './App.vue' ）或者 runtime + compile （编译template的）相当于（import { createApp } from "vue/dist/vue.esm-bundler.js"）


  但我们创建的App里涉及到template，那我们通过import App from './App.vue'引入的app不也涉及到template吗？那为什么创建的需要编译，引入的不需要呢？（答案在App.vue文件）
    在vue里直接编写所有元素 h2 div span 最终都会转换成 vnode （虚拟节点） 最终会形成树结构（虚拟DOM）然后虚拟再转换成真实dom
    那<div>123</div> 要转换成vnode 需要经过编译 compile 转换成函数 createVNode(),再调用函数转换成vnode
*/ 


// 这个过程 元素-》createVNode： 是由vue中的源码来完成的，在vue/dist/vue.esm-bundler.js地方引入源码，
// 那么源码里面必须包含compile代码，才能对template进行转换。
// 跳转回App.vue
// const App = {
//   // 将template 经过编译转换成 createVNode()函数 --》 调用函数变成 --》 VNode --》虚拟dom --》真实dom
//   // 那App.vue文件里呢？
//   // 跳转到单文件App.vue
//   template:`<h1>Hello vue3 app</h1>`, 
//   data() {
//     return {

//     }
//   }
// }

createApp(App).mount('#app')
