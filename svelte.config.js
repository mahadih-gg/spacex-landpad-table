import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter(),
		alias: {
			src: 'src',
			components: 'src/routes/components',
			lib: 'src/lib',
			assets: 'src/lib/assets',
			store: 'src/lib/store'
		}
	}
};

export default config;
