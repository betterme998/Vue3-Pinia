import { createApp } from 'vue'
import router from './router/index.js'
import App from './App.vue'



const app = createApp(App)
// 使用路由
app.use(router)
app.mount('#app')