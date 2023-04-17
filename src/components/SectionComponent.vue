<script>
import CardsList from './CardsList.vue'
import { store } from '../store.js'
export default {
   name: 'SectionComponent',
   components: {
      CardsList
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
      <div class="row">
         <div class="col-12">
            <div class="cards_found p-3">{{ getTotalCards() }}</div>
         </div>
         <CardsList></CardsList>
      </div>
   </section>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

section.cards {
   background-color: $light;

   .cards_found {
      background-color: $dark;
      color: $light;
   }
}
</style>