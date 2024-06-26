<script setup>
const state = useGeneralState();
const persent = ref(0);

onMounted(() => {
	const tl = gsap.timeline();

	tl.to(persent, {
		progress: 100,
		duration: 1,
		onUpdate() {
			persent.value = Math.floor(persent.progress);
		},
		onComplete() {
			state.isPreloaderVisible = false;
		},
	});

	tl.fromTo(
		'.preloader',
		{
			clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
		},
		{
			clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)',
			duration: 1,
		}
	);
});
</script>

<template>
	<div class="preloader">
		<div class="preloader-persent h1">{{ persent }}%</div>
	</div>
</template>

<style lang="scss" scoped>
.preloader {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background: $color-white;
	z-index: $z-preloader;
}
</style>
