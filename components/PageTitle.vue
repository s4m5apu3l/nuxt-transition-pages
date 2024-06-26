<script setup>
const props = defineProps({
	title: String,
});
</script>

<template>
	<div class="default-title h1">
		<h1>{{ props.title }}</h1>
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
