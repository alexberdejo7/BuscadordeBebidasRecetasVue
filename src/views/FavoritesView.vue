
<script setup>
import Recetas from '../components/Recetas.vue'
import { useFavoritosStore } from '../stores/favoritos';


const favoritos = useFavoritosStore()



</script>

<template>
  <h1 class="text-5xl p-2 font-extrabold">Favoritos</h1>

      <p v-if="favoritos.noFavoritos"
      class="my-20 p-2 text-2xl text-center font-bold italic"
      >
      No se encontraron favoritos</p>

  <div class=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 p-5 my-10 gap-10">
    <Recetas
      v-for="receta in favoritos.favoritos"
      :receta="receta"
      :key="receta.idDrink"

    />

  </div>
</template>



