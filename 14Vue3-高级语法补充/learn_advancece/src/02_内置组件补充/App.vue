<template>
  <div class="app">
    <!-- 内置组件 多用在异步 -->
    <suspense>
      <!-- default 可以显示就显示default -->
      <template #default>
        <async-home/>
      </template>

      <!-- default 不可以显示就显示fallback -->

      <template #fallback>
        <h2>Loading</h2>
      </template>
    </suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from "vue";

// 异步组件，
const AsyncHome = defineAsyncComponent(() => import("./AsyncHome.vue"))
</script>

<style scoped>

</style>