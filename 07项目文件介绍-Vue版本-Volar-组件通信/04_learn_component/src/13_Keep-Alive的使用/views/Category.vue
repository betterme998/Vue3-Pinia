<template>
  <div>
    <h2>Category组件</h2>
  </div>
</template>

<script>
export default {
  name:"Category",
  unmounted() {
    // 当组件被切换时，会被销毁
    console.log("Category组件 unmounted");
  }
}
</script>

<style>

</style>