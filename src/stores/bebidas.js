import {defineStore} from 'pinia'
import {ref, onMounted, reactive} from 'vue'
import axios from 'axios'
import APIService from '../services/APIService'
import {useModalStore} from '../stores/modal'

export const useBebidasStore = defineStore('bebidas', () => {

    const modal = useModalStore()
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

    async function selectBebida(id) {
        const {data: {drinks}} = await APIService.findReceta(id)
        console.log(drinks[0])

        modal.handleClickModal()
    }

    return {
        categories,
        search,
        getRecetas,
        recetas,
        selectBebida,
    }
})