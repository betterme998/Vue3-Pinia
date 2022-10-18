<!-- 
  template最终会转成rander函数-再由randee函数生成vnode，形成组件是。rander函数再script中使用
 -->


 <!-- 使用options API -->
<script>
import { h } from 'vue'
  export default {
    // 直接使用rander函数
    render() {
      // h()函数传入三个参数 1.标签，2.属性（对象），3.内容（数组，组件，string）
      return h("div", { className: "app" }, [
        h("h2",{ class: "title" }, "我是标题"),
        h("p",{ class: "content" }, "我是内容，哈哈哈"),
      ])
    }
  }
</script>
<script setup>

</script>

<style scoped>

</style>