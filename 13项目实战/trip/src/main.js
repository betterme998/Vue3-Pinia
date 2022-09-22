import { createApp } from 'vue'
import App from './App.vue'

// github上的第三方css样式重置
import "normalize.css"

// 自己定义的css样式包含-重置样式-公共样式-等
import "./assets/css/index.css"

createApp(App).mount('#app')
