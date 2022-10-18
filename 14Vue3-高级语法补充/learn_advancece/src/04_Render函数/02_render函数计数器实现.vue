


 <!-- 使用options API -->
<script>
import { h } from 'vue'
import Home from "./Home.vue"
  export default {
    data() {
      return {
        counter:0
      }
    },
    // 直接使用rander函数
    render() {
      // h()函数传入三个参数 1.标签，2.属性（对象），3.内容（数组，组件，string）
      // 实现计数器
      return h("div", { className: "app" }, [
        h("h2",null,`当前计数：${this.counter}`),
        h("button",{ onClick: this.increment },"+1"),
        h("button",{ onClick: this.decrement },"-1"),
        // 渲染组件
        h(Home)
      ])
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
<script setup>

</script>

<style scoped>

</style>