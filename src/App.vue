
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
   methods: {
      callApi(url) {
         axios
            .get(url)
            .then(response => {
               console.log(response.data.data[0].card_images[0].image_url)
               this.store.cards = response.data.data
            })
            .catch(err => {
               console.log(err);
               console.log(err.message);
            })
      },
      archetypeFilter() {
         if (store.selected.length > 0) {
            const selection = store.urlApi + `&archetype=${store.selected}`
            this.callApi(selection)
         }
      },
      
   },
   mounted() {
      this.callApi(store.urlApi)
   }

}
</script>

<template>
   <AppHeader></AppHeader>

   <main class="p-3">
      <div class="container">
         <select class="my-2" v-model="store.selected" @change="archetypeFilter()">
            <option disabled value="">Filter by archetype</option>
            <option>Alien</option>
            <option>Blue-eyes</option>
            <option>Melodious</option>
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
