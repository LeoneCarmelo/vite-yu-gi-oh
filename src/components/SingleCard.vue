<script>

export default {
    name: 'SingleCard',
    props: {
        src: String,
        title: String,
        archetype: String

    }
}
</script>

<template>
    <li class="col px-0 mb-3 rounded-2">
        <div class="card">
            <img :src="src" alt="" class="rounded-2">
        </div>
        <div class="card_body">
            <div class="card_title text-center text-uppercase fw-bold text-white">{{ title }}</div>
            <div class="card_archetype text-center">{{ archetype }}</div>
        </div>
    </li>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;

.col {
    background-color: $primary;
    width: 200px
}

.col:hover {
    box-shadow: 0 0 2px 2px $primary;
}
</style>