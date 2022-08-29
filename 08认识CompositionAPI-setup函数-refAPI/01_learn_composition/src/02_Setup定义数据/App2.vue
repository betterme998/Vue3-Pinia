<template>
  <div>
    <form action="">
      账号: <input type="text" v-model="account.username">
      密码: <input type="password" v-model="account.password">
    </form>
    <hr>
    <show-info-vue :name="name" :age="age"></show-info-vue>
  </div>
</template>

<script>
import { on } from 'events';
import { onMounted, reactive, ref } from 'vue';
import ShowInfoVue from './ShowInfo.vue';


  export default {
    components: {
      ShowInfoVue
    },
    setup() {
      // 定义响应式数据：reactive/ref
      // 强调：ref也可以定义复杂的数据
      const info = ref({})
      console.log(info.value);

      // 1.reactive的应用场景
      // 1.1.条件一：reactive应用于本地的数据(就是数据是本地产生的)
      // 1.2.条件二：多个数据之间是有关系的/联系 （聚合的数据，组织在一起会有特殊的作用） 比如：用户名和密码
      // 因为数据之间有关联所以定义到一块会好一些，这种场景使用reactive
      const account = reactive({
        username: "betterme",
        password: "123456"
      })


      // 2.ref的应用场景：其他的场景基本都用ref
      // 2.1.定义本地的一些简单数据
      const message = ref("Hello World")
      const counter = ref(0)

      // 2.2.定义从网络中获取的数据也是使用ref
      const musics = ref([])
      onMounted(() => {
        const serverMusics = ["海阔天空", "小苹果", "野狼"]
        musics.value = serverMusics
      })

      const name = ref("why")
      const age = ref(18)

      return {
        account,
        name,
        age
      }
    }
  }
</script>

<style scoped>

</style>