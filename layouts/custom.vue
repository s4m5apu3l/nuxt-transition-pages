<script setup>
const props = defineProps({
	title: String,
	pageName: String,
});
</script>

<template>
	<div :class="`page ${props.pageName}`" style="padding-bottom: 24px">
		<base-header />
		<div class="l-wrapper">
			<page-title :title="props.title" />
			<slot />
		</div>
	</div>
</template>

<style scoped></style>
