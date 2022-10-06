// 只有这一个文件引入axios
import axios from "axios"

// 导入配置config
import { BASE_URL, TOMEOUT } from './config'

// 导入main store
import useMainStore from '@/stores/modules/main'
const mainStore = useMainStore()

// 封装一个类
class HYRequest {
  // 定义一个axios实例，并配置config
  // 这构造函数相当于调用这个类就执行的函数，并且传递参数进来
  constructor(baseURL, timeout=10000) {
    // 创建axios实例，并传入config配置
    this.instance = axios.create({
      baseURL,
      timeout
    })

    // 请求拦截
    this.instance.interceptors.request.use( config => {
    // 请求成功时开始动画
      mainStore.isLoading = true
      return config
    }, err => {
      mainStore.isLoading = false
      return err
    })
    this.instance.interceptors.response.use( res => {
      // 响应成功时结束动画
      mainStore.isLoading = false
      return res
    }, err => {
      mainStore.isLoading = false
      return err
    })
  }


  // 定义request方法传入config
  request(config){
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    // 直接用上面的request()并解构config配置
    return this.request({ ...config, method: "get" })
  }

  post(config) {
    return this.request({...config, method: "post"})
  }
}



// 这里要到处HYRequest类的实例
export default new HYRequest(BASE_URL, TOMEOUT)