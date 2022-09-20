<template>

</template>

<script setup>

</script>

<style>

/* 
.安装axios
  npm install axios
.功能特点
  .在浏览器中发送XMLHttpRequests请求
  .在node.js中发送http请求
  .支持Promise API
  .拦截请求和响应
  .转换请求和响应数据
  .等等
.补充：axios名称的由来？个人理解
  .没有具体的翻译
  .axios：ajax i/o system

.axios请求方式
  .支持多种请求方式 config (配置)
    .axios(config)
    .axios.request(config)
    .axios.get(url[,config])
    .axios.delete(url[,config])
    .axios.head(url[,config])
    .axios.post(url[,data[,config]])
    .axios.put(url[,data[,config]])
    .axios.patch(url[,data[,config]])
  .有时候，我们可能需求同时发送两个请求
    .使用axios.all,可以放入多个请求的数组
    .axios.all([])返回的结果是一个数组，使用axios.spread可将数组[res1,res2]展开为res1，res2

.常见的配置选项
  .请求地址
    url:'/user'
  .请求类型
    method:'get'
  .请求路径
    baseURL:'http://www.mt.com/api'
  .请求前的数据处理
    transformRequest:[function(data){}]
  .请求后的数据处理
    transformResponse:[function(data){}]
  .自定义的请求头
    headers:{'x-Requested-With':'XMLHttpRequest'}
  .URL查询对象
    params:{id:12}
  .查询对象序列化函数
    .paramsSerializer:function(params){}
  .request body
    data:{key:'aa'}
  .超时设置
    timeout:1000
*/
</style>
