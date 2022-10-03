// 导入封装后的axios
import hyRequest from "../request/index"

// 热门推荐请求函数
export function getHomeHotSuggests() {
  return hyRequest.get({
    url:"/home/hotSuggests"
  })
}

// 分类请求函数
export function getHomeCategories() {
  return hyRequest.get({
    url:"/home/categories"
  })
}