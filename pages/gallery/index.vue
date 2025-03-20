<script setup>
const route = useRoute();
const state = useGeneralState();

onMounted(() => {
	setTimeout(() => {
		contentAnimation({ type: 'image', element: '.page-content__photo' });
	}, 200);
});
</script>

<template>
	<div :class="state.pageBg">
		<nuxt-layout name="custom" title="gallery" :pageName="route.name">
			<div class="page-content">
				<nuxt-link
					v-for="(_, i) in 10"
					:key="i"
					:to="`/gallery/${i + 1}`"
					class="page-content__photo hover-image"
				>
					<nuxt-img :src="`https://placehold.co/400x700/000000/ffffff`" alt="static img" class="img" />
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
	padding-bottom: 60px;
	&__photo {
		aspect-ratio: 1/1.6;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
}
</style>
