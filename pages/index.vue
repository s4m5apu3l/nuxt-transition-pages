<script setup>
const route = useRoute();
const state = useGeneralState();
</script>

<template>
	<div :class="state.pageBg">
		<nuxt-layout name="custom" title="iind" :pageName="route.name">
			<nuxt-page />
		</nuxt-layout>
	</div>
</template>
