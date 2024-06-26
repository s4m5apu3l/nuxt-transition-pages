// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	pages: true,
	css: ['@/assets/scss/default.scss'],

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@import "@/assets/scss/utils.scss";',
				},
			},
		},
	},

	modules: ['@nuxt/image'],
	imports: {
		dirs: ['animations'],
	},
	app: {
		head: {
			title: 'gsap scroll',
			charset: 'utf-8',
			viewport: 'width=device-width, initial-scale=1',
		},
	},
});
