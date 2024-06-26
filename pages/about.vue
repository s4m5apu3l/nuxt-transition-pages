<script setup>
const route = useRoute();
const state = useGeneralState();

watch(
	() => state.value.isPreloaderVisible,
	() => {
		contentAnimation({ type: 'text', element: '.page-content__block' });
	}
);
</script>

<template>
	<div :class="state.pageBg">
		<nuxt-layout name="custom" title="about" :pageName="route.name">
			<div class="page-content" style="padding-bottom: 24px">
				<div v-for="i in 10" :key="i" class="page-content__block p1">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea perferendis assumenda, omnis minima
					tempora adipisci quidem nostrum nihil inventore quos corporis placeat unde, repellat, mollitia
					explicabo delectus molestiae amet reprehenderit.
					<br />
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ipsum aut quae libero sequi
					repudiandae quasi odio quibusdam expedita aspernatur animi, cumque quisquam ad in atque magni
					provident exercitationem soluta.
				</div>
			</div>
		</nuxt-layout>
	</div>
</template>

<style lang="scss" scoped>
.page-content__block {
	padding-bottom: 16px;
}
</style>
