<template>
  <div class="home">
    <!-- 1.在模板中直接拿到getters -->
    <h2>doubleCounter: {{ $store.getters.doubleCounter }}</h2>
    <h2>userTotalAge: {{ $store.getters.totalAge }}</h2>
    <h2>message: {{ $store.getters.message }}</h2>
    
    <!-- 根据id获取某个朋友的信息 -->
    <h2>id-111的朋友信息: {{ $store.getters.getFriendId(111) }}</h2>
    <h2>id-112的朋友信息: {{ $store.getters.getFriendId(112) }}</h2>
  </div>

</template>

<script>
  import { mapState } from 'vuex';
import store from '@/store';

  
  // options api 
  export default {

  }
</script>


<script setup>
  
</script>

<style scoped>

</style>