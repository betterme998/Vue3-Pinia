<template>
  <div>
    <h2>About组件</h2>
  </div>
</template>

<script>
export default {
  name:"about",
  unmounted() {
    // 当组件被切换时，会被销毁
    console.log("About组件 unmounted");
  }
}
</script>

<style>

</style>