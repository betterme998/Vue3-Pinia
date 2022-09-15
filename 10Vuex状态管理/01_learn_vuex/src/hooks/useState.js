import { computed } from "vue";
import { useStore, mapState } from "vuex";
export default function useState(mapper) {
  const store = useStore()
  const stateFnsObj = mapState(mapper)
  const newState = {}
  // 拿到mapState传过来的key值
  Object.keys(stateFnsObj).forEach(key => {
    // 通过stateFnsObj[key]拿到函数,更改this指向，并报错到newState
    newState[key] = computed(stateFnsObj[key].bind({ $store: store }))
  })
  // 返回保存的newState
  return newState
}