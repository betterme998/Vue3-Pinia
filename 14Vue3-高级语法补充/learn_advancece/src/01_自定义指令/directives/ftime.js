// 导入事件处理库 
import dayjs from "dayjs";

export default function directiveFtime(app) {
  app.directive("ftime", {
    mounted(el, bindings) {
      // 1.拿到时间戳，并转换为毫秒
      let timestamp = el.textContent
      if(timestamp.length === 10){
        // 时间戳为10位表示 秒，转换为毫秒
        timestamp = timestamp * 1000;
      }
      timestamp = Number(timestamp)
      // 2.获取传入的参数
      let value = bindings.value
      if (!value) {
        value = "YYYY-MM-DD"
      }

      // 2.拿到时间戳进行格式化
      const formatTime = dayjs(timestamp).format(value)
      el.textContent = formatTime
    }
  })
}