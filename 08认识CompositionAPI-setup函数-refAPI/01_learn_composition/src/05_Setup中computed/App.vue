<template>
  <div>
    <h2>{{ fullname }}</h2>
    <button @click="setFullname">设置fullname</button>
    <h2>{{ scoreLevel }}</h2>
  </div>
</template>

<script>
  import { reactive, computed, ref } from 'vue'
  export default {
    setup() {
      // 1.定义数据
      const names = reactive({
        firstName: "kone",
        lastName: "bryant"
      })

      // const fullname = computed(() => {
      //   return names.firstName + " " +names.lastName
      // })
      const fullname = computed({
        set: function(newValue) {
          const tempName = newValue.split(" ")
          names.firstName = tempName[0]
          names.lastName = tempName[1]

        },
        get: function() {
          return names.firstName + " " +names.lastName
        }
      })

      function setFullname() {
        // computed返回的也是一个ref
        fullname.value = "why coder"
      }

      // 2.定义score
      const score = ref(89)
      const scoreLevel = computed(() => {
        return score.value >= 60 ? "及格":"不及格"
      })
      return {
        names,
        fullname,
        scoreLevel,
        setFullname
      }
    }
  }
</script>

<style scoped>

</style>