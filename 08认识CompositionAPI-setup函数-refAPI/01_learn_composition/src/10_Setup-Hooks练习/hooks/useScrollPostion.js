import { ref } from "vue"; 
export default function useScrollPosition() {
  const scrollX = ref(0)
  const scrollY = ref(0)

  document.addEventListener("scroll", () => {
    scrollX.value = window.scrollX
    scrollY.value = window.scrollY
    console.log(scrollY.value,scrollX.value)
  })

  return { scrollX, scrollY }
}