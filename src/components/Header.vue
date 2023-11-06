<script setup>
import {computed} from 'vue'
import {RouterLink, useRoute} from 'vue-router'
import {useBebidasStore} from '../stores/bebidas'
import { useNotificationStore } from '../stores/notification';


const route = useRoute()
const bebidas = useBebidasStore()
const notificaciones = useNotificationStore()

const HomePage = computed(() => route.name === 'inicio')
const handleSubmit = () => {

  if(Object.values(bebidas.search).includes('')) {
    notificaciones.$patch({
     text: "Todos los campos son obligatorios",
     show : true,
     error : true
    })
    return
  }

  bebidas.getRecetas()
}

</script>


<template>
<header 
  class="bg-slate-800"
  :class="{header : HomePage}"
>

  
  <div class="mx-auto container px-5 py-16">
    <div class="flex justify-between items-center">
      <div>
        <RouterLink
          :to="{name: 'inicio'}"
        >
          <img class="w-20" src="/img/logo.svg" alt="Logotipo" />

        </RouterLink>

      </div>

      
      <nav class="flex gap-4 text-white">
        <RouterLink
          :to="{name: 'inicio'}"
          class=" uppercase font-bold"
          active-class="text-orange-500"
        >
          Inicio
        </RouterLink>

        <RouterLink
          :to="{name: 'favorites'}"
          class=" uppercase font-bold"
          active-class="text-orange-500"
        >
          Favoritos
        </RouterLink>

      </nav>

    </div>
    

    <form class="md:w-1/2 2xl:w-1/3 bg-orange-500 my-32 p-8 rounded-lg shadow space-y-6 "
        v-if="HomePage"
        @submit.prevent="handleSubmit"
    >
      <div class="space-y-4">
        <label 
          class="block text-white uppercase font-extrabold text-lg"
          for="ingrediente"> Nombre o Ingredientes:</label>
        <input 
          type="text"
          id="ingrediente"
          class="p-2 w-full rounded-lg focus:outline-none"
          placeholder="Nombre o ingrediente: ej. Tequila, Vodka, etc.."
          v-model="bebidas.search.nombre"
          >

      </div>

      <div class="space-y-3">
        <label 
          class="block text-white uppercase font-extrabold text-lg"
          for="categoria"> Categoria:</label>
        <select 
          id="categoria"
          v-model="bebidas.search.categoria"
          class="p-2 w-full rounded-lg focus:outline-none"
        
          >
          <option value="">-- Selecciona una opcion --</option>
          <option 
              v-for="categoria in bebidas.categories"
              :key="categoria.strCategory"
              :value="categoria.strCategory"

          > {{categoria.strCategory}}
          </option>

        </select>
      </div>

      <input 
        type="submit"
        class="bg-orange-800 hover:bg-orange-900 cursor-pointer
        text-white font-extrabold w-full p-2  rounded-lg uppercase" 
        id=""
        >

    </form>

    </div>
</header>
</template>

<style>
.header {
  background-image: url('/img/bg.jpg');
  background-size: cover;
  background-position: center;
}
</style>


