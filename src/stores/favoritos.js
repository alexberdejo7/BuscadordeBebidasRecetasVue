import { defineStore } from "pinia";
import {ref, watch, computed, onMounted} from 'vue'
import {useBebidasStore} from './bebidas'
import { useModalStore } from "./modal";


export const useFavoritosStore = defineStore('favoritos', () => {

    const modal = useModalStore()
    const bebidas = useBebidasStore()
    const favoritos = ref([])

    onMounted(() => {
        favoritos.value = JSON.parse(localStorage.getItem('favoritos')) ?? []
    })


    watch(favoritos, () => {
        sincronizarLocalStorage()
    }, {
        deep: true
    })

    function sincronizarLocalStorage() {
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
    }


    
    function handleClickFavorito(e) {
        if(existFavorito()) {
            deteleFavorito()
            e.target.textContent = 'Agregar a Favoritos'
        } else {
            addFavorito()
            e.target.textContent = 'Eliminar de Favoritos'
        }
        modal.modal = false
    }



    
    function addFavorito() {
        favoritos.value.push(bebidas.receta)
        
    }
    
    function deteleFavorito() {
        favoritos.value = favoritos.value.filter(favorito => favorito.idDrink !== bebidas.receta.idDrink)
        
    }
    
    function existFavorito() {
        const favoritosLocalStorage = JSON.parse(localStorage.getItem('favoritos')) ?? []
        return favoritosLocalStorage.some(favorito => favorito.idDrink === bebidas.receta.idDrink)

    }


    const noFavoritos = computed(() => favoritos.value.length === 0)



    return {
        existFavorito,
        sincronizarLocalStorage,
        handleClickFavorito,
        favoritos,
        noFavoritos,

    }
})