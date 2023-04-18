import { reactive } from 'vue'

const store = reactive({
    searchText: '',
    loading: true,
    urlApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=39&offset=0',
    cards: null,
    selected: ''

}) 

export { store }
