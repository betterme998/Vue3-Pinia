// 下载完后导入axios
import axios from 'axios'

// 使用axios发送网络请求,request函数传入一个配置
// 1.发送request请求
axios.request({
  // 请求地址
  url: "http://123.207.32.32:8000/home/multidata",
  // 默认发送get请求
  method:"get"
  // 在外部调用zhen方法
}).then(res => {
  console.log(res.data);
})

// 2.发送get请求(写法一),先传入url，在传入配置
// axios.get("http://123.207.32.32:9001/lyric?id=500665346").then(res => {
//   console.log("res:",res.data);
// })
// 发送get请求(写法二)
axios.get("http://123.207.32.32:9001/lyric",{
  // 配置传入参数,这会拼接到url后面
  params:{
    id:500665346
  }
}).then(res => {
  console.log("res:",res.data);
})

// 3.发送post请求（第一种写法）,接收三个参数,先传入url，在传入data，在传入配置
// axios.post("http://123.207.32.32:1888/02_param/postjson",{
//   name: "coderwhy",
//   password: 123456
// }).then(res => {
//   console.log("post请求登入res：",res.data);
// })
// 3.发送post请求（第二种写法）
    axios.post("http://123.207.32.32:1888/02_param/postjson",{
      // 第二个data参数直接写在配置里面，内部会判断
      data: {
        name: "coderwhy",
        password: 123456
      }
    }).then(res => {
      console.log("post请求登入res：",res.data);
    })
