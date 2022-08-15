<template>
  <div>
    <h2 class="title">my app</h2>
    <app-header-vue></app-header-vue>
  </div>
</template>

<script>
import AppHeaderVue from './components/AppHeader.vue';
  export default {
    components: {
      AppHeaderVue
    }
  }
</script>

<style scoped>
  .title{

  }
</style>