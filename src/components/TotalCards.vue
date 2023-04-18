<script>
export default {
    name: 'TotalCards',
    props: {
        totalcards: String
    }
}
</script>

<template>
    <div class="row">
        <div class="col-12 px-0">
            <div class="cards_found p-3">{{ totalcards }}</div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
   .cards_found {
      background-color: $dark;
      color: $light;
   }
   </style>