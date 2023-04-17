
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
            console.log(response.data.data)
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
   <main>
   </main>
</template>

<style lang="scss" scoped>
.logo {
   width: 180px;

}
</style>
