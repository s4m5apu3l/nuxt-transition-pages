export function firstScreenAnimation({ parent }) {
	const parentEl = document.querySelector(parent);
	const title = parentEl.querySelector('.default-title');
	const header = parentEl.querySelector('.header');
	const pageMask = parentEl.querySelector('.page-mask');

	const tl = gsap.timeline();

	// tl.to(pageMask, {
	// 	opacity: 0,
	// });
	tl.from(title, {
		yPercent: 100,
		opacity: 0,
		clearProps: 'all',
		duration: .8,
	});

	tl.from(
		header,
		{
			yPercent: -100,
			clearProps: 'all',
		},
		'<'
	);
}
