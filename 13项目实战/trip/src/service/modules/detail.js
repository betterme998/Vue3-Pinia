// 导入封装好的axios
import hyRequest from '../request'

// 导出详情页数据请求函数
export function getDatailInfos(houseId) {
  return hyRequest.get({
    url: "/detail/infos",
    params: {
      houseId
    }
  })
}