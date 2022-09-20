import { createApp } from 'vue'
import App from './App.vue'

// 下载完后导入axios
import axios from 'axios'

// 导入封装好的axios的类实例
import hyRequest from "./service/index"

createApp(App).mount('#app')


// 当再很多页面使用axios时，不会直接导入再使用。因为axios是第三方库，如果有一天不再维护，代码修改起来麻烦，耦合度太高
// 我们可以对axios多封装一层，封装一个HYRequest类 class HYRequest{},其他页面都用HYRequest，
// 如果有一个axios不再维护。那么直接修改HYRequest类就行啦，
// 在实际开发中都会进行封装

// 创建一个文件夹 service 只要和服务器相关的都放这里

// 使用封装好的axios类,使用request请求
hyRequest.request({
  url: "/lyric?id=500665346"
}).then(res => {
  console.log("res:", res);
})

// 使用封装好的axios类,使用get请求
hyRequest.get({
  url: "/lyric",
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res:", res);
})