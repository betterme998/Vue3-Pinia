// 导入事件处理库 
import dayjs from "dayjs";

export default function directiveDtime(app) {
  app.directive("dtime", {
    mounted(el, bindings) {
      // 1.拿到时间戳，并转换为毫秒
      let timestamp = el.textContent
      // 2.获取传入的参数
      let value = bindings.value
      if (!value) {
        value = "YYYY-MM-DD HH:MM"
      }

      // 2.拿到时间戳进行格式化
      const formatTime = dayjs(timestamp).format(value)
      el.textContent = formatTime
    }
  })
}