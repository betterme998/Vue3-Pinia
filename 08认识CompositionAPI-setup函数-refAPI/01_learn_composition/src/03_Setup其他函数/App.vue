<template>
  <div>
    <h2>App: {{info}}</h2>
    <show-info-vue :info="info" @changeInfo="changeInfo"></show-info-vue>
  </div>
</template>

<script>
import { reactive } from 'vue';
import ShowInfoVue from './ShowInfo.vue';
  export default {
    components:{
      ShowInfoVue
    },
    setup() {
      // 本地定义多个数据，都需要传递给子组件
      const info = reactive({
        name: "why",
        age: 18,
        height: 1.88
      })

      function changeInfo(payload) {
        info.name = payload
      }

      return {
        info,
        changeInfo
      }
    }
    
  }
</script>

<style scoped>

</style>\