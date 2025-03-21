<script setup>
const props = defineProps({
	title: String,
	pageName: String,,
});

const state = useGeneralState();

watch(
	() => state.value.isPreloaderVisible,
	() => {
		firstScreenAnimation({ parent: `.${props.pageName}` });
	}
);
</script>

<template>
	<div :class="`l-page ${props.pageName}`">
		<base-header />
		<div class="l-wrapper">
			<page-title :title="props.title" />
			<slot />
		</div>
	</div>
</template>
