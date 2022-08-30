<template>
  <div>
    <h2>ShowInfo: {{info}}</h2>
    <!-- 传过来的是对象的引用，这里修改会修改原对象  （相当于在子组件对父组件的值做了修改）-->
    <!-- 但这是不规范的
         vue里面有：单项数据流 （规范）（父组件传递给子组件的数据只能用不能改）
         如果想修改，必须发送事件，让父组件监听事件再修改

         因为传过来的是对象的引用，如果同时传给多个子组件，那么每个子组件都可以修改。就不知道是谁改的
         如果发送事件，父组件监听就明确知道哪里改了数据
    -->
    <!-- 代码没有错，但违背了单项数据流的规范 -->
    <button @click="info.name = 'kobi'">ShowInfo不规范按钮</button>

    <!-- 正确做法 :符合单项数据流-->
    <button @click="showInfobtnClick">ShowInfo规范按钮</button>
    <hr>

    <!-- 使用readonly的数据 -->
    <h2>ShowInfo: {{ roInfo }}</h2>
    <!-- 不规范按钮，会报警告 -->
    <button @click="roInfo.name = 'kobi'">ShowInfo不规范按钮,但是传过来的值被readonly包裹，所以改不了</button>

    <!-- 正确做法 -->
    <button @click="roInfobtnClick">roInfo规范按钮</button>

  </div>
</template>

<script>
  export default {
    props: {
      // reactive数据
      info:{
        type: Object,
        default: () => ({})
      },
      // readonly数据
      roInfo:{
        type:Object,
        default: () => ({})
      }
    },
    emits:["changeInfo", "changeRoInfoName"],
    setup(props, context) {
      function showInfobtnClick() {
        // setup里面没有this。
        context.emit("changeInfo", "kobe")
      }

      function roInfobtnClick() {
        // setup里面没有this。
        context.emit("changeRoInfoName", "james")
      }
      
      return {
      showInfobtnClick,
      roInfobtnClick
    }
    }
  }
</script>

<style scoped>

</style>