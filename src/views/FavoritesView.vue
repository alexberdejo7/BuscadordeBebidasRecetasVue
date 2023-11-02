
<script setup>
import Recetas from '../components/Recetas.vue'
import { useFavoritosStore } from '../stores/favoritos';


const favoritos = useFavoritosStore()



</script>

<template>
  <h1 class="text-5xl font-extrabold">Favoritos</h1>
  <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-5 my-10 gap-10">
    <Recetas
      v-for="receta in favoritos.favoritos"
      :receta="receta"
      :key="receta-idDrink"

    />

  </div>
</template>



