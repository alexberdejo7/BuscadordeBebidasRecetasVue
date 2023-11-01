<script setup>
import {useBebidasStore} from '../stores/bebidas'

const bebidas = useBebidasStore()

defineProps({
  receta: {
    type: Object
  }
})


</script>

<template>
    <div class="border shadow-lg ">
      <div class=" overflow-hidden rounded-2xl ">
        <img 
          class= "w-full hover:scale-110 transition-transform hover:rotate-1"
          :src="receta.strDrinkThumb" 
          :alt="'Imagen de '+ receta.strDrink">
        
      </div>

      <div>
        <h2 class="text-xl truncate font-extrabold"> {{ receta.strDrink }}</h2>

        <button
        type="button"
        class="bg-orange-500 rounded-md shadow-red-500 shadow-md hover:bg-orange-600 mt-5 w-full p-3 font-bold text-white text-xl"
        @click="bebidas.selectBebida(receta.idDrink)"
          >
          Ver Receta
        </button>

      </div>
    </div>
</template>



