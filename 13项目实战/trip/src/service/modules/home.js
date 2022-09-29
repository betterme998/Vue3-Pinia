// 导入封装后的axios
import hyRequest from "../request/index"
export function getHomeHotSuggests() {
  return hyRequest.get({
    url:"/home/hotSuggests"
  })
}