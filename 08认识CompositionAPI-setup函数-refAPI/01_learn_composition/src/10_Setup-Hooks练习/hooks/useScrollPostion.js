import { reactive } from "vue"; 
export default function useScrollPosition() {
  const srcollPosition = reactive({
    x:0,
    y:0
  })

  document.addEventListener("scroll", () => {
    srcollPosition.x = window.scrollX
    srcollPosition.y = window.scrollY
  })

  return { srcollPosition }
}