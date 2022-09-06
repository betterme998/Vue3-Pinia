import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../Views/Home.vue'
import About from '../Views/About.vue'
// 1.创建router对象: 映射关系
// .routes映射关系
// .history修改url的模式（hash/history）

// 2.让路由对象生效
// .app.use(router)

// 3..router-view的占位
// 4.router-link进行路由的切换
const router = createRouter({
  // 必须指定采用的模式：hash
  history:createWebHashHistory(),
  // 映射关系
  routes: [
    { path: "/home", component: Home },
    { path: "/about", component: About }

  ]
})

// 2.导出router，并在main.js中使用
export default router


