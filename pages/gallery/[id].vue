<script setup>
const route = useRoute();
const state = useGeneralState();
</script>

<template>
	<div :class="state.pageBg">
		<nuxt-layout name="custom" :title="`project ${route.params.id}`" :page-name="`project-${route.params.id}`">
			<div class="page-content">
				<div v-for="i in 4" :key="i" class="page-content__block"></div>
			</div>
		</nuxt-layout>
	</div>
</template>

<style lang="scss" scoped>
.page-content__block {
	padding-bottom: 16px;
}
</style>
