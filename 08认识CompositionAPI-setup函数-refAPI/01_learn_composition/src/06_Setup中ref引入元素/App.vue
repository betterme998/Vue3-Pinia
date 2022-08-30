<template>
  <div>
    <!-- 1.获取元素 -->
    <h2 ref="tielRef">我是标题</h2>
    <button ref="btn">按钮</button>

    <!-- 2.获取组件实例 -->
    <show-info-vue ref="showInfoRef"></show-info-vue>
    <button @click="getElements">获取元素</button>
  </div>
</template>

<script>
  import { ref, onMounted } from 'vue';
  import ShowInfoVue from './ShowInfo.vue';
  export default {
    components:{
      ShowInfoVue
    },
    setup() {
      // template中要使用ref必须先创建，后返回出去。才能在类html标签中使用ref=“”
      const tielRef = ref() //创建h2的ref
      const btn = ref()//创建按钮的ref
      const showInfoRef = ref() //创建组件的ref

      // 获取template中ref的元素要使用生命周期函数
      onMounted(() => {
        console.log(tielRef.value);
        console.log(btn.value);
        console.log(showInfoRef.value); //proxy{...}
        console.log(showInfoRef.value.showInfoFoo); //拿到子组件的方法
      }) 

      // 直接拿拿不到
      function getElements() {
        console.log(tielRef.value);
      }
      return {
        tielRef,
        btn,
        showInfoRef
      }
    }
  }
</script>

<style scoped>

</style>