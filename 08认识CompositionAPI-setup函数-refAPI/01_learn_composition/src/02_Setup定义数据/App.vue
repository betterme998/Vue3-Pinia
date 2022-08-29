<template>
  <div>
    <h2>message: {{ message }}</h2>
    <button @click="changMessage">修改message</button>
    <hr>
    <h2>账号： {{  account.username }}</h2>
    <h2>密码： {{  account.password }}</h2>
    <button @click="changeAccount">修改账号</button>
    <hr>
    <!-- 默认情况下在template中使用ref时，vue会自动对其进行解包（取出value） -->
    <h2>当前计数： {{ counter }}</h2>
    <button @click="increment">+1</button>
    <hr>
    <!-- 深层嵌套，使用时不需要.value -->
    <h2>当前计数：{{ info.counter }}</h2>

    <!-- 深层嵌套，修改时需要.value -->
    <button @click="info.counter.value++">+1</button>
  </div>
</template>

<script>
  // 导入reactive 引入ref
  import { reactive, ref } from "vue"
  export default {
    setup() {
      // 1.定义普通的数据:可以正常的被使用
      // 缺点:数据不是响应式的
      let message = "Hello World"
      // 代替methods中定义的方法
      function changMessage() {
        message = "你好啊，李银河"
        console.log(message);
      }

      // 2.定义响应式的数据
      // 2.1.reactive函数 定义的数据，是响应式的。：定义复杂类型的数据
      // 传入一个对象
      const account = reactive({
        username: "betterme",
        password: "123456"
      })
      // 代替methods中定义的方法
      function changeAccount() {
        account.username = "kobe"
      }

      // 2.2.ref函数：定义简单类型的数据（也可以定义复杂类型的数据）
      // counter成定义响应式数据
      // 如果我们只是一个很普通的数据，使用reactive有点麻烦，这时用ref函数
      const counter = ref(0)
      function increment() {
        // ref函数返回一个可变的响应式对象，该对象作为一个响应式的引用维护着它内部的值，这就是ref名称的来源
        // 它内部的值是在ref的value属性中被维护的
        // 注意：template会自动解包，不要.value
        // 1.在模板中引入ref的值时，Vue会自动帮助我们进行解包操作，所以我们并不需要在模板中通过ref.value的方式来使用
        // 2.但在setup函数内部，它依然是一个ref引用，所以对其进行操作时，我们依然需要使用ref.value的方式
        counter.value++
      }

      // 3.ref是浅层解包
      // Ref自动解包（测试已经修改）
      // 模板中的解包是浅层的解包，如果我们的代码是下面的方式；
      // 当值放到对象中时template就要使用.value  vue3.1时，但已经改了
      // 不过，如果ref值放到对象中，然后修改值时要加上.value。才能修改（就是展示的时候正常展示，要修改必须.value）()
      const info = {
        counter
      }


      

      // template必须使用setup的返回值
      return {
        message,
        changMessage,
        account,
        changeAccount,
        counter,
        increment,
        info
      }
    }
  }
</script>

<style scoped>

</style>