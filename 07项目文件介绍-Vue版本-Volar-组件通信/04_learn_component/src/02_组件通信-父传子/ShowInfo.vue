<template>
  <div class="infos">
    <!-- 大胡子函数可以访问到props里的数据 -->
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>身高：{{height}}</h2>
  </div>
</template>

<script>
  export default {
    // 接收父组件传递过来的属性
    // 1.数组语法
    // props:["name", "age", "height"]

    // 2.对象语法
    props: {
      name: {
        type:String, //限制类型
        default:'我是默认的name'  //设置默认值
      }, //限制类型
      age:{
        type:Number,
        default:20
      },
      height:{
        type:Number,
        default:0
      },
      // 默认值为对象，必须写成函数，函数来返回默认值
      friend: {
        type:Object,
        default:() => ({name:'jams'})
      },

      // 数组类型 default也得写成函数，函数来返回默认值
      hobbies: {
        type:Array,
        default: () => ['篮球','rap','唱跳']
      }
    }
  }
</script>

<style scoped>

</style>