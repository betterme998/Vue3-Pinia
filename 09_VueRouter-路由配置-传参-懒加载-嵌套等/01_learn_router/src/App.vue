<template>
  <!-- 1.安装vue-router库：npm install vue-router -->
  <!-- 2.在router文件夹配置所有路由映射关系 -->
  <div class="app">
    <h2>App Content</h2>
    <div class="nav">
      <!-- 提供了切换组件的标签 -->
      <!-- 会自动渲染成a元素，点击可以跳转到对应的页面 -->
      <!-- 加上replace 就变成替换路径了，每次跳转不会记录到历史当中了 -->
      <router-link to="/home" replace>首页</router-link>
      <!-- <router-link to="/about">关于</router-link> -->
      <!-- to属性传入对象  一般不传对象-->
      <router-link to="/about">关于</router-link>
      <!-- 切换到用户的路径不是简单的/user, 应该是/user/xxx  这时要使用动态路由 -->
      <router-link to="/user/123">用户</router-link>
      <router-link to="/user/321">用户2</router-link>
      <!-- 在实际中，跳转到订单页面有前提条件，必须登录 -->
      <router-link to="/order">订单</router-link>

      <!-- 其他元素跳转 -->
      <span @click="homespanClick">首页</span>
      <button @click="aboutBtnClick">关于</button>
    </div>
    <!-- 用来展位的 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
// 拿到router
import { useRouter } from "vue-router"
const router = useRouter()

  // 监听元素的点击
  function homespanClick() {
    // 跳转到首页
    // router.push("/home")
    router.push({
      path: "/home"
    })
  }
  function aboutBtnClick() {
    // 跳转到关于
    // router.push("/about")
    router.push({
      path: "/about",
      // 传入参数
      query:{
        name:"why",
        age:18
      }
    })

  }
</script>

<style>
  /* router-link标签激活后自动添加的class */
  .router-link-active {
    color: red;
    font-size: 20px;
  }
</style>

<!-- 路由使用步骤 -->
<!-- 
  1.第一步：创建路由需要映射的组件（打算显示的页面）
  2.第二步：通过createRouter创建路由对象，并且传入routes和history模式；
    .配置路由映射：组件和路径映射关系的routers数组；
    .创建基于hash或者history的模式
  3.第三步：使用app注册路由对象（use方法）
  4.第四步：路由使用：通过<router-link>和<router-view>

 -->

 <!-- 
    路由的默认路径
      默认情况下，进入网站的首页，我们希望<router-view>渲染首页的内容；
      但是我们的实现中，默认没有显示首页组件，必须让用户点击才可以；
    如何可以让路径默认跳到首页，并且<router-view>渲染首页组件呢？
      我们在routes中又配置了一个映射
        path配置的根路径：/
        redirect是重定向，也就是我们将根路径重定向到/home的路径下，这样就可以得到我们想要的结果
  -->

  <!-- 
    router-link
    .router-link事实上有很多属性可以配置：
      .to属性
        .传入是一个字符串，或者是一个对象

      .replace属性
        .设置replace属性的话，当点击时，会调用router.replace(),而不是router.push();

      .active-class属性：
        .设置激活a元素后应用的class，默认是router-link-active

      .exact-active-class属性：
        .链接精准激活时，应用于渲染的<a>的class，默认是router-link-exact-active
      
   -->

   <!-- 路由懒加载
    .当打包构建应用时，JavaScript包会变得非常大，影响页面加载：
      .如果我们能把不同路由对应的组件分割成不同的代码块，然后当路由被访问的时候加载对应组件，这样就会更加高效；
      .也可以提高首屏的渲染效率
    .其实这里还是我们前面讲到过webpack的分包知识，而Vue Router默认支持动态来导入组件；
      .这是因为component可以传入一个组件，也可以接收一个函数，该函数需要放回一个promise；
      .而import函数就是返回一个Promise
    -->

    <!-- 
      打包效果分析
      .我们看一下打包后的效果；
      .我们会发现分包是没有一个很明确的名称的，其实webpack3开始支持对分包进行命名
      加上魔法注释可以命名
      /* webpackChunkName: 'about' */ 
     -->

     <!-- 路由的其他属性
      .name属性：路由记录独一无二的名称；
      .meta属性：自定义的数据

    -->

    <!-- 动态路由基本匹配
      .很多时候我们需要将给定匹配模式的路由映射到同一个组件
        .例如，我们可能有一个User组件，它应该对所有用户进行渲染，但是用户的id是不同的；
        .在vue Router中，我们可以在路径中使用动态字段实现，我们称之为 路径参数；

      .在router-link中的to路径后面加上参数

      获取动态路由的值
      .那么在User中如何获取到对应的值呢？
        .在template中，直接通过$ROUTE.params获取值；
          在created中，通过this.$route.params获取值；
          在setup中，我们要使用vue-router库给我们提供的一个hook useRoute；
            该Hook会返回一个route对象，对象中保存着当前路由相关的值
    -->

    <!-- NotFound
      对于那些没有匹配到的路由，我们通常会匹配到固定某个页面
        .比如NotFound的错误页面中，这个时候我们可编写一个动态路由用于匹配所有的页面；
      
      .我们可以通过$route.params.pathMatch获取传入的参数：

    -->

    <!-- 路由的嵌套
      .什么是路由的嵌套呢？
        。目前我们匹配的Home,About,User等都属于第一层路由，我们在他们之间可以来回进行切换
      .但是，我们Home页面本身，也可能会在多个组件之间来回切换
        .比如Home包括Product，Message，它们可以在Home内部来回切换；
        .这个时候我们就需要使用嵌套路由，在Home中也使用router-view来占位之后需要渲染的组件
    -->

    <!-- 编程式导航
      代码的页面跳转

      query方式的参数
      .我们也可以通过query的方式来传递参数；
      .在界面中通过$route.query来获取参数
    -->

    <!-- 
      替换当前的位置
      使用push的特点是压入一个新的页面，那么在用户点击返回时，上一个页面还可以回退，但是如果我们希望当前页面是一个替换操作。那么可以使用replace
     -->

     <!-- 动态添加路由
      .某些情况下我们可能需要动态的来添加路由
        .比如根据用户不同的权限，注册不同的路由
        .这个时候我们可以使用一个方法addRoute；

      .如果我们是为route添加一个children路由。那么可以传入对应的name

      动态管理路由的其他方法（了解）
      
    -->