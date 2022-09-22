import { createApp } from 'vue'
import App from './App.vue'
// 导入路由并使用
import router from './router'

// 导入pinia并使用
import pinia from './stores'

// github上的第三方css样式重置
import "normalize.css"

// 自己定义的css样式包含-重置样式-公共样式-等
import "./assets/css/index.css"

createApp(App).use(router).use(pinia).mount('#app')
