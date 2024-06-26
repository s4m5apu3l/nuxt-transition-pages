import Lenis from 'lenis';

export const useSmoothScroll = () => {
	const state = useGeneralState();
	state.value.scrollLenis = new Lenis({
		duration: 1.2,
		orientation: 'vertical',
		gestureOrientation: 'vertical',
		smoothWheel: true,
	});

	state.value.scrollLenis.on('scroll', ScrollTrigger.update);

	gsap.ticker.add(time => state.value.scrollLenis.raf(time * 1000));

	gsap.ticker.lagSmoothing(0);
	state.value.scrollLenis.scrollTo(0);
};
