export default function directiveFocus(app) {
  // 自定义全局指令
  app.directive("focus",{
    // 生命周期的函数（自定义指令）
    mounted(el) {
      el?.focus()
    }
  })
}