<script setup>
const route = useRoute();
const state = useGeneralState();
</script>

<template>
	<div :class="state.pageBg">
		<nuxt-layout name="custom" title="gallery" :pageName="route.name">
			<div class="page-content">
				<nuxt-link v-for="i in 10" :key="i" class="page-content__photo">
					<nuxt-img
						:src="'https://814a7bc2-0fbd-4f94-9849-82da7e26f1b4.selstorage.ru/placeholders/placeholder_rectangle.webp'"
						alt="img"
						loading="lazy"
						format="webp"
					/>
				</nuxt-link>
			</div>
		</nuxt-layout>
	</div>
</template>

<style lang="scss" scoped>
.page-content__photo {
	padding-bottom: 16px;
}
</style>
