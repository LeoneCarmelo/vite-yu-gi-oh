import { reactive } from 'vue'

const store = reactive({
    searchText: '',
    loading: true,
    urlApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=5&offset=0',
    cards: null,

}) 

export { store }
