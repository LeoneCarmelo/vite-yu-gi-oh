<script>
import SingleCard from './SingleCard.vue'
import { store } from '../store.js'
export default {
    components: {
        SingleCard
    },
    name: 'CardsList',
    data() {
        return {
            store
        }
    }

}
</script>

<template>
    <ul class="card_list  row row-cols-1 row-cols-sm-2 row-cols-md-5 ps-0 justify-content-between ">
        <SingleCard v-for="card in store.cards" :src="card.card_images[0].image_url" :title="card.name"
            :archetype="card.archetype" v-if="!store.loading"/>
            <div class="col-12" v-else>
                <div class="loader">
                    Loading..
                </div>
            </div>
    </ul>
</template>


<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>