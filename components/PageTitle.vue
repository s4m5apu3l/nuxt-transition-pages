<script setup>
const props = defineProps({
	title: String,
});
</script>

<template>
	<div class="default-title h1">
		<h1 v-if="props.title.includes('iind')">{{ props.title }}<span style="text-transform: lowercase; font-size: 0.5em; font-weight: 400;">inda</span></h1>
		<h1 v-else>{{ props.title }}</h1>
	</div>
</template>

<style lang="scss" scoped>
.default-title {
	height: 100dvh;
	display: flex;
	align-items: center;
	justify-content: center;
}
</style>
