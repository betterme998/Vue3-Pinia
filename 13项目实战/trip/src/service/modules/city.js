import hyRequest from "../request/index.js"
export function getCityAll() {
  return hyRequest.get({
    url:"/city/all"
  })
}