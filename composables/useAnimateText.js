export function useAnimateText(el) {
	const element = typeof el === 'string' ? document.querySelector(el) : el;

	const tl = gsap.timeline();

	if (element) {
		tl.from(element, {
			opacity: 0,
			y: 80,
			duration: 0.8,
			delay: 0.2,
		});
	}

	return tl;
}
