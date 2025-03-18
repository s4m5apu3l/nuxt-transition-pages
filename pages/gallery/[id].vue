<script setup>
const route = useRoute();
const state = useGeneralState();

onMounted(() => {
	setTimeout(() => {
		contentAnimation({ type: 'image', element: '.page-content__block-photo' });
		contentAnimation({ type: 'text', element: '.page-content__block-text' });
		contentAnimation({ type: 'text', element: '.page-next' });
	}, 200);
});

// watch(
// 	() => state.value.isPreloaderVisible,
// 	() => {
// 		contentAnimation({ type: 'image', element: '.page-content__block-photo' });
// 		contentAnimation({ type: 'text', element: '.page-content__block-text' });
// 		contentAnimation({ type: 'text', element: '.page-next' });
// 	}
// );

const imgRandom = () => {
	const randomColor = Math.floor(Math.random() * 16777215).toString(16);
	return `https://placehold.co/400x700/${randomColor}/000000`;
};
</script>

<template>
	<div :class="state.pageBg">
		<nuxt-layout name="custom" :title="`project ${route.params.id}`" :page-name="`project-${route.params.id}`">
			<div class="page-content pb-40">
				<div v-for="i in 2" :key="i" class="page-content__block">
					<div class="page-content__block-photo">
						<!-- <nuxt-img
							:src="imgRandom"
							alt="img"
							loading="lazy"
							format="webp"
							class="hover-image img"
							width="400"
						/> -->
						<img :src="imgRandom()" :alt="`static img ${i + 1}`" class="hover-image img" />
					</div>
					<div class="page-content__block-text">
						<p class="p1">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae nisi, velit asperiores eaque
							ipsum, quis cupiditate libero aliquam repellendus aliquid ea. Deserunt voluptatem ad nemo
							aliquam iste dolorum dolores cumque!
						</p>
					</div>
				</div>

				<div class="page-next">
					<nuxt-link class="hover-fadein h2" :to="`/gallery/${Number(route.params.id) + 1}`">
						next project - {{ Number(route.params.id) + 1 }}
					</nuxt-link>
				</div>
			</div>
		</nuxt-layout>
	</div>
</template>

<style lang="scss" scoped>
.pb-40 {
	padding-bottom: 40px;
}
.page-content__block {
	padding-bottom: 48px;
	&-text {
		margin-top: 8px;
	}
}
.img {
	margin: 0 auto;
	display: block;
}
</style>
