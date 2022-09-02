<template>
  <div>
    <h2>Home计数：{{ counter }}</h2>
    <button @click="increment">+1</button>
    <button @click="decrement">-1</button>


    <!-- 在首页也可能对标题就行频繁的点击，如首页-流行 首页-歌单 -->
    <button @click="popularClick">首页-流行</button>
    <button @click="hotClick">首页-热门</button>
    <button @click="songClick">首页-歌单</button>
    <hr>

    <div class="scroll">
      <h2>x:{{ srcollPosition.x }}</h2>
      <h2>x:{{ srcollPosition.y }}</h2>
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue';

  // 导入抽取出去的函数
  import useCounter from '../hooks/useCounter';
import useTitle from '../hooks/useTitle';
// 导入获取滚动条位置hooks
import useScrollPosition from '../hooks/useScrollPostion';
export default {
  setup() {
    // 下面代码逻辑就是计数器的代码，compositionAPI把他们放到一起，不想以前那么分散
    // 所以可以把下面代码抽离出来放到hooks文件 （放回调函数）当中，
    // const counter = ref(0)
    // function increment() {
    //   counter.value++
    // }
    // function decrement() {
    //   counter.value--
    // }

    // 1.使用抽取的函数
    const { counter, increment, decrement } = useCounter()

    // 2.修改标题
    // useTitle("首页")

    // 3.监听按钮点击
    // 这里的函数调用次数太多，不合理，可以这样
    const title = useTitle("首页")
    // 后面还要修改就直接改title
    function popularClick() {
      title.value = "首页-流行"
    }
    function hotClick() {
      title.value = "首页-热门"
    }
    function songClick() {
      title.value = "首页-歌单"
    }

    // 4.获取滚动的位置
    const { srcollPosition } = useScrollPosition()

    return {
      counter,
      increment,
      decrement,
      title,
      popularClick,
      hotClick,
      songClick,
      srcollPosition
    }
  }
}
</script>

<style>

</style>