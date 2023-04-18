<script>
import CardsList from './CardsList.vue'
import { store } from '../store.js'
import TotalCards from './TotalCards.vue'
export default {
   name: 'SectionComponent',
   components: {
      CardsList,
      TotalCards
   },
   data() {
      return {
         store
      }
   },
   methods: {
      getTotalCards() {
         return `Found ${this.store.cards.length} cards`
      }
   },

}
</script>

<template>
   <section class="container cards p-5">
      <TotalCards :totalcards="getTotalCards()" v-if="store.cards"/>
      <CardsList></CardsList>
   </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section.cards {
   background-color: $light;
}
</style>