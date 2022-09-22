// 1.导入createRouter,和createWebHashHistory （创建路由函数，和创建哈希函数）
import { createRouter, createWebHashHistory } from "vue-router";
// 2.创建router
const router = createRouter({
  // 3.传两个参数
  history: createWebHashHistory(), //配置哈希
  // 5.往里面填映射关系，在view里面创建页面后配置映射关系
  routes: [ //映射关系：path -> component (路径和组件之间的映射)
    {
      // 配置重定向
      path:"/",
      redirect:"/home"
    },
    {
      // 使用懒加载
      path:"/home",
      component: () => import("@/views/home/home.vue")
    },
    {
      // 使用懒加载
      path:"/favor",
      component: () => import("@/views/favor/favor.vue")
    },
    {
      // 使用懒加载
      path:"/order",
      component: () => import("@/views/order/order.vue")
    },
    {
      // 使用懒加载
      path:"/message",
      component: () => import("@/views/message/message.vue")
    }
  ]
})

// 4.导出路由,并在main.js使用
export default router