import {defineStore} from 'pinia'
import {ref, onMounted, computed, reactive} from 'vue'
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
    const receta = ref({})

    onMounted(async() => {
        const {data: {drinks}} = await APIService.getCategories()
       
        categories.value = drinks
    })

    async function getRecetas() {
        const {data: {drinks}} = await APIService.searchRecetas(search)
        recetas.value = drinks
    }

    async function selectBebida(id) {
        const {data: {drinks}} = await APIService.findReceta(id)
        receta.value = drinks[0]

        modal.handleClickModal()
    }


    const noRecetas = computed(() => recetas.value.length === 0)

    return {
        categories,
        search,
        getRecetas,
        recetas,
        selectBebida,
        receta,
        noRecetas,
        
    }
})