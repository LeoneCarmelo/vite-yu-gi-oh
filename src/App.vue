
<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import SectionComponent from './components/SectionComponent.vue'
import { store } from './store.js'
export default {
   components: {
      AppHeader,
      SectionComponent
   },
   data() {
      return {
         store
      }
   },
   mounted() {
      axios
         .get(this.store.urlApi)
         .then(response => {
            console.log(response.data.data[0].card_images[0].image_url)
            this.store.cards = response.data.data
         })
         .catch(err => {
            console.log(err);
            console.log(err.message);
         })
   }

}
</script>

<template>
   <AppHeader></AppHeader>

   <main class="p-3">
      <div class="container">
         <select name="" id="" class="my-2">
            <option value="Alien">Alien</option>
         </select>
      </div>
      <SectionComponent></SectionComponent>

   </main>
</template>

<style lang="scss" scoped>
@use './assets/scss/partials/variables.scss' as*;


main {
   background-color: $primary;
}
</style>
