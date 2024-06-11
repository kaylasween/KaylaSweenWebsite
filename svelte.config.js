import adapter from '@sveltejs/adapter-netlify'

const config = {
	kit: {
		adapter: adapter(),
		prerender: {
			handleHttpError: 'warn'
		}
	},

	vitePlugin: {
		inspector: {
			holdMode: true
		}
	}
}

export default config