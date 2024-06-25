<script setup>
const links = [
    {
        name: "main",
        link: "/",
    },
    {
        name: "about",
        link: "/about",
    },
    {
        name: "gallery",
        link: "/gallery",
    },
];
</script>

<template>
    <header class="header">
        <nuxt-link v-for="(link, i) in links" :key="i" :to="link.link">
            {{ link.name }}
        </nuxt-link>
    </header>
</template>

<style scoped></style>
