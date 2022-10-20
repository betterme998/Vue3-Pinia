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
let reactiveFns = null
function watchFn(fn) {
  reactiveFns = fn
  fn()
  reactiveFns = null
}

// 封装一个函数：负责通过obj的key获取对应的Depend对象
const objMap = new WeakMap()
function getDepend(obj, key) {
  // 根据对象obj找对对应的map对象
  let map = objMap.get(obj)
  if(!map){
    map = new Map()
    objMap.set(obj, map)
  }
  
  // 2.根据key，找到对应的depend对象
  let dap = map.get(key)
  if (!dep) {
    dep = new Depend()
    map.set(key,dep)
  }
  return dep
}


// 监听数据变化
// 方案一：Object.definProperty() -vue2
Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj,key,{
    set:function(newValue) {
      value = newValue
      const dep = getDepend(obj,key)
      dep.notify()
    },
    get: function() {
      
      const dep = getDepend(obj,key)
      dep.addDepend(reactiveFns)
      return value
    }
  })
})

// 收集函数


// 修改obj的属性，调用函数
console.log("name发生变化---------------");
obj.name = "kobe"
console.log("age发生变化---------------");
obj.age = 20