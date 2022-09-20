// 1.baseURL
const baseURL = "http://123.207.32.32:8000"

// 有多个网络请求，他们请求地址端口都一样，就是后面不同，如下
// 1.1.get:http://123.207.32.32:8000/home/multidata
// 1.2.get:http://123.207.32.32:8000/home.data
// 我们就可以抽离出相同部分，被抽离的部分就是baseURL

// 给axios实例配置公共的基础配置
// axios可以设置默认的baseURL，设置之后就会拼接相对的地址，完整的地址不处理
axios.defaults.baseURL = baseURL
// 还可以配置timeout
axios.defaults.timeout = 10000
// 还可以配置公共的head
axios.defaults.headers = {}

// 设置baseURL之后发送请求
axios.get("/home/multidata").then(res => {
  console.log("res:",res.data);
})

// 2.axios发送多个请求
// 只有两个请求都有结果，才会回调then函数
// 本质就是Promise.all
axios.all([
  axios.get("/home/multidata"),
  axios.get("http://123.207.32.32:9001/lyric?id=500665346"),
]).then(res => {
  console.log("res:",res);
})