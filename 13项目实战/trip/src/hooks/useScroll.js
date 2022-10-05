import { ref, onUnmounted, onMounted, onActivated, onDeactivated } from "vue"
// 导入第三方节流库
import {throttle} from 'underscore'


export default function useScroll() {
  // 是否达到底部
  const isReachBottom = ref(false)
  // 滚动的位置
  const scrollTop = ref(0)
  // 可以滚动的高度
  const scrollHeight = ref()
  // 理想屏幕高度
  const clientHeight = ref(0)

  // 监听window创建的滚动
  // 1.当我们离开页面时，我们移除监听
  // 2.如果别的页面也进行监听，会编写重复的代码
  const scrollListenerHandler = throttle(() => {
    console.log(1);
    // 拿到当前屏幕的理想高度
    clientHeight.value = document.documentElement.clientHeight
    // 拿到滚动了多少scrollTop
    scrollTop.value = document.documentElement.scrollTop
    // 拿到总共可以滚动的高度
    scrollHeight.value = document.documentElement.scrollHeight
    // 当scrollHeight <= scrollTop + clientHeight 时滚动到了底部
    if (clientHeight.value + scrollTop.value >= scrollHeight.value) {
      //滑动到底部请求数据
      isReachBottom.value = true
    }
  }, 100) 
  // 过载后进行监听
  onMounted(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })
  onActivated(() => {
    window.addEventListener("scroll", scrollListenerHandler)
  })
  // 离开页面移除监听
  onUnmounted(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })
  onDeactivated(() => {
    window.removeEventListener("scroll", scrollListenerHandler)
  })

  // 返回是否到达底部
  return { isReachBottom, clientHeight, scrollTop, scrollHeight }
}