
<script>
import axios from 'axios'
export default {
   data() {
      return {
         urlApi: 'https://db.ygoprodeck.com/api/v7/cardinfo.php?num=5&offset=0',
         cards: null
      }
   },
   methods: {

   },
   mounted() {
      axios
         .get(this.urlApi)
         .then(response => {
            console.log(response.data.data.card_sets)//undefined
            this.cards = response.data.data
         })
   }
}
</script>

<template>
   <header class="d-flex p-2">
      <div class="logo m-2">
         <img src="/img/logo-yu-gi-oh.png" alt="" class="img-fluid">
      </div>
      <h1 class="ms-3">Yu-Gi-Oh Api</h1>
   </header>

   <main class="p-3">
      <div class="container">
         <select name="" id=""  class="my-2">
            <option value="Alien">Alien</option>
         </select>
      </div>
         <section class="container cards p-5">
            <div class="row">
               <div class="col-12">
                  <div class="cards_found p-3">Found 39 cards</div>
               </div>
               <ul class="card_list row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
                  <li class="col">
                     <div class="card">
                        <img src="" alt="">
                     </div>
                     <div class="card_title"><!-- {{ cards[0].name }} --></div>
                     <div class="card_archetype"><!-- {{ cards[0].archetype }} --></div>
                  </li>
               </ul>
            </div>
         </section>
   </main>
</template>

<style lang="scss" scoped>
@use './assets/scss/partials/variables.scss' as*;
.logo {
   width: 180px;
}

main {
   background-color: $primary;

   section.cards {
      background-color: $light;

      .cards_found {
         background-color: $dark;
         color: $light;
      }

      ul {
         list-style: none;
      }
   }
}
</style>
