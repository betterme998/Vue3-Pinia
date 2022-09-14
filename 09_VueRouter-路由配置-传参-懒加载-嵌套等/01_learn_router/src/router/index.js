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
      },
      // 嵌套路由
      children: [
        {
          path:"/home",//当这里为空路径时，推荐使用name
          redirect: "/home/recommend"
        },
        {
          path:"recommend",//相当于/home/recommend
          component: () => import("../Views/HomeRecommend.vue")
        },
        {
          path:"ranking",//相当于/home/ranking
          component: () => import("../Views/HomeRanKing.vue")
        }
      ]
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
    },
    {
      path: "/order",
      component: () => import("../Views/Order.vue")
      // 进入订单页面
      // 1.判断用户是否登录
      /* 
        2.根据逻辑进行不同的处理
          登录成功
            .直接进入订单页面
          没有登录
            .直接进入登录页面
            .用户登录成功，进入首页，在点击进入订单页面
      */
    //  上面这部分逻辑放到哪里？
    // 我们使用路由导航守卫
          
    },
    {
      path: "/login",
      component: () => import("../Views/Login.vue")
    },
    {
      // notfound
      // 如果匹配到任何不存在的路径，就自动显示下面的组件
      // pathMatch路径匹配，上面匹配不到的路径全部使用这个组件
      // path: "/:pathMatch(.*)",
      // 当我们在小括号后面加上*，就会对路径进行解析，组件内通过$route.params.pathMatch拿到的就是一个数组。已/进行分隔组成的数组
      path: "/:pathMatch(.*)*",

      component: () => import("../Views/NotFound.vue")
    }

  ]
})

// 动态管理路由
// 本来要先登录，拿到角色，这里直接写死
// 当不是管理员时isAdmin为false
let isAdmin = true
// 判断是否是管理员
if (isAdmin) {
  // 添加一个路由
  // 一级路由
  router.addRoute({
    path: "/admin",
    component: () => import("../Views/Admin.vue")
  })

  // 添加二级路由
  router.addRoute("home", {
    path: "vip",
    component: () => import("../Views/HomeSongs.vue")
  })
}

// 动态管理路由其他方法（了解）
// 删除路由有以下三种方法
// 方式一：添加一个name相同的路由，（之前叫name的路由会被覆盖掉）
// 方式二：通过removeRoute方法，传入路由的名称  router.removeRoute('about')
// 方式三：通过addRoute方法的返回值回调；
// const removeRoute = router.addRoute(routeRecord)
// removeRoute() 删除路由如果路由存在的话


// 路由的其他方法补充：
// router.hasRoute():检查路由是否存在
// router.getRoutes();获取一个包含所有路由记录的数组


// 路由导航守卫
  /*
    路由导航：从一个路由到另一个路由就是路由导航。
    守卫：就是拦截导航过程加上一次判断逻辑
    vue提供了拦截函数
    vue-router提供的导航守卫主要用来通过跳转或取消的方式守卫导航
    全局的前置守卫beforeEach是在导航触发时会被回调的；
    它有两个参数：
      .to：即将进入的路由Route对象
      .from： 即将离开的路由Route对象
    
    它有返回值
      false：取消当前导航
      不返回或undefined：进行默认导航
      返回一个路由地址：
        .可以是一个string类型的路径
        .可以是一个对象，对象中包含path，query，params等信息

    可选的第三个参数：next（不推荐使用）
  */

    // 拿到router,调用beforeEach （进行任何的路由跳转之前，传入的beforeEach中的函数都会被回调）
    router.beforeEach((to, from) => {
      console.log("beforeEach传入的函数被回调");
      // 需求：进入订单页面是，判断用户是否登录（登录成功localStorage保存token）
      // 情况一：用户没有登陆，那么跳转到登录页面登录
      // 情况二：用户已经登录，那么直接进入到订单也面
      // 1.进入任何页面，都跳转到登录页面
      // if(to.path !== "/login"){
      //   return "/login"
      // }
      // 2.进入订单管理页面时，判断用户是否登录
      const token = localStorage.getItem("token")
      if( to.path === "/order" && !token) {
        return "/login"
      }
    })
  
  // 其他导航守卫
  // vue-router还提供了很多的其他守卫函数，目的都是在某一个时刻给予我们回调，让我们可以更好的控制程序的流程或者功能；
  
  /*
    完整的导航解析流程
    导航被触发。
    在失活的组件里调用beforeRouteLeave守卫 （离开这个组件时跳转触发的回调）
    调用全局的beforeEach守卫
    在重用的组件里调用beforeRouteUpdata守卫
    在路由配置里调用beforeEnter （ router:[{path:'',component:'' beforeEnter(){} }]   ）
    解析异步路由组件   () => import("./viewa/xxxx.vue")
    在被激活的组件里调用beforeRouteEnter （this -> 获取不到组件实例的）
    beforeRouteEnter（next）{
      // 传入回调函数，这会在最后被回调
      // instance是组件实例
      next((instance) =>{

      })
    }
    调用全局的beforeResolve (异步组件被解析之后，在跳转之前 回调的函数)
    导航被确认 
    调用全局的afterEach钩子 
    出发DOM更新
    调用beforRouteEnter守卫中传给next的回调函数，创建好的组件实例会作为回调函数的参数传入
  */ 

// 2.导出router，并在main.js中使用
export default router


