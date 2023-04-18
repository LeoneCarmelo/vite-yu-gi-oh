<script>
import { store } from '../store'
export default {
    name: 'SelectComponent',
    props: {
        filter: Function
    },
    data() {
        return {
            store
        }
    }
}
</script>

<template>
      <div class="container">
         <select class="my-2" v-model="store.selected" @change="filter"><!-- archetypeFilter() -->
            <option disabled value="">Filter by archetype</option>
            <option>Alien</option>
            <option>Blue-eyes</option>
            <option>Melodious</option>
         </select>
      </div>
</template>


<style lang="scss" scoped></style>