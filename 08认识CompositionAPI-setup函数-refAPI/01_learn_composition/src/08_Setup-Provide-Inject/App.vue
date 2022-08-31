<template>
  <div>
    <show-info-vue></show-info-vue>
  </div>
</template>

<script>
  import { provide, ref } from 'vue';
  import ShowInfoVue from './ShowInfo.vue';
  export default {
    components:{
      ShowInfoVue
    },
    setup() {
      // 提供数据
      const name = ref("why")
      // 绑定ref是响应式的
      provide("name", name)
      // 绑定普通数据不是响应式的
      provide("age", 18)
    }
  }
</script>

<style scoped>

</style>