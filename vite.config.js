import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-netlify';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [sveltekit()],
  kit: {
    adapter: adapter()
  }
})
