<script setup>
onMounted(() => {
	useSmoothScroll();
});
</script>

<template>
	<div id="viewport" class="l-default-layout">
		<base-loader />
		<slot />
	</div>
</template>

<style scoped></style>
