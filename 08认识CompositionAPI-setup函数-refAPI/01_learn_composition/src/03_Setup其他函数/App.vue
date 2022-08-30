<template>
  <div>
    <h2>App: {{info}}</h2>
    <show-info-vue :info="info" 
                   :roInfo="roInfo" 
                   @changeInfo="changeInfo"
                   @changeRoInfoName="changeRoInfoName">
                   
    </show-info-vue>
  </div>
</template>

<script>
  // readonly 创建的数据也是响应式的，但是不能被修改
import { reactive, readonly } from 'vue';
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

      // 使用readOnly包裹info
      // 如果单项传过去的数据被修改，那就使用readonly包裹再传
      const roInfo = readonly(info)

      function changeInfo(payload) {
        info.name = payload
      }

      function changeRoInfoName(payload) {
        // 注意这里只能该info，因为roinfo被readonly包裹了
        info.name = payload
      }


      return {
        info,
        changeInfo,
        roInfo,
        changeRoInfoName
      }
    }
    
  }
</script>

<style scoped>

</style>\