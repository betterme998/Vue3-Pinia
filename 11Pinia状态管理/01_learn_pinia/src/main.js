import { createApp } from 'vue'
import App from './App.vue'
// 导入pinia并使用
import pinia from './stores/index.js'

createApp(App).use(pinia).mount('#app')
