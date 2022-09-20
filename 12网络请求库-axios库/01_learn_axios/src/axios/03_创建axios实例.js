// 1.axios的创建实例
  // .为什么要创建axios的实例呢
    /*
      .当我们从axios模块中导入对象时，使用的实例是默认的实例；
      .当我们给实例设置一些默认配置时，这些配置就被固定了
      .但是后续开发中，某些配置可能会不太一样；
      .比如某些请求需要使用特定的baseURL或者timeout等
      .这个时候，我们就可以创建新的实例，并且传入该属于实例的配置信息
    */ 

// axios默认库提供给我们的实例对象（就是导入的axios就是一个实例对象，可以用它直接发送网络请求）
// axios.get("http://123.207.32.32:9001/lyric?id=500665346")

// 但在真实开发中，会另外创建额外的实例发送网络请求
// 创建axios实例，使用create方法会返回新的实例
// 可以传入默认的参数
// 优势在于每个请求对应着单独的实例，如果直接设置baseURL，就设置了所有的baseURL，不够灵活
const instance1 = axios.create({
  baseURL: "http://123.207.32.32:9001",
  timeout:6000,
  headers:{}
})
instance1.get("/lyric", {
  params: {
    id: 500665346
  }
}).then(res => {
  console.log('res:', res.data);
})

// 可以创建多个实例
const instance2 = axios.create({
  baseURL: "http://123.207.32.32:8000",
  timeout:10000,
  headers:{}
})

// 创建多个实例取决于项目根几个服务器进行沟通，以及每次的配置是不是一样，不同的数据来自不同的服务器时，创建多个实例
// 有助于维护网络请求这部分相关配置信息