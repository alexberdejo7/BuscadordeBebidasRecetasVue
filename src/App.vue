<script setup>
import Header from './components/Header.vue';
import {RouterView} from 'vue-router'

</script>

<template>
  <div>
  <Header />
  
  <main class="container mx-auto mt-10">
    <RouterView/>

  </main>

  </div>
</template>
