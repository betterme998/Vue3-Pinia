// 通过类收集依赖
class Depend {
  constructor() {
    this.reactiveFns = []
  }

  addDepend(fn) {
    if (fn) {
      this.reactiveFns.push(fn)
    }
  }

  notify() {
    this.reactiveFns.forEach(fn => {
      fn()
    })
  }
}

const obj = {
  name:"why",
  age:18
}

// 方案二：new Proxy() -vue3

// 设计一个专门执行响应式的函数、
const dep = new Depend()
function watchFn(fn) {
  dep.addDepend(fn)
  fn()
}


// 监听数据变化
// 方案一：Object.definProperty() -vue2
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj,key,{
    set:function(newValue) {
      value = newValue
      dep.notify()
    },
    get: function() {
      return value
    }
  })
})

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
console.log("name发生变化---------------");
obj.name = "kobe"
console.log("age发生变化---------------");
obj.age = 20