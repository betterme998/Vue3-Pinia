const obj = {
  name:"why",
  age:18
}




// 设计一个专门执行响应式的函数、
const reactiveFns = []
function watchFn(fn) {
  reactiveFns.push(fn)
  fn()
}

// 收集函数
watchFn(function foo() {
  console.log("foo:"+obj.name);
  console.log("foo:"+obj.age);
})
watchFn(function bar() {
  console.log("bar:"+obj.name + "hello");
  console.log("bar:"+obj.age + 10);
})

// 修改obj的属性，调用函数
obj.name = "kobe"

reactiveFns.forEach(fn => {
  fn()
})