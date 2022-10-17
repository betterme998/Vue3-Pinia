import { createApp } from 'vue'
import App from './02_内置组件补充/App.vue'
import useDirectivs from "./01_自定义指令/directives/index"


const app = createApp(App)
useDirectivs(app)
app.mount('#app')