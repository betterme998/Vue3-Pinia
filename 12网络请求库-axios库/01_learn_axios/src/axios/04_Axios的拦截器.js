// 请求和响应拦截
// 在发送任何请求之前把请求拦截下来
// 对实例配置拦截器
// 分为请求拦截，响应拦截

// 请求拦截
// use()传入两个回调，请求成功回调，请求失败回调
axios.interceptors.request.use((config) => {
  // 请求成功回调
  // 请求成功时，会传入配置信息config，可以进行修改：如
  // config.headers["token"] = "coderwhy"
  // 修改完后需要返回回去
  // return config
  console.log('请求成功拦截');
  // 可能发送的操作
  // 1.开始loading的动画

  // 2.对原来的配置进行一些修改
  // 2.1.header
  // 2.2.认证登录：token/cookie
  // 2.3.请求参数进行转换

}, (err) => {
  // 请求失败回调
  // 请求失败会传过来一个err
  // 返回err
  console.log('请求失败拦截：',err);
  return err
})

// 响应拦截
// 响应拦截response的use() 也传入两个回调（成功回调，失败回调）
axios.interceptors.response.use((res) => {
  // 响应成功的拦截
  // 返回结果
  console.log('响应成功拦截');
  // 可能发送的操作
  // 1.结束loading动画
  // 2.对数据进行转化，再返回


  return res.data
}, (err) => {
  // 响应失败的拦截
  // 会传入失败err
  console.log('响应失败拦截:', err);
  return err
})

axios.get("http://123.207.32.32:9001/lyric?id=500665346").then(res => {
  console.log("res:", res);
}).catch(err => {
  console.log("err",err);
})
