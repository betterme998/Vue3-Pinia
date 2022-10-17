<template>
  <div class="app">
    <div class="hello">
      <p class="content">
        <!-- 不希望组件被挂载到父组件的template中，直接挂载到body上面 -->
        <!--teleport内置组件 心灵传输 把组件挂载到指定位置  -->
        <teleport to="body">
          <hello-world/>
        </teleport>
      </p>
    </div>
  </div>
</template>

<script setup>
import HelloWorld from "./HelloWorld.vue"
</script>

<style scoped>

</style>