// 1.导入createPinia
import { createPinia } from "pinia";
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 2.创建pinia
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)

// 导出pinia,并在main.js中导入
export default pinia