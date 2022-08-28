import { ref } from "vue";
export default function useCounter() {
  let counter = ref(100);
  const increment = () => {
    // 这里要改变它的值时要使用.value
    counter.value++
  }
  const decrement = () => {
    counter.value--
  }

  return { counter, increment, decrement}
}