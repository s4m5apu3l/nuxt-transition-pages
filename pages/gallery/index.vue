<script setup>
const route = useRoute();
const state = useGeneralState();

watch(
	() => state.value.isPreloaderVisible,
	() => {
		contentAnimation({ type: 'image', element: '.page-content__photo' });
	}
);
</script>

<template>
	<div :class="state.pageBg">
		<nuxt-layout name="custom" title="gallery" :pageName="route.name">
			<div class="page-content">
				<nuxt-link v-for="i in 10" :key="i" :to="`/gallery/${i + 1}`" class="page-content__photo hover-image">
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
.page-content {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 16px;
}
</style>
