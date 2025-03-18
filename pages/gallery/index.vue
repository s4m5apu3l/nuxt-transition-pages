<script setup>
const route = useRoute();
const state = useGeneralState();

// watch(
// 	() => state.value.isPreloaderVisible,
// 	() => {
// 		contentAnimation({ type: 'image', element: '.page-content__photo' });
// 	}
// );

onMounted(() => {
	setTimeout(() => {
		contentAnimation({ type: 'image', element: '.page-content__photo' });
	}, 200);
	// contentAnimation({ type: 'image', element: '.page-content__photo' });
	// watch(
	// 	() => state.value.isPreloaderVisible,
	// 	() => {
	// 		contentAnimation({ type: 'image', element: '.page-content__photo' });
	// 	}
	// );
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
					<nuxt-img
						:src="`https://placehold.co/400x700/000000/ffffff`"
						alt="static img"
						class="img"
						style="width: 100%"
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
	padding-bottom: 60px;
}
</style>
