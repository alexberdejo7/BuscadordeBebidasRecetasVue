import api from '../lib/axios'

export default {
    getCategories() {
        return api('/list.php?c=list')
    },

    searchRecetas({categoria, nombre}) {
        return api(`/filter.php?c=${categoria}&i=${nombre}`)

    },
    findReceta(id) {
        return api(`/lookup.php?i=${id}`)
    }
}