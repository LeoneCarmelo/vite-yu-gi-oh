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
    <li class="col px-0">
        <div class="card">
            <img :src="src" alt="">
        </div>
        <div class="card_title text-center text-uppercase fw-bold text-white">{{ title }}</div>
        <div class="card_archetype text-center">{{ archetype }}</div>
    </li>
</template>


<style lang="scss" scoped>
@use '../assets/scss/partials/variables' as *;
.col {
    background-color: $primary;
}
</style>