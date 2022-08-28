// 混入是一个普通的对象
// 然后在要混入的组件中导入，这里在home，about，Category里面混入，去这些页面
export default {
  data() {
    return {
      message: "Hello World"
    }
  },
  created() {
    console.log("message: ", this.message);
  }
}