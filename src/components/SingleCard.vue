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
    <li class="col">
        <div class="card">
            <img :src="src" alt="">
        </div>
        <div class="card_title">{{ title }}</div>
        <div class="card_archetype">{{ archetype }}</div>
    </li>
</template>


<style lang="scss" scoped></style>