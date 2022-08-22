<template>
  <div class="banner">
    <button @click="bannerBrnClick">banner按钮</button>
  </div>
</template>

<script>
  export default {
    methods: {
      bannerBrnClick() {
        console.log('banner按钮');
      }
    }
  }
</script>

<style scoped>

</style>