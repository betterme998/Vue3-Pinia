<!-- 在options API 中编写jsx -->
<!-- 指定语言 -->
<script lang="jsx">
import about from "./About.vue";
  export default {
    data() {
      return {
        counter:0
      }
    },
    render() {
      return (
        <div class="app">
          // 通过大括号拿到data,methods等的的值
          <h2>当前计数：{this.counter}</h2>
          <button onClick={this.increment}>+1</button>
          <button onClick={this.decrement}>-1</button>  
          // 使用组件
          <about/>
        </div>
      )
    },
    methods: {
      increment() {
        this.counter++
      },
      decrement() {
        this.counter--
      }
    }
  }
</script>

<style lang="less" scoped>

</style>