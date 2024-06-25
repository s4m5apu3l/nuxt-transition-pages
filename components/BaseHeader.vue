<script setup>
const links = [
	{
		name: 'main',
		link: '/',
	},
	{
		name: 'about',
		link: '/about',
	},
	{
		name: 'gallery',
		link: '/gallery',
	},
];
</script>

<template>
	<header class="header">
		<nuxt-link v-for="(link, i) in links" :key="i" :to="link.link" class="hover-fadein" style="padding: 14px 0">
			{{ link.name }}
		</nuxt-link>
	</header>
</template>

<style lang="scss" scoped>
.header {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 16px;
	z-index: $z-header;
}

.page_white .header {
	background: $color-white;
}
.page_black .header {
	background: $color-black;
}
</style>
