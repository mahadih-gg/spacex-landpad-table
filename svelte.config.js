import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import dotenv from 'dotenv';

dotenv.config();

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: vitePreprocess(),

	kit: {
		adapter: adapter({
			runtime: 'nodejs18.x'
		}),
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
