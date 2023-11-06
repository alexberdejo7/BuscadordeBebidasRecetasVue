
<script setup>
import { useBebidasStore } from '../stores/bebidas';
import Recetas from '../components/Recetas.vue';

const bebidas = useBebidasStore()
</script>

<template>
  <h1 class="text-5xl font-extrabold">Recetas</h1>

  <p v-if="bebidas.noRecetas"
      class="my-20 p-2 text-2xl text-center font-bold italic"
      >
      No se encontraron Recetas, utiliza el formulario</p>

  <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-5 my-10 gap-10">
    <Recetas
    v-for="receta in bebidas.recetas"
    :receta="receta"
    :key="receta.idDrink"
      

    />
  </div>
</template>



