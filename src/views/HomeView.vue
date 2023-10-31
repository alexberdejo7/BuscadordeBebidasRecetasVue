
<script setup>
import { useBebidasStore } from '../stores/bebidas';
import Recetas from '../components/Recetas.vue';

const bebidas = useBebidasStore()
</script>

<template>
  <h1 class="text-5xl font-extrabold">Recetas</h1>

  <div class="grid grid-cols-1 md:grid-cols-2 my-10 gap-10">
    <Recetas
    v-for="receta in bebidas.recetas"
    :receta="receta"
    :key="receta.idDrink"
      

    />
  </div>
</template>



