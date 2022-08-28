<template>
  <div>
    <h2>{{ title }}</h2>
    <div class="contetn">
      <!-- 预留插槽 -->
      <slot>
        <!-- 插槽的默认值 -->
        <p>我是插槽默认值</p>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type:String,
      default:'我是默认值'
    }
  }
}
</script>

<style>

</style>