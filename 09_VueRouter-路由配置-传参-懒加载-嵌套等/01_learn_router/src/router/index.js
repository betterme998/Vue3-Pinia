import { createRouter, createWebHashHistory, createWebHistory } from "vue-router";

// import Home from '../Views/Home.vue'
// import About from '../Views/About.vue'

// 路由懒加载
// 展示首页时并不是所有一起展示的，所以组件不需要一起被加载，需要的时候在加载，懒加载
// 这里和组件一样，使用import函数，会分包处理
// 打包时可以给打包的文件取名字，用到魔法注释 /* webpackChunkName: 'home' */,webpack的技巧
const Home = () => import(/* webpackChunkName: 'home' */"../Views/Home.vue")
// const About = () => import(/* webpackChunkName: 'about' */"../Views/About.vue")

// 1.创建router对象: 映射关系
// .routes映射关系
// .history修改url的模式（hash/history）

// 2.让路由对象生效
// .app.use(router)

// 3..router-view的占位
// 4.router-link进行路由的切换
const router = createRouter({
  // 必须指定采用的模式：hash
  // history:createWebHashHistory(),

  // 指定采用模式：history
  history:createWebHistory(),
  // 映射关系
  routes: [
    // redirect重定向
    {
      path: "/", 
      redirect: "/home"
    },
    { 
      name: "home",
      path: "/home",
      component: Home,
      // 自定义属性
      meta: {
        name:"why",
        age:18
      }
    },
    { 
      path: "/about",
      // 路由懒加载
      component: () => import(/* webpackChunkName: 'about' */"../Views/About.vue")
    },
    {
      // 动态路由
      // 用户的path路径不能写死，要加上/:id
      // 动态路由的路径不是写死的
      path: "/user/:id",
      component: () => import("../Views/User.vue")
    }

  ]
})

// 2.导出router，并在main.js中使用
export default router


