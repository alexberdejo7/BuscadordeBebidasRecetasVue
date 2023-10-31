import {defineStore} from 'pinia'
import {ref, onMounted, reactive} from 'vue'
import axios from 'axios'
import APIService from '../services/APIService'


export const useBebidasStore = defineStore('bebidas', () => {

    const categories = ref([])
    const search = reactive({
        nombre: '',
        categoria: '',
    })

    const recetas = ref([])

    onMounted(async() => {
        const {data: {drinks}} = await APIService.getCategories()
       
        categories.value = drinks
    })

    async function getRecetas() {
        const {data: {drinks}} = await APIService.searchRecetas(search)
        recetas.value= drinks
    }


    return {
        categories,
        search,
        getRecetas,
        recetas
    }
})