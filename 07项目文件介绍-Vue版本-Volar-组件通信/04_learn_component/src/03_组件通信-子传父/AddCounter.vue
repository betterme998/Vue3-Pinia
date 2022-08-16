<template>
  <div class="add">
      <button @click="btnClick">+1</button>
      <button @click="btnClick">+5</button>
      <button @click="btnClick">+10</button>
    </div>
</template>

<script>
export default {
  methods: {
    btnClick() {
      console.log('btnclick');
    }
  }
}
</script>

<style>

</style>