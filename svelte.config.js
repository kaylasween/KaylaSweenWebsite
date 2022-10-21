import adapter from '@sveltejs/adapter-auto';

const config = {
	kit: {
		adapter: adapter()
	},

	vitePlugin: {
		experimental: {
			inspector: {
				holdMode: true
			}
		}
	}
};

export default config;