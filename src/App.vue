
<script>
import axios from 'axios'
import AppHeader from './components/AppHeader.vue'
import SectionComponent from './components/SectionComponent.vue'
import SelectComponent from './components/SelectComponent.vue'
import { store } from './store.js'
export default {
   components: {
      AppHeader,
      SectionComponent,
      SelectComponent
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
               store.loading = false
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
      <SelectComponent :filter="archetypeFilter()"/>
      <SectionComponent></SectionComponent>
   </main>
</template>

<style lang="scss" scoped>
@use './assets/scss/partials/variables.scss' as*;


main {
   background-color: $primary;
}
</style>
