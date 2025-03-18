// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: false },
	// pages: true,
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
		// for static deploy gh-pages
		baseURL: '/nuxt-transition-pages/',
		buildAssetsDir: 'assets',
	},

	hooks: {
		'prerender:routes'({ routes }) {
			routes.clear();
		},
	},
	ssr: false,
});
