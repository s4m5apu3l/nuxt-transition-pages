export default defineNuxtPlugin(async () => {
	if (import.meta.client) {
		gsap.registerPlugin(ScrollTrigger);
	}
});
